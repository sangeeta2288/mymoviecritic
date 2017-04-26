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


class UserResource(ModelResource):
    Critic = fields.ForeignKey(CriticResource, 'critic')

    class Meta:
        queryset = User.objects.all()
        resource_name = 'user'

v1_api = Api(api_name='v1')
v1_api.register(CriticResource())
v1_api.register(ReviewResource())
v1_api.register(UserResource())
