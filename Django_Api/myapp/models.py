from django.db import models

class Critic(models.Model):
    name = models.CharField(max_length=80)

    def __unicode__(self):
        return u'%s' % self.name

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

class User(models.Model):
    name = models.CharField(max_length=80)
    critic = models.ForeignKey(Critic)
    

    def __unicode__(self):
        return u'%s - %s' % self.name

