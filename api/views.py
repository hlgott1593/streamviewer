# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
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
from streamviwer.utils import Utils
import json

from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

class MessageViewSet(viewsets.ModelViewSet):
	#queryset = Message.objects.all()
	#serializer_class = MessageSerializer
	#serializer_class = MessageSerializer

	@action(detail=False)
	def getMessages(self, request):
		# queryset = Message.objects.all()
		# serializer = MessageSerializer(queryset, many=True)
		# print('made it list2')
		# return Response(JSONRenderer().render(serializer.data))
		response = {'status': 'FAILED'}
		if not request.session.get('credentials'):
			return JsonResponse(response)

		youtube = Utils.getYouTubeAPI(request)
		# get pageToken from query string if exists
		chatParams = {}
		chatParams['liveChatId'] = liveChatId
		chatParams['part'] = 'id,snippet'
		chatParams['profileImageSize'] = 32
		pageToken = request.GET.get('pageToken')
		if (pageToken):
			chatParams['pageToken'] = pageToken

		search_response = youtube.liveChatMessages().list(**chatParams).execute()

		#save messages to local db
		#messages = Message.objects.all()
		#json_data = serializers.serialize("json", messages)

		response['status'] = 'SUCCESS'
		response['messages'] = search_response.get("items", [])
		return JsonResponse(response)

	@action(detail=False)
	def sendMessage(self, request):
		# queryset = Message.objects.all()
		# serializer = MessageSerializer(queryset, many=True)
		# print('made it')
		# return Response(JSONRenderer().render(serializer.data))
		response = {'status': 'FAILED'}
		if not request.session.get('credentials'):
			return JsonResponse(response)

		# get username from session
		username = 'Alex'
		messageText = request.POST['messageText']
		liveChatId = request.POST['liveChatId']

		insert_response = youtube.liveChatMessages.insert({
	      'part': 'snippet',
	      'snippet': {
	        'liveChatId': liveChatId,
	        'type': 'textMessageEvent',
	        'textMessageDetails': {
	          'messageText': messageText,
	        },
	      },
	    }).execute()
		
		#save message locally
		# Message.objects.create(
		# 	username='Alex',
		# 	liveChatId=liveChatId,
		# 	text=messageText
		# )

		response['result'] = insert_response
		return JsonResponse(response)

class StreamViewSet(viewsets.ModelViewSet):

	@action(detail=False)
	def getStreamList(self, request):
		# queryset = Message.objects.all()
		# serializer = MessageSerializer(queryset, many=True)
		# print('made it list2')
		# #return Response(JSONRenderer().render(serializer.data))
		response = {'status': 'FAILED'}
		if not request.session.get('credentials'):
			return JsonResponse(response)

		youtube = Utils.getYouTubeAPI(request)
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
		if not request.session.get('credentials'):
			return JsonResponse(response)

		youtube = Utils.getYouTubeAPI(request)
		search_response = youtube.videos().list(
			part='snippet,liveStreamingDetails',
	      	id=videoId
		).execute()

		response['status'] = 'SUCCESS'
		response['streamInfo'] = search_response.get("items", [])[0]
		return JsonResponse(response)


