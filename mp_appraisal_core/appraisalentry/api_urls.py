# add list of urls in appraisalentry/urls.py for api calls created in views.py

# Compare this snippet from appraisalentry/urls.py:
from django.urls import path

from .views import EmployeeAppraisalView

urlpatterns = [
    path(r'employee_appraisal', EmployeeAppraisalView.as_view(), name='employee_appraisal'),
    path(r'get_employee_appraisal_form', EmployeeAppraisalView.as_view(), name='get_employee_appraisal_form'),
    ]
