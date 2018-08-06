# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User
from django.db import models

# Message Model
class Message(models.Model):
	messageId = models.CharField(max_length=200, primary_key=True)
	username = models.TextField(max_length=50)
	liveChatId = models.TextField(max_length=200)
	text = models.TextField()