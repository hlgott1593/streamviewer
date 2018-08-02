from tastypie.resources import ModelResource
from api.models import Message
from django.views.generic import TemplateView
from django.shortcuts import redirect
from django.http import JsonResponse
from googleapiclient.discovery import build
from django.core import serializers
import google.oauth2.credentials
import google_auth_oauthlib.flow
import json

CLIENT_SECRETS_FILE='./client_secrets.json'
SCOPES = [
	'https://www.googleapis.com/auth/userinfo.profile',
	'https://www.googleapis.com/auth/userinfo.email',
	'https://www.googleapis.com/auth/youtube.readonly',
	'https://www.googleapis.com/auth/youtube.force-ssl', 
	'https://www.googleapis.com/auth/youtube'
]
API_SERVICE_NAME = 'youtube'
API_VERSION = 'v3'


class MessageResource(ModelResource):
    class Meta:
        queryset = Message.objects.all()
        resource_name = 'message'


def credentials_to_dict(credentials):
  return {'token': credentials.token,
          'refresh_token': credentials.refresh_token,
          'token_uri': credentials.token_uri,
          'client_id': credentials.client_id,
          'client_secret': credentials.client_secret,
          'scopes': credentials.scopes}


def index(request):
	if not request.session.get('credentials'):
		return redirect('auth')

	# Valid cred
	return TemplateView.as_view(template_name="index.html")(request)


def authorize(request):
	# Create flow instance to manage the OAuth 2.0 Authorization Grant Flow steps.
	flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
		CLIENT_SECRETS_FILE, scopes=SCOPES, redirect_uri='https://rocky-eyrie-31084.herokuapp.com/oauth2callback')

	#flow.redirect_uri = flask.url_for('oauth2callback', _external=True)

	authorization_url, state = flow.authorization_url(
		# Enable offline access so that you can refresh an access token without
		# re-prompting the user for permission. Recommended for web server apps.
		access_type='offline',
		# Enable incremental authorization. Recommended as a best practice.
		include_granted_scopes='true')

	# Store the state so the callback can verify the auth server response.
	#flask.session['state'] = state
	request.session['state'] = state

	return redirect(authorization_url)

def oauth2callback(request):
	state = request.session['state']
	flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
    	CLIENT_SECRETS_FILE, scopes=SCOPES, state=state)
	flow.redirect_uri = 'https://rocky-eyrie-31084.herokuapp.com/oauth2callback'

	# Use the authorization server's response to fetch the OAuth 2.0 tokens.
	authorization_response = request.build_absolute_uri()
	flow.fetch_token(authorization_response=authorization_response)

	# Store credentials in the session.
	# ACTION ITEM: In a production app, you likely want to save these
	#              credentials in a persistent database instead.
	credentials = flow.credentials
	request.session['credentials'] = credentials_to_dict(credentials)
	
	return redirect('root')

def logout(request):
	del request.session['credentials']
	#request.session['credentials'] = None
	request.session.modified = True
	return JsonResponse({'status': 'success'})


# Retrieve a list of broadcasts with the specified status.
# def getBroadcasts(youtube, broadcast_status):
# 	print 'Broadcasts with status "%s":' % broadcast_status

# 	list_broadcasts_request = youtube.liveBroadcasts().list(
# 		broadcastStatus=broadcast_status,
# 		part='id,snippet',
# 		maxResults=50
# 	)
# 	print(list_broadcasts_request.to_json())
# 	while list_broadcasts_request:
# 		list_broadcasts_response = list_broadcasts_request.execute()
# 		#return list_broadcasts_response
# 		print(list_broadcasts_request.to_json())
# 		for broadcast in list_broadcasts_response.get('items', []):
# 			print '%s (%s)' % (broadcast['snippet']['title'], broadcast['id'])

# 		list_broadcasts_request = youtube.liveBroadcasts().list_next(
# 			list_broadcasts_request, list_broadcasts_response)

def getYouTubeAPI(request):
	credentials = google.oauth2.credentials.Credentials(
		**request.session['credentials'])
	return build(API_SERVICE_NAME, API_VERSION, credentials = credentials)

def getLiveStreams(request):
	response = {'status': 'FAILED'}
	if not request.session['credentials']:
		return JsonResponse(response)

	youtube = getYouTubeAPI(request)
	search_response = youtube.search().list(
		eventType='live',
		type='video',
		part="id,snippet",
		maxResults=10
	).execute()

	response['status'] = 'SUCCESS'
	response['streams'] = search_response.get("items", [])
	return JsonResponse(response)

def getStreamInfo(request, videoId):
	response = {'status': 'FAILED'}
	if not request.session['credentials']:
		return JsonResponse(response)

	youtube = getYouTubeAPI(request)
	search_response = youtube.videos().list(
		part='snippet,liveStreamingDetails',
      	id=videoId
	).execute()

	response['status'] = 'SUCCESS'
	response['streamInfo'] = search_response.get("items", [])[0]
	return JsonResponse(response)

def getChatMessages(request, liveChatId):
	response = {'status': 'FAILED'}
	if not request.session['credentials']:
		return JsonResponse(response)

	youtube = getYouTubeAPI(request)
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

def putChatMessage(request):
	response = {'status': 'FAILED'}
	if not request.session['credentials']:
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

