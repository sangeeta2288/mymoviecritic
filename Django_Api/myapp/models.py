from django.db import models
from django.contrib.auth.models import User

class Critic(models.Model):
    name = models.CharField(max_length=80)

    def __unicode__(self):
        return u'%s' % self.name

    def __str__(self):
        return self.name

class Review(models.Model):
    MovieID = models.CharField(max_length=80)
    Movietitle = models.CharField(max_length=80)
    critic = models.ForeignKey(Critic)
    review = models.TextField()
    Rating = models.IntegerField()
    release_date = models.DateField()
    
    def __unicode__(self):
        return u'%s' % self.name  

    @property
    def year(self):
        return self.release_date.year

class UserCritic(models.Model):
    name = models.CharField(max_length=80)
    critic = models.ForeignKey(Critic)
    user = models.ForeignKey(User)
    

    def __unicode__(self):
        return u'%s - %s' % self.name

