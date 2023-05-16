from django.contrib import admin

from .models import Appraisal, Employee

# Register your models here.

admin.site.register(Appraisal)
admin.site.register(Employee)
