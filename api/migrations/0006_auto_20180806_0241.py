# -*- coding: utf-8 -*-
# Generated by Django 1.11.14 on 2018-08-06 02:41
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20180806_0239'),
    ]

    operations = [
        migrations.RenameField(
            model_name='message',
            old_name='message_id',
            new_name='messageId',
        ),
    ]
