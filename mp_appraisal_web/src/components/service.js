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