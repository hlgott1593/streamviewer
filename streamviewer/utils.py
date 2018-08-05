import google.oauth2.credentials
import google_auth_oauthlib.flow
from googleapiclient.discovery import build
import settings
import json

class Utils:

	@staticmethod
	def getYouTubeAPI(token):
		with open(settings.GOOGLE_OAUTH2_CLIENT_SECRETS_JSON) as json_file:
			client_secret = json.load(json_file)
			credentials = {
				'token': token,
				'refresh_token': None,
				'token_uri': client_secret['token_uri'],
				'client_id': client_secret.['client_id'],
				'client_secret': client_secret.['client_secret'],
				'scopes': client_secret.['scopes']
			}
			credentials = google.oauth2.credentials.Credentials(**credentials)
			return build(
				settings.YOUTUBE_API_SERVICE_NAME, 
				settings.YOUTUBE_API_VERSION, 
				credentials = credentials
			)

	@staticmethod
	def credentialsToDict(credentials):
		return {
			'token': credentials.token,
			'refresh_token': credentials.refresh_token,
			'token_uri': credentials.token_uri,
			'client_id': credentials.client_id,
			'client_secret': credentials.client_secret,
			'scopes': credentials.scopes
		}