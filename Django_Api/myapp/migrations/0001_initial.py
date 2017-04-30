# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Critic',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('name', models.CharField(max_length=80)),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('MovieID', models.CharField(max_length=80)),
                ('Movietitle', models.CharField(max_length=80)),
                ('review', models.TextField()),
                ('Rating', models.IntegerField()),
                ('release_date', models.DateField()),
                ('critic', models.ForeignKey(to='myapp.Critic')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('name', models.CharField(max_length=80)),
                ('critic', models.ForeignKey(to='myapp.Critic')),
            ],
        ),
    ]
