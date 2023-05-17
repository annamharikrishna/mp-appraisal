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
        employee = Employee.objects.get(id=data.get('employee_id'))
        user = Employee.objects.get(employee_id=data.get('user_id'))
        if data.get('employee_id') == str(user.id) or user.role == 'employee':
            employee_appraisal_form = EmployeeAppraisalForm.objects.filter(employee=employee)
            if employee_appraisal_form:
                employee_appraisal_form = EmployeeAppraisalForm.objects.update(
                    employee=employee,
                    product_knowledge=data.get('productKnowledge'),
                    system_knowledge=data.get('systemKnowledge'),
                    sales_promotion_skills=data.get('salesPromotionSkills'),
                    private_label_promotion_skills=data.get('privateLabelPromotionSkills'),
                    customer_interaction_skills=data.get('customerInteractionSkills'),
                    comments=data.get('comments'),
                    status='Submitted',
                    supervisor_rating=data.get('supervisorRating'),
                    manager_rating=data.get('managerRating'),
                    overall_rating=data.get('overallRating')
                )
            else:
                employee_appraisal_form = EmployeeAppraisalForm.objects.create(
                    employee=employee,
                    product_knowledge=data.get('productKnowledge'),
                    system_knowledge=data.get('systemKnowledge'),
                    sales_promotion_skills=data.get('salesPromotionSkills'),
                    private_label_promotion_skills=data.get('privateLabelPromotionSkills'),
                    customer_interaction_skills=data.get('customerInteractionSkills'),
                    comments=data.get('comments'),
                    status='Submitted',
                    supervisor_rating=data.get('supervisorRating'),
                    manager_rating=data.get('managerRating'),
                    overall_rating=data.get('overallRating')
                )
        elif user.role == 'supervisor':
            employee_appraisal_form = EmployeeAppraisalForm.objects.get(employee=employee)
            if employee_appraisal_form.status == 'Submitted':
                employee_appraisal_form = EmployeeAppraisalForm.objects.update(
                    employee=employee,
                    product_knowledge=data.get('productKnowledge'),
                    system_knowledge=data.get('systemKnowledge'),
                    sales_promotion_skills=data.get('salesPromotionSkills'),
                    private_label_promotion_skills=data.get('privateLabelPromotionSkills'),
                    customer_interaction_skills=data.get('customerInteractionSkills'),
                    comments=data.get('comments'),
                    status='Supervisor Reviewed',
                    supervisor_rating=data.get('supervisorRating'),
                    overall_rating=data.get('overallRating')
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
                employee_appraisal_form = EmployeeAppraisalForm.objects.update(
                    employee=employee,
                    product_knowledge=data.get('productKnowledge'),
                    system_knowledge=data.get('systemKnowledge'),
                    sales_promotion_skills=data.get('salesPromotionSkills'),
                    private_label_promotion_skills=data.get('privateLabelPromotionSkills'),
                    customer_interaction_skills=data.get('customerInteractionSkills'),
                    comments=data.get('comments'),
                    status='Manager Reviewed',
                    manager_rating=data.get('managerRating'),
                    overall_rating=data.get('overallRating')
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
            employee_appraisal_form = EmployeeAppraisalForm.objects.filter(status=data.get('status'))
        elif data.get('from_date') and data.get('to_date'):
            employee_appraisal_form = EmployeeAppraisalForm.objects.filter(
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
                                           password=data.get('password'))
        employee_details = employee.values().first()
        if employee_details:
            if employee_details.get('role') == "employee":
                employee_appraisal_form = EmployeeAppraisalForm.objects.filter(employee=employee[0]).values().first()
                return employee_details, employee_appraisal_form
            return employee_details
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
