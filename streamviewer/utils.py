import google.oauth2.credentials
import google_auth_oauthlib.flow
from googleapiclient.discovery import build
import settings
import json

class Utils:

	@staticmethod
	def getYouTubeAPI(token):
		# open local secret file
		with open(settings.BASE_DIR + '/' + settings.GOOGLE_OAUTH2_CLIENT_SECRETS_JSON) as json_file:
			client_secret = json.load(json_file)['web']
			credentials = {
				'token': token,
				'refresh_token': None,
				'token_uri': client_secret['token_uri'],
				'client_id': client_secret['client_id'],
				'client_secret': client_secret['client_secret'],
				'scopes': settings.YOUTUBE_API_SCOPES
			}
			# build credentials object with client secret json object
			credentials = google.oauth2.credentials.Credentials(**credentials)
			# create youtube api service
			return build(
				settings.YOUTUBE_API_SERVICE_NAME, 
				settings.YOUTUBE_API_VERSION, 
				credentials = credentials
			)

	@staticmethod
	def credentialsToDict(credentials):
		# converts YouTube API Credentials object to dictionary
		return {
			'token': credentials.token,
			'refresh_token': credentials.refresh_token,
			'token_uri': credentials.token_uri,
			'client_id': credentials.client_id,
			'client_secret': credentials.client_secret,
			'scopes': credentials.scopes
		}