# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserCritic',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('name', models.CharField(max_length=80)),
                ('critic', models.ForeignKey(to='myapp.Critic')),
            ],
        ),
        migrations.RemoveField(
            model_name='user',
            name='critic',
        ),
        migrations.DeleteModel(
            name='User',
        ),
        migrations.AddField(
            model_name='usercritic',
            name='user',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL),
        ),
    ]
