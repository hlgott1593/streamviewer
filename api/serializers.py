from rest_framework import routers, serializers, viewsets
from models import Message
# Serializers define the API representation.
class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('message_id','username','video_id','text')