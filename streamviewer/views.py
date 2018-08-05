from api.models import Message
from django.views.generic import TemplateView
from django.shortcuts import redirect
from django.shortcuts import render
from django.http import JsonResponse
from googleapiclient.discovery import build
from django.core import serializers
import google.oauth2.credentials
import google_auth_oauthlib.flow
import json
import settings
from utils import Utils

class IndexView(TemplateView):
    template_name = "index.html"

    def get_context_data(self, **kwargs):
    	token = ''
        context = super(IndexView, self).get_context_data(**kwargs)

        if (self.request.session.get('credentials')):
	    	token = self.request.session.get('credentials').get('token')
        context['token'] = token
        return context


def index(request):
	if not request.session.get('credentials'):
		return redirect('auth')

	# Valid credentials
	return IndexView.as_view()(request)

def authorize(request):
	# Create flow instance to manage the OAuth 2.0 Authorization Grant Flow steps.
	flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
		settings.GOOGLE_OAUTH2_CLIENT_SECRETS_JSON, 
		scopes=settings.YOUTUBE_API_SCOPES,
		redirect_uri=settings.REDIRECT_URL
	)

	authorization_url, state = flow.authorization_url(
		# Enable offline access so that you can refresh an access token without
		# re-prompting the user for permission. Recommended for web server apps.
		access_type='offline',
		# Enable incremental authorization. Recommended as a best practice.
		include_granted_scopes='true')

	# Store the state so the callback can verify the auth server response.
	request.session['state'] = state
	return redirect(authorization_url)

def oauth2callback(request):
	state = request.session['state']
	flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
    	settings.GOOGLE_OAUTH2_CLIENT_SECRETS_JSON, 
    	scopes=settings.YOUTUBE_API_SCOPES, 
    	state=state
	)
	flow.redirect_uri = settings.REDIRECT_URL

	# Use the authorization server's response to fetch the OAuth 2.0 tokens.
	authorization_response = request.build_absolute_uri()
	flow.fetch_token(authorization_response=authorization_response)

	# Store credentials in the session.
	credentials = flow.credentials
	request.session['credentials'] = Utils.credentialsToDict(credentials)
	
	return redirect('root')

def logout(request):
	# Delete credentials from session
	del request.session['credentials']
	request.session.modified = True
	return redirect('root')