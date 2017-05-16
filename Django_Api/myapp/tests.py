from django.test import TestCase
from myapp.models import Critic, Review, User, UserCritic
from tastypie.test import ResourceTestCaseMixin



class UserTestCase(ResourceTestCaseMixin, TestCase):
    def test_user(self):
        resp = self.api_client.get('/api/v1/user/', format='json')
        print ("Status Code:", resp.status_code)
        print ("User Details Function Tested")
        self.assertValidJSONResponse(resp)


class CriticTestCase(ResourceTestCaseMixin, TestCase):
    def test_critic(self):
        resp = self.api_client.get('/api/v1/critic/', format='json')
        print ("Status Code:", resp.status_code)
        print ("Critic Details Function Tested")
        self.assertValidJSONResponse(resp)

class CreateUserTestCase(ResourceTestCaseMixin, TestCase):
    def test_usercreate(self):
        resp = self.assertHttpCreated(self.api_client.post('/api/v1/usercreate/',format='json', data=
        {
              'email': 'anamikasingh101@gmail.com',
              'first_name': 'anamika',
              'last_name': 'singh',
              'password': '1',
              'username': 'anamikasingh101'
        }))
        self.assertEqual(User.objects.count(), 1)
        print ("Status Code:", 201)
        print ("Create User Function Tested")

class UserLoginTestCase(ResourceTestCaseMixin, TestCase):
    def setUp(self):
            super(UserLoginTestCase, self).setUp()
            self.post_data = {
                                   'password': '1234',
                                   'username': 'anamika'
                             }
    def test_userlogin(self):
        resp = self.api_client.post('/api/v1/user/login/',
                format='json', data=self.post_data)
        print ("Success")
        print ("User Login Function Tested")

class CreateUserCriticTestCase(ResourceTestCaseMixin, TestCase):
    def setUp(self):
            super(CreateUserCriticTestCase, self).setUp()
            self.post_data = {
                                   'Critic': '/api/v1/critic/2/',
                                   'User': '/api/v1/user/15/',
                                   'name': 'Test6'
                             }
    def test_usercriticlogin(self):
        resp = self.api_client.post('/api/v1/usercritic/',
                format='json', data=self.post_data)
        print ("Status Code:", 201)
        print ("Create User Critic Function Tested")
















