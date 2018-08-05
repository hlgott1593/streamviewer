import google.oauth2.credentials
import google_auth_oauthlib.flow
from googleapiclient.discovery import build
import settings
import json

class Utils:

# {u'client_secret': u'AxzyoIo8g2l8YgVRi-1wsxFZ', u'redirect_uris': [], 
# u'token_uri': u'https://accounts.google.com/o/oauth2/token', u'client_id': u'912393781618-7i3v4974r20jsfvgtuqihis4q1thvmvr.apps.googleusercontent.com', u'auth_uri': u'https://accounts.google.com/o/oauth2/auth'}

	@staticmethod
	def getYouTubeAPI(token):
		with open(settings.BASE_DIR + settings.GOOGLE_OAUTH2_CLIENT_SECRETS_JSON) as json_file:
			client_secret = json.load(json_file)['web']
			print(client_secret)
			credentials = {
				'token': token,
				'refresh_token': None,
				'token_uri': client_secret['token_uri'],
				'client_id': client_secret['client_id'],
				'client_secret': client_secret['client_secret'],
				'scopes': settings.YOUTUBE_API_SCOPES
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