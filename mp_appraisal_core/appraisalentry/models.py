from django.db import models


# Generate a model for Roles of the employees with the following choices:
# 1. Supervisor
# 2. Manager
# 3. Admin
# 4. Employee

# Create your models here.
class Role(models.Model):
    CHOICES = (
        ('admin', 'admin'),
        ('supervisor', 'supervisor'),
        ('manager', 'manager'),
        ('employee', 'employee')
    )
    role = models.CharField(max_length=100, choices=CHOICES, default='employee')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        managed = True
        db_table = 'role'


# Generate a model for employee with basic details of an employee that should include the roles as well:

# Create your models here.
class Employee(models.Model):
    CHOICES = (
        ('admin', 'admin'),
        ('supervisor', 'supervisor'),
        ('manager', 'manager'),
        ('employee', 'employee')
    )
    first_name = models.CharField(max_length=100, blank=False, null=False)
    last_name = models.CharField(max_length=100, blank=False, null=False)
    employee_id = models.CharField(max_length=100, blank=False, null=False, unique=True)
    email = models.CharField(max_length=100, blank=False, null=False, unique=True)
    mobile_number = models.CharField(max_length=100, blank=False, null=False, unique=True)
    role = models.CharField(max_length=100, choices=CHOICES, default='employee')
    password = models.CharField(max_length=100, blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # def __str__(self):
    #     return self.first_name + ' ' + self.last_name

    class Meta:
        managed = True
        db_table = 'employee'

# Generate a model for employeeappraisalform with the following fields:
# Product Knowledge, System Knowledge, Sales Promotion Skills, Private Label Promotion Skills,
# Customer Interaction Skills, Overall Rating - Rating on a scale of 1-5, Comments Field, status,
# supervisor_rating and manager_rating - Rating on a scale of 1-5, created_at and updated_at and
# also make a relation with the employee table and add choices for the ratings and apply the choices to the fields


# Create your models here.

class EmployeeAppraisalForm(models.Model):
    CHOICES = (
        (1, '1'),
        (2, '2'),
        (3, '3'),
        (4, '4'),
        (5,'5')
    )
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    product_knowledge = models.IntegerField(choices=CHOICES, default=1)
    system_knowledge = models.IntegerField(choices=CHOICES, default=1)
    sales_promotion_skills = models.IntegerField(choices=CHOICES, default=1)
    private_label_promotion_skills = models.IntegerField(choices=CHOICES, default=1)
    customer_interaction_skills = models.IntegerField(choices=CHOICES, default=1)
    overall_rating = models.IntegerField(choices=CHOICES, default=1)
    comments = models.TextField()
    status = models.CharField(max_length=100, blank=False, null=False)
    reviewed_by = models.CharField(max_length=100, blank=False, null=False)
    supervisor_rating = models.IntegerField(choices=CHOICES, default=1, null=True)
    manager_rating = models.IntegerField(choices=CHOICES, default=1, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        managed = True
        db_table = 'employee_appraisal_form'
