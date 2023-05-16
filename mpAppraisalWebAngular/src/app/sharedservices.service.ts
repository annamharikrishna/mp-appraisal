import { Injectable } from '@angular/core';
// import the HttpClient service
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedservicesService {

  // create a constant url for the API
  readonly APIUrl = "http://0.0.0.0:8083/api";

  
  constructor(
    // inject the HttpClient service
    private http:HttpClient
  ) { }

  // create  a method to post the appraisal data to the API with http post method
postAppraisal(val:any){
  return this.http.post(this.APIUrl+'/appraisalentry/employee_appraisal',val)
}

// create a method to get the appraisal data from the API with http get method that contains the filter data
getEmployeeAppraisal(filter:any){
  const params = new HttpParams({ fromObject: filter });
  return this.http.get(this.APIUrl+'/appraisalentry/employee_appraisal', {params})
}

// create a method to login the user with http post method
loginUser(val:any){
  return this.http.post(this.APIUrl+'/appraisalentry/employee_login',val)
}

}
