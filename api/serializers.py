from rest_framework import routers, serializers, viewsets
from models import Message
# Serializers define the API representation.
class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('messageId','username','liveChatId','text')

class MessageByUserSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=50)
    count = serializers.IntegerField()
