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
from rest_framework import renderers
from django.views.generic import TemplateView
from views import MessageViewSet, StreamViewSet
from api import resources

from views import MessageViewSet
from rest_framework.routers import DefaultRouter


messageView = MessageViewSet.as_view({
    'get': 'getMessages',
    'post': 'sendMessage'
    }, renderer_classes=[renderers.StaticHTMLRenderer])

streamList = StreamViewSet.as_view({
    'get': 'getStreamList'
    }, renderer_classes=[renderers.StaticHTMLRenderer])

streamDetails = StreamViewSet.as_view({
    'get': 'getStreamDetails'
    }, renderer_classes=[renderers.StaticHTMLRenderer])

# router = DefaultRouter()
# router.register(r'messages', testM, base_name='messages')
# urlpatterns = [
#     url(r'^', include(router.urls))
# ]
urlpatterns = [
    url(r'^message$', messageView, name='messages'),
    url(r'^streams$', streamList, name='streamList'),
    url(r'^streams/(?P<videoId>[a-zA-Z0-9_.-]+)/$', streamDetails, name='streamDetails')
    # url(r'^streams$', resources.getLiveStreams),
    # url(r'^message/(?P<liveChatId>[a-zA-Z0-9_.-]+)/$', resources.getChatMessages),
    # url(r'^message$', resources.putChatMessage),
]


# urlpatterns = [
#     url(r'^$', resources.index, name='root'),
#     url(r'^streams$', resources.getLiveStreams),
#     url(r'^streams/(?P<videoId>[a-zA-Z0-9_.-]+)/$', resources.getStreamInfo),
#     url(r'^message/(?P<liveChatId>[a-zA-Z0-9_.-]+)/$', resources.getChatMessages),
#     url(r'^message$', resources.putChatMessage),
# ]
