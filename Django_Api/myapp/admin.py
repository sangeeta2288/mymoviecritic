from django.contrib import admin
from .models import Critic

class CriticAdmin(admin.ModelAdmin):
	list_display = ['name']

admin.site.register(Critic,CriticAdmin)