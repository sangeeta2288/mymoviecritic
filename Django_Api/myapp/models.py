from django.db import models

class Critic(models.Model):
    name = models.CharField(max_length=80)

    def __unicode__(self):
        return u'%s' % self.name

