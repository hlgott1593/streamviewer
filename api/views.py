# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.db.models import Count
from django.core import serializers as coreSerializers
from serializers import MessageSerializer
from rest_framework.decorators import action
from rest_framework import status, viewsets
from rest_framework.response import Response
from django.http import JsonResponse
from models import Message
from django.views.generic import TemplateView
from googleapiclient.discovery import build
import google.oauth2.credentials
import google_auth_oauthlib.flow
from django.shortcuts import redirect
from streamviewer.utils import Utils
import json

from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

class MessageViewSet(viewsets.ModelViewSet):
	#queryset = Message.objects.all()
	#serializer_class = MessageSerializer
	#serializer_class = MessageSerializer

	@action(detail=False)
	def getMessages(self, request):
		response = {'status': 'FAILED'}
		token = request.GET.get('token')
		if not token:
			response['reason'] = 'user must login first'
			return JsonResponse(response)

		liveChatId = request.GET.get('liveChatId')
		if liveChatId:
			youtube = Utils.getYouTubeAPI(token)
			# get pageToken from query string if exists
			chatParams = {}
			chatParams['liveChatId'] = liveChatId
			chatParams['part'] = 'id,snippet,authorDetails'
			chatParams['profileImageSize'] = 32
			pageToken = request.GET.get('nextPageToken')
			if (pageToken):
				chatParams['pageToken'] = pageToken

			search_response = youtube.liveChatMessages().list(**chatParams).execute()

			#save messages to local db
			#messages = Message.objects.all()
			#json_data = serializers.serialize("json", messages)

			response['status'] = 'SUCCESS'
			response['nextPageToken'] = search_response.get("nextPageToken")
			response['pollingIntervalMillis'] = search_response.get("pollingIntervalMillis")
			response['messages'] = search_response.get("items", [])
		else:
			response['reason'] = 'liveChatId is required'
		# response['status'] = 'SUCCESS'
		# response['nextPageToken'] = 'asdf'
		# response['pollingIntervalMillis'] = '2000'
		# response['messages'] = ['y4sa', 'asf4f', 'asdf']
		return JsonResponse(response)

	@action(detail=False)
	def sendMessage(self, request):
		response = {'status': 'FAILED'}
		token = request.data.get('token')
		if not token:
			return JsonResponse(response)

		# get username from session
		messageText = request.data.get('messageText')
		liveChatId = request.data.get('liveChatId')
		youtube = Utils.getYouTubeAPI(token)
		insert_response = youtube.liveChatMessages().insert({
	      'part': 'snippet',
	      'snippet': {
	        'liveChatId': liveChatId,
	        'type': 'textMessageEvent',
	        'textMessageDetails': {
	          'messageText': messageText
	        }
	      }
	    }).execute()
		
		#save message locally
		# Message.objects.create(
		# 	username='Alex',
		# 	liveChatId=liveChatId,
		# 	text=messageText
		# )

		response['result'] = insert_response
		return JsonResponse(response)

	@action(detail=False)
	def getMessagesByCount(self, request):
		response = {'status': 'FAILED'}
		# if not request.session.get('credentials'):
		# 	return JsonResponse(response)
		querySet = Message.objects \
			.values('username') \
			.annotate(dcount=Count('username'))
		queryData = coreSerializers.serialize(
			'json',
			querySet, 
			fields=('username', 'count')
		)
		print(queryData)
		response['messageByCount'] = queryData

		
		return JsonResponse(response)


class StreamViewSet(viewsets.ModelViewSet):

	@action(detail=False)
	def getStreamList(self, request):
		# queryset = Message.objects.all()
		# serializer = MessageSerializer(queryset, many=True)
		# print('made it list2')
		# #return Response(JSONRenderer().render(serializer.data))
		response = {'status': 'FAILED'}
		token = request.GET.get('token')
		if not token:
			return JsonResponse(response)

		youtube = Utils.getYouTubeAPI(token)
		search_response = youtube.search().list(
			eventType='live',
			type='video',
			part="id,snippet",
			maxResults=10
		).execute()

		response['status'] = 'SUCCESS'
		response['streams'] = search_response.get("items", [])
		return JsonResponse(response)

	@action(detail=True)
	def getStreamDetails(self, request, videoId=None):
		# queryset = Message.objects.all()
		# serializer = MessageSerializer(queryset, many=True)
		# print(pk)
		# #return Response(JSONRenderer().render(serializer.data))
		# return Response(JSONRenderer().render(serializer.data))
		response = {'status': 'FAILED'}
		token = request.GET.get('token')
		if not token:
			#print(request.session.get_decoded())
			return JsonResponse(response)

		youtube = Utils.getYouTubeAPI(token)
		search_response = youtube.videos().list(
			part='snippet,statistics,liveStreamingDetails,contentDetails',
	      	id=videoId
		).execute()

		results = search_response.get("items", [])
		if len(results) > 0:
			response['streamInfo'] = results[0]
			response['status'] = 'SUCCESS'
		else:
			response['reason'] = 'No results were found'

		return JsonResponse(response)


