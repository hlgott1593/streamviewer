"""herokutest URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.conf.urls import include
from django.contrib import admin
from django.views.generic import TemplateView
from api import resources

#essage_resource = MessageResource()
#auth_resource = Authentication()

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', resources.index, name='root'),
    url(r'^api/streams$', resources.getLiveStreams),
    url(r'^api/streams/(?P<videoId>[a-zA-Z0-9_.-]+)/$', resources.getStreamInfo),
    url(r'^api/message/(?P<liveChatId>[a-zA-Z0-9_.-]+)/$', resources.getChatMessages),
    url(r'^api/message$', resources.putChatMessage),
    url(r'^auth/', resources.authorize, name='auth'),
    url(r'^oauth2callback/', resources.oauth2callback, name='oauth2callback'),
    url(r'^logout/', resources.logout, name='logout'),
]
