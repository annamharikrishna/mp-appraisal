from rest_framework import serializers

from .models import Appraisal, Employee


class AppraisalFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appraisal
        fields = ['product_knowledge', 'system_knowledge', 'sales_promotion_skills',
                  'private_label_promotion_skills', 'customer_interaction_skills', 'comments']


class EmployeeSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Employee
        fields = ['id', 'username', 'email', 'password', 'role']

    def create(self, validated_data):
        password = validated_data.pop('password')
        employee = Employee(**validated_data)
        employee.set_password(password)
        employee.save()
        return employee

