// service file
import { HttpAxiosService } from "../services/HttpService";
import { APPRAISAL_BASE_URL } from "../config/config.environment";
import { Urls } from "./Urls";
const searchService = new HttpAxiosService(APPRAISAL_BASE_URL);

export const searchData = ()=>{
    return searchService.get(Urls.APPRAISAL_FORM_URL)
}
