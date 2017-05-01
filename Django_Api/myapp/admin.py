from django.contrib import admin
from .models import Critic, Review, UserCritic, User

class CriticAdmin(admin.ModelAdmin):
	list_display = ['name']

class ReviewAdmin(admin.ModelAdmin):
	list_display = ['MovieID','Movietitle', 'critic_name','review']

	def critic_name(self, obj):
		return obj.critic.name
	
	critic_name.admin_order_field = 'critic'


	
class UserCriticAdmin(admin.ModelAdmin):
	list_display = ['name', 'critic', 'user']		


admin.site.register(Critic,CriticAdmin)
admin.site.register(Review,ReviewAdmin)

admin.site.register(UserCritic,UserCriticAdmin)

# create a new superuser in order to access the admin area