# Generate the manager class for Employee Appraisal
from django.http import HttpResponse

from .models import Employee, EmployeeAppraisalForm

import xlsxwriter
import io

from .serializers import EmployeeSerializer


class EmployeeAppraisalManager:

    # Generate the function for employee appraisal using the serializer and models created in the app with the
    # following conditions:
    # 1. Employee can fill the appraisal form with status as 'Submitted' and role should be 'employee'
    # 2. Supervisor can update the 'Submitted' appraisal form with status as 'Supervisor Reviewed' and
    # role should be 'supervisor'
    # 3. Manager can update the 'Supervisor Reviewed' appraisal form with status as 'Manager Reviewed' and
    # role should be 'manager'

    @staticmethod
    def employee_appraisal(data):
        employee_appraisal_form = None
        employee = Employee.objects.get(employee_id=data.get('employee_id'))
        user = Employee.objects.get(employee_id=data.get('user_id'))
        if user.role == 'employee':
            employee_appraisal_form = EmployeeAppraisalForm.objects.create(
                employee=employee,
                product_knowledge=data.get('product_knowledge'),
                system_knowledge=data.get('system_knowledge'),
                sales_promotion_skills=data.get('sales_promotion_skills'),
                private_label_promotion_skills=data.get('private_label_promotion_skills'),
                customer_interaction_skills=data.get('customer_interaction_skills'),
                comments=data.get('comments'),
                status='Submitted',
                supervisor_rating=data.get('supervisor_rating'),
                manager_rating=data.get('manager_rating')
            )
        elif user.role == 'supervisor':
            employee_appraisal_form = EmployeeAppraisalForm.objects.get(employee=employee)
            if employee_appraisal_form.status == 'Submitted':
                employee_appraisal_form = EmployeeAppraisalForm.objects.create(
                    employee=employee,
                    product_knowledge=data.get('product_knowledge'),
                    system_knowledge=data.get('system_knowledge'),
                    sales_promotion_skills=data.get('sales_promotion_skills'),
                    private_label_promotion_skills=data.get('private_label_promotion_skills'),
                    customer_interaction_skills=data.get('customer_interaction_skills'),
                    comments=data.get('comments'),
                    status='Supervisor Reviewed',
                    supervisor_rating=data.get('supervisor_rating'),
                    overall_rating=data.get('overall_rating'),
                    reviewed_by=user
                )
                """ Copilot suggestion
                employee_appraisal_form = EmployeeAppraisalForm.objects.filter(employee=data.get('employee_id')).update(
                status='Supervisor Reviewed',
                supervisor_rating=data.get('supervisor_rating'),
                )
            """
        elif user.role == 'manager':
            employee_appraisal_form = EmployeeAppraisalForm.objects.get(employee=employee)
            if employee_appraisal_form.status == 'Supervisor Reviewed':
                employee_appraisal_form = EmployeeAppraisalForm.objects.create(
                    employee=employee,
                    product_knowledge=data.get('product_knowledge'),
                    system_knowledge=data.get('system_knowledge'),
                    sales_promotion_skills=data.get('sales_promotion_skills'),
                    private_label_promotion_skills=data.get('private_label_promotion_skills'),
                    customer_interaction_skills=data.get('customer_interaction_skills'),
                    comments=data.get('comments'),
                    status='Manager Reviewed',
                    manager_rating=data.get('manager_rating'),
                    overall_rating=data.get('overall_rating'),
                    reviewed_by=user
                )
            else:
                raise Exception("Supervisor has not reviewed the appraisal form")
            """ Copilot suggestion
            employee_appraisal_form = EmployeeAppraisalForm.objects.filter(employee=data.get('employee_id')).update(
                status='Manager Reviewed',
                manager_rating=data.get('manager_rating'),
            )
            """
        return employee_appraisal_form

    # Generate the function that returns employee filled appraisal form as jsonserializer with following filter checks:
    # 1. Get employee appraisals based on status
    # 2. Get employee appraisals based on Date range

    @staticmethod
    def get_employee_appraisal(data):
        employee_appraisal_form = None
        if data.get('user_id'):
            user_role = Employee.objects.get(employee_id=data.get('user_id')).role
        else:
            raise Exception("user_id is required")
        if data.get('employee_id'):
            employee = Employee.objects.get(employee_id=data.get('employee_id'))
            employee_appraisal_form = EmployeeAppraisalForm.objects.filter(employee=employee)
        elif data.get('status'):
            employee_appraisal_form = employee_appraisal_form.filter(status=data.get('status'))
        elif data.get('from_date') and data.get('to_date'):
            employee_appraisal_form = employee_appraisal_form.filter(
                created_at__range=[data.get('from_date'), data.get('to_date')])
        else:
            employee_appraisal_form = EmployeeAppraisalForm.objects.all()
        if user_role == 'manager':
            employee_appraisal_form = employee_appraisal_form.filter(employee__role__in=['employee', 'supervisor'])
        elif user_role == 'supervisor':
            employee_appraisal_form = employee_appraisal_form.filter(employee__role='employee')
        elif user_role == 'employee':
            raise Exception("unauthorized user role")
        return employee_appraisal_form.values()

    # create a registration function for employee using EmployeeSerializer

    @staticmethod
    def employee_registration(data):
        employee = EmployeeSerializer(data=data)
        if employee.is_valid():
            employee.save()
            return employee.data
        else:
            return employee.errors

    # create a function to get employee data

    @staticmethod
    def get_employee(data):
        employee = Employee.objects.filter(employee_id=data.get('employee_id')).values()
        return employee

    # create a function to login employee

    @staticmethod
    def employee_login(data):
        employee = Employee.objects.filter(employee_id=data.get('employee_id'),
                                           password=data.get('password')).values()
        if employee:
            return employee
        else:
            return False

    # Generate a function that converts a list of dictionaries to an excel file with .xlsx extension

    @staticmethod
    def convert_to_excel(data):

        output = io.BytesIO()
        workbook = xlsxwriter.Workbook(output, {'in_memory': True})
        worksheet = workbook.add_worksheet()
        row = 0
        col = 0
        for item in data:
            for key, value in item.items():
                worksheet.write(row, col, key)
                worksheet.write(row, col + 1, value)
                row += 1
        workbook.close()
        output.seek(0)
        return output

    # Generate a function that returns the excel downloadable response using xlwt and xlrd

    def get_excel_response(self, data):
        output = self.convert_to_excel(data)
        response = HttpResponse(output.read(), content_type=
                                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        response['Content-Disposition'] = 'attachment; filename=employee_appraisal.xlsx'
        return response
