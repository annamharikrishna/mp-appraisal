from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .appraisal_manager import EmployeeAppraisalManager


# Create your views here.

# Generate the class level views for employee appraisal entry

class EmployeeAppraisalView(APIView):

        def post(self, request):
            data = request.data
            try:
                response = EmployeeAppraisalManager().employee_appraisal(data)
            except Exception as error:
                return Response(str(error), 500)
            return Response({"message": 'success'}, 200)

        def get(self, request):
            data = request.data
            try:
                response = EmployeeAppraisalManager().get_employee_appraisal_form(data)
            except Exception as error:
                return Response(str(error), 500)
            return Response(response, 200)


# generate class level views for employee registration

class EmployeeRegistrationView(APIView):

    def post(self, request):
        data = request.data
        try:
            response = EmployeeAppraisalManager().employee_registration(data)
        except Exception as error:
            return Response(str(error), 500)
        return Response({"message": 'success'}, 200)

    def get(self, request):
        data = request.data
        try:
            response = EmployeeAppraisalManager().get_employee(data)
        except Exception as error:
            return Response(str(error), 500)
        return Response(response, 200)

# generate class level views for employee login


class EmployeeLoginView(APIView):

    def post(self, request):
        data = request.data
        try:
            response = EmployeeAppraisalManager().employee_login(data)
        except Exception as error:
            return Response(str(error), 500)
        if response:
            return Response(response, 200)
        else:
            return Response({"message": 'Invalid Credentials'}, 401)

