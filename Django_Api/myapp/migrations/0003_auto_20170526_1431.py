# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_auto_20170501_1316'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='MovieID',
            field=models.CharField(max_length=80, blank=True),
        ),
    ]
