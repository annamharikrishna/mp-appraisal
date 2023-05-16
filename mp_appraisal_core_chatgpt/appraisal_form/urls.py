from django.urls import path
from .views import AppraisalFormCreateView

urlpatterns = [
    path('create-appraisal-form/', AppraisalFormCreateView.as_view(), name='create_appraisal_form'),
]
