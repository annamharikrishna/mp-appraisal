# Generate a serializer for the models created in models.py file:

# Path: mp_appraisal_core/appraisalentry/serializers.py
from rest_framework import serializers
from .models import Employee, Role, EmployeeAppraisalForm


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'
        # fields = ('first_name', 'last_name', 'employee_id', 'email', 'mobile_number', 'role', 'password')

    def create(self, validated_data):
        return Employee.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        # instance.employee_id = validated_data.get('employee_id', instance.employee_id)
        # instance.email = validated_data.get('email', instance.email)
        # instance.mobile_number = validated_data.get('mobile_number', instance.mobile_number)
        # instance.role = validated_data.get('role', instance.role)
        # instance.password = validated_data.get('password', instance.password)
        instance.save()
        return instance


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'
        # fields = ('role_name', 'role_description')

    def create(self, validated_data):
        return Role.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.role_name = validated_data.get('role_name', instance.role_name)
        instance.role_description = validated_data.get('role_description', instance.role_description)
        instance.save()
        return instance


class EmployeeAppraisalFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeAppraisalForm
        fields = '__all__'
        # fields = ('employee', 'appraisal_form', 'appraisal_form_status')

    def create(self, validated_data):
        return EmployeeAppraisalForm.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.employee = validated_data.get('employee', instance.employee)
        instance.appraisal_form = validated_data.get('appraisal_form', instance.appraisal_form)
        instance.appraisal_form_status = validated_data.get('appraisal_form_status', instance.appraisal_form_status)
        instance.save()
        return instance

