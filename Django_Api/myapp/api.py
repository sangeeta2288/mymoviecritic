from tastypie.resources import ModelResource
from myapp.models import Critic, Review, User
from tastypie import fields
from tastypie.api import Api
from tastypie.exceptions import InvalidFilterError
import datetime



class CriticResource(ModelResource):
    class Meta:
        queryset = Critic.objects.all()
        resource_name = 'critic'



v1_api = Api(api_name='v1')
v1_api.register(CriticResource())

