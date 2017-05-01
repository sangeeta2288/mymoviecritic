from tastypie.resources import ModelResource
from myapp.models import Critic, Review, User, UserCritic
from tastypie import fields
from tastypie.api import Api
from tastypie.exceptions import InvalidFilterError
import datetime
from django.contrib.auth.models import User
from tastypie.authentication import Authentication
from tastypie.authorization import Authorization
from django.db import IntegrityError
from tastypie import fields
from tastypie.exceptions import BadRequest
from tastypie.serializers import Serializer
from .serializers import JsonOnlySerializer
from django.contrib.auth import authenticate, login, logout
from tastypie.http import HttpUnauthorized, HttpForbidden
from django.conf.urls import url
from tastypie.utils import trailing_slash


class UserResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'user'


class CreateUserResource(ModelResource):
        class Meta:
            allowed_methods = ['post']
            object_class = User
            authentication = Authentication()
            authorization = Authorization()
            include_resource_uri = False
            queryset = User.objects.all()
            resource_name = 'usercreate'
            always_return_data =True
            serializer = JsonOnlySerializer()
            excludes = ('is_active' , 'is_staff' , 'is_superuser')


        def obj_create(self, bundle, request=None, **kwargs):
            try:
                bundle = super(CreateUserResource, self).obj_create(bundle, user=bundle.request.user)
                bundle.obj.set_password(bundle.data.get('password'))
                bundle.obj.save()
            except IntegrityError:
                raise BadRequest('That username already exists')
            return bundle

class UserLoginResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        fields = ['first_name', 'last_name', 'email']
        allowed_methods = ['get', 'post']
        resource_name = 'user'

    def override_urls(self):
        return [
            url(r"^(?P<resource_name>%s)/login%s$" %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('login'), name="api_login"),
            url(r'^(?P<resource_name>%s)/logout%s$' %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('logout'), name='api_logout'),
        ]

    def login(self, request, **kwargs):
        self.method_check(request, allowed=['post'])

        data = self.deserialize(request, request.body , format=request.META.get('CONTENT_TYPE', 'application/json'))

        username = data.get('username', '')
        password = data.get('password', '')

        user = authenticate(username=username, password=password)
        if user:
            if user.is_active:
                login(request, user)
                return self.create_response(request, {
                    'success': True
                })
            else:
                return self.create_response(request, {
                    'success': False,
                    'reason': 'disabled',
                    }, HttpForbidden )
        else:
            return self.create_response(request, {
                'success': False,
                'reason': 'incorrect',
                }, HttpUnauthorized )

    def logout(self, request, **kwargs):
        self.method_check(request, allowed=['get'])
        if request.user and request.user.is_authenticated():
            logout(request)
            return self.create_response(request, { 'success': True })
        else:
            return self.create_response(request, { 'success': False }, HttpUnauthorized)


class CriticResource(ModelResource):
    class Meta:
        queryset = Critic.objects.all()
        resource_name = 'critic'

class ReviewResource(ModelResource):
    Critic = fields.ForeignKey(CriticResource, 'critic')

    class Meta:
        queryset = Review.objects.all()
        resource_name = 'review'

    # def dehydrate(self, bundle):
    #     bundle.data['tid'] = bundle.obj.tid
    #     return bundle

    def build_filters(self, filters=None):
        res = super(ReviewResource, self).build_filters(filters)

        if 'tid' in filters:
            try:
                res.update({'tid': str(filters['tid'])})
            except:
                raise InvalidFilterError('tid must be an integer!')
        return res

    def apply_filters(self, request, applicable_filters):
        tid = applicable_filters.pop('tid', None)
        qs = super(ReviewResource, self).apply_filters(request, applicable_filters)

        if tid is not None:
            return qs.filter(
                MovieID = tid) 
                # release_date__lte=datetime.date(tid,12,31))
        return qs   


class UserCriticResource(ModelResource):
    Critic = fields.ForeignKey(CriticResource, 'critic')
    User = fields.ForeignKey(UserResource,'user')

    class Meta:
        queryset = UserCritic.objects.all()
        resource_name = 'usercritic'

v1_api = Api(api_name='v1')
v1_api.register(CriticResource())
v1_api.register(ReviewResource())
v1_api.register(UserCriticResource())
v1_api.register(UserResource())
v1_api.register(CreateUserResource())
v1_api.register(UserLoginResource())

