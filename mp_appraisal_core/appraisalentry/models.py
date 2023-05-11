from django.db import models


# Generate a model for employeeappraisalform with the following fields:
# Product Knowledge, System Knowledge, Sales Promotion Skills, Private Label Promotion Skills,
# Customer Interaction Skills, Overall Rating - Rating on a scale of 1-5, Comments Field, status,
# supervisor_rating and manager_rating - Rating on a scale of 1-5, created_at and updated_at and
# also make a relation with the employee table and add choices for the ratings and apply the choices to the fields

class EmployeeAppraisalForm(models.Model):
    Choices = (
        (1, '1'),
        (2, '2'),
        (3, '3'),
        (4, '4'),
        (5, '5')
    )

    employee_id = models.ForeignKey('Employee', models.DO_NOTHING, db_column='employee_id', blank=False, null=False)
    product_knowledge = models.IntegerField(choices=Choices, blank=False, null=False)
    system_knowledge = models.IntegerField(choices=Choices, blank=False, null=False)
    sales_promotion_skills = models.IntegerField(choices=Choices, blank=False, null=False)
    private_label_promotion_skills = models.IntegerField(choices=Choices, blank=False, null=False)
    customer_interaction_skills = models.IntegerField(choices=Choices, blank=False, null=False)
    overall_rating = models.IntegerField(choices=Choices, blank=False, null=False)
    comments = models.CharField(max_length=100, blank=False, null=False)
    status = models.CharField(max_length=100, blank=False, null=False)
    supervisor_rating = models.IntegerField(choices=Choices, blank=False, null=False)
    manager_rating = models.IntegerField(choices=Choices, blank=False, null=False)
    created_at = models.DateTimeField(blank=False, null=False)
    updated_at = models.DateTimeField(blank=False, null=False)

    class Meta:
        managed = False
        db_table = 'employee_appraisal_form'


# Generate a model for employee with basic details of an employee that should include the roles as well:
class Employee(models.Model):
    employee_id = models.IntegerField(blank=False, null=False, primary_key=True)
    employee_name = models.CharField(max_length=100, blank=False, null=False)
    employee_email = models.CharField(max_length=100, blank=False, null=False)
    employee_mobile = models.CharField(max_length=100, blank=False, null=False)
    employee_role = models.ForeignKey('Role', models.DO_NOTHING, db_column='employee_role', blank=False, null=False)
    employee_password = models.CharField(max_length=100, blank=False, null=False)
    created_at = models.DateTimeField(blank=False, null=False)
    updated_at = models.DateTimeField(blank=False, null=False)

    class Meta:
        managed = True
        db_table = 'employee'


# Generate a model for Roles of the employees with the following choices:
# 1. Supervisor
# 2. Manager
# 3. Admin
# 4. Employee

class Role(models.Model):
    Choice = (
        ('Supervisor', 'Supervisor'),
        ('Manager', 'Manager'),
        ('Admin', 'Admin'),
        ('Employee', 'Employee'),
    )
    role_id = models.IntegerField(blank=False, null=False, primary_key=True)
    role_name = models.CharField(max_length=100, blank=False, null=False, choices=Choice)
    created_at = models.DateTimeField(blank=False, null=False)
    updated_at = models.DateTimeField(blank=False, null=False)

    class Meta:
        managed = True
        db_table = 'role'
        