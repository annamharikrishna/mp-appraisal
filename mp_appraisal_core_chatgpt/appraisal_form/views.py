from rest_framework import generics, status
from rest_framework.response import Response
from .models import Appraisal, Employee
from .serializers import AppraisalFormSerializer, EmployeeSerializer


class AppraisalFormCreateView(generics.CreateAPIView):
    queryset = Appraisal.objects.all()
    serializer_class = AppraisalFormSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class EmployeeRegistrationView(generics.CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

