# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User
from django.db import models
# from oauth2client.contrib.django_orm import FlowField
# from oauth2client.contrib.django_orm import CredentialsField

# class CredentialsModel(models.Model):
#   id = models.ForeignKey(User, primary_key=True)
#   credential = CredentialsField()

# class FlowModel(models.Model):
#   id = models.ForeignKey(User, primary_key=True)
#   flow = FlowField()



# Create your models here.
class Message(models.Model):
	message_id = models.AutoField(primary_key=True)
	username = models.TextField(max_length=50)
	video_id = models.TextField(max_length=200)
	text = models.TextField()

	



# class Post(models.Model):
# 	title = models.CharField(max_length=255)
# 	slug = models.SlugField(unique=True, max_length=255)
# 	content = models.TextField()
# 	created_on = models.DateTimeField(auto_now_add=True)
# 	author = models.TextField()


# 	@models.permalink
# 	def get_absolute_url(self):
# 		return ('blog_post_detail', (),
# 			{
# 				'slug': self.slug,
# 			})
# 	def save(self, *args, **kwargs):
# 		if not self.slug:
# 			self.slug = slugify(self.title)
# 			super(Post, self).save(*args, **kwargs)