// service file
import { HttpAxiosService } from "../services/HttpService";
import { APPRAISAL_BASE_URL } from "../config/config.environment";
import { Urls } from "./Urls";
const appraisalService = new HttpAxiosService(APPRAISAL_BASE_URL);

export const submitAppraisal = ()=>{
    return appraisalService.get(Urls.APPRAISAL_FORM_URL)
}



export const getAllApprialsFormsData = (payload) => {
  return appraisalService.get(Urls.GET_ALL_APPRAISALS_DATA, payload);
};
