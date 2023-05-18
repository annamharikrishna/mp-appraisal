from django.urls import path
from .views import AppraisalFormCreateView, EmployeeRegistrationView

urlpatterns = [
    path('create-appraisal-form/', AppraisalFormCreateView.as_view(), name='create_appraisal_form'),
    path('register/', EmployeeRegistrationView.as_view(), name='register_employee'),
]
