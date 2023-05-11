# Generate the manager class for Employee Appraisal

from .models import Employee, Role, EmployeeAppraisalForm

class EmployeeAppraisalManager:

    # Generate the function for employee appraisal using the serializer and models created in the app

    def employee_appraisal(self, data):
        employee = Employee.objects.get(id=data.get('employee_id'))
        appraisal_form = EmployeeAppraisalForm.objects.get(id=data.get('appraisal_form_id'))
        employee_appraisal_form = EmployeeAppraisalForm.objects.create(employee=employee, appraisal_form=appraisal_form, appraisal_form_status=data.get('appraisal_form_status'))
        return employee_appraisal_form

    # Generate the function that returns employee filled appraisal form as jsonserializer
    def get_employee_appraisal_form(self, data):
        employee_appraisal_form = EmployeeAppraisalForm.objects.filter(employee=data.get('employee_id')).values()
        return employee_appraisal_form

    # Create an helper function to return a downloadable excel response that contains employee filled appraisal data
    # input of employee id and appraisal form id
    # output of excel response

