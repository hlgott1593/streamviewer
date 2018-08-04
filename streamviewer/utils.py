import google.oauth2.credentials
import google_auth_oauthlib.flow
from googleapiclient.discovery import build
import settings

class Utils:

	@staticmethod
	def getYouTubeAPI(request):
		credentials = google.oauth2.credentials.Credentials(
			**request.session.get('credentials'))
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