export class Urls {
    static APPRAISAL_BASE_URL = '/api/appraisalentry/';
    static APPRAISAL_FORM_URL = Urls.APPRAISAL_BASE_URL+'employee_appraisal';
    static GET_ALL_APPRAISALS_DATA = Urls.APPRAISAL_BASE_URL+'get_employee_appraisal_form';
    // url for employee registration form
    static EMPLOYEE_REGISTRATION_FORM_URL = Urls.APPRAISAL_BASE_URL+'employee_registration';

    // get user details
    static GET_USER_DETAILS = Urls.APPRAISAL_BASE_URL+'get_user_details';

    // update user details
    static UPDATE_USER_DETAILS = Urls.APPRAISAL_BASE_URL+'update_user_details';
}