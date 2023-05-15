// service file
import { HttpAxiosService } from "../services/HttpService";
import { APPRAISAL_BASE_URL } from "../config/config.environment";
import { Urls } from "./Urls";
const appraisalService = new HttpAxiosService(APPRAISAL_BASE_URL);

export const submitAppraisal = (data)=>{
    return appraisalService.post(Urls.APPRAISAL_FORM_URL, data)
}

export const getAllApprialsFormsData = (payload) => {
  return appraisalService.get(Urls.GET_ALL_APPRAISALS_DATA, payload);
};

// service for registration form
export const submitRegistrationForm = (data)=>{
    return appraisalService.post(Urls.EMPLOYEE_REGISTRATION_FORM_URL, data)
}

// service for get user details
export const getUserDetails = ()=>{
    return appraisalService.get(Urls.GET_USER_DETAILS)
}

// service for update user details
export const updateUserDetails = (data)=>{
    return appraisalService.post(Urls.UPDATE_USER_DETAILS, data)
}

