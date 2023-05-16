from django.contrib import admin
from .models import Role, Employee, EmployeeAppraisalForm

# Register your models here.
admin.site.register(Role)
admin.site.register(Employee)
admin.site.register(EmployeeAppraisalForm)
