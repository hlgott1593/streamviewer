# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.db.models import Count
from serializers import MessageSerializer, MessageByUserSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
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

class MessageViewSet(viewsets.ModelViewSet):

	@action(detail=False)
	def getMessages(self, request):
		response = {'status': 'FAILED'}
		# check for token and return if not authorized
		token = request.GET.get('token')
		if not token:
			response['reason'] = 'user must login first'
			return JsonResponse(response)
		# checking for required liveChatId
		liveChatId = request.GET.get('liveChatId')
		if liveChatId:
			youtube = Utils.getYouTubeAPI(token)
			
			chatParams = {}
			chatParams['liveChatId'] = liveChatId
			chatParams['part'] = 'id,snippet,authorDetails'
			chatParams['profileImageSize'] = 32
			# get pageToken from query string if exists
			# if no pageToken is given youtube api will
			# give a default set of results. If a token
			# is provided youtube api will only return 
			# new messages.
			pageToken = request.GET.get('nextPageToken')
			if (pageToken):
				chatParams['pageToken'] = pageToken

			search_response = youtube.liveChatMessages().list(**chatParams).execute()
			messages = search_response.get("items", [])

			# attempts to save each message to database
			# using message's id as primary key
			for message in messages:
				try:
					Message.objects.create(
						pk = message.get('id'),
						username = message.get('authorDetails').get('displayName'),
						liveChatId = liveChatId,
						text = message.get('snippet').get('displayMessage')
					)
				except Exception as e: 
					print(e)
			# creating response object
			response['status'] = 'SUCCESS'
			response['nextPageToken'] = search_response.get("nextPageToken")
			response['pollingIntervalMillis'] = search_response.get("pollingIntervalMillis")
			response['messages'] = messages
		else:
			response['reason'] = 'liveChatId is required'
		return JsonResponse(response)

	@action(detail=False)
	def sendMessage(self, request):
		response = {'status': 'FAILED'}
		#check for token and return if not authorized
		token = request.data.get('token')
		if not token:
			return JsonResponse(response)

		# get POST data variables
		messageText = request.data.get('messageText')
		liveChatId = request.data.get('liveChatId')
		youtube = Utils.getYouTubeAPI(token)
		# send chat message to youtube api
		insert_response = youtube.liveChatMessages().insert(
    		part='snippet',
    		body=dict(
       			snippet=dict(
       				liveChatId=liveChatId,
       				type='textMessageEvent',
       				textMessageDetails=dict(
						messageText=messageText
	    			)
	    		)
    		)
		).execute()

		response['result'] = insert_response
		return JsonResponse(response)

	@action(detail=False)
	def getMessagesByUserCount(self, request):
		response = {'status': 'FAILED'}
		
		liveChatId = request.GET.get('liveChatId')
		if liveChatId:
			# get aggregate of messages by filtering
			# on received liveChatId and grouping by
			# username
			querySet = Message.objects.all() \
				.filter(liveChatId=liveChatId) \
				.values('username') \
				.annotate(count=Count('username'))
			queryData = MessageByUserSerializer(querySet, many=True).data		
			# updating response object
			response['status'] = 'SUCCESS';
			response['messagesByUser'] = queryData
		return JsonResponse(response)

	@action(detail=False)
	def getMessagesByUsername(self, request):
		response = {'status': 'FAILED'}

		searchString = request.GET.get('username')
		if searchString:
			# Query messages for any username starting with
			# query param username
			querySet = Message.objects.filter(username__startswith=searchString)
			queryData = MessageSerializer(querySet, many=True).data
			# creating response object
			response['status'] = "SUCCESS"
			response['messages'] = queryData

		return JsonResponse(response)


class StreamViewSet(viewsets.ModelViewSet):

	@action(detail=False)
	def getStreamList(self, request):
		response = {'status': 'FAILED'}
		#check for token and return if not authorized
		token = request.GET.get('token')
		if not token:
			response['reason'] = 'user must login first'
			return JsonResponse(response)

		# perform youtube search for first 10 live stream results
		youtube = Utils.getYouTubeAPI(token)
		search_response = youtube.search().list(
			eventType='live',
			type='video',
			part="id,snippet",
			maxResults=10
		).execute()
		# setting response object
		response['status'] = 'SUCCESS'
		response['streams'] = search_response.get("items", [])
		return JsonResponse(response)

	@action(detail=True)
	def getStreamDetails(self, request, videoId=None):
		response = {'status': 'FAILED'}
		#check for token and return if not authorized
		token = request.GET.get('token')
		if not token:
			response['reason'] = 'user must login first'
			return JsonResponse(response)

		youtube = Utils.getYouTubeAPI(token)
		# retrieving stream details from youtube api
		# for a given youtube videoId 
		search_response = youtube.videos().list(
			part='snippet,statistics,liveStreamingDetails,contentDetails',
	      	id=videoId
		).execute()

		results = search_response.get("items", [])
		# updating response object
		if len(results) > 0:
			response['streamInfo'] = results[0]
			response['status'] = 'SUCCESS'
		else:
			response['reason'] = 'No results were found'

		return JsonResponse(response)


