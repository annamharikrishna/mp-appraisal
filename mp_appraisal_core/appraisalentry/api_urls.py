# add list of urls in appraisalentry/urls.py for api calls created in views.py

# Compare this snippet from appraisalentry/urls.py:
from django.urls import path

from .views import EmployeeAppraisalView, EmployeeRegistrationView, EmployeeLoginView

urlpatterns = [
    path(r'employee_appraisal', EmployeeAppraisalView.as_view(), name='employee_appraisal'),
    path(r'get_employee_appraisal_form', EmployeeAppraisalView.as_view(), name='get_employee_appraisal_form'),
    path(r'employee_registration', EmployeeRegistrationView.as_view(), name='employee_registration'),
    path(r'get_employee', EmployeeRegistrationView.as_view(), name='get_employee'),
    path(r'employee_login', EmployeeLoginView.as_view(), name='employee_login'),
    ]

