import { Injectable } from '@angular/core';
// import the HttpClient service
import { HttpClient, HttpParams } from '@angular/common/http';
import { saveAs } from 'file-saver';

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

// create a method to get the downloadable appraisal data from the API with http get method and add headers in get request for content type as application/json

getDownloadableAppraisal(filter:any){
  const params = new HttpParams({ fromObject: filter });
  return this.http.get(this.APIUrl+'/appraisalentry/download_appraisal_data', {params, responseType: 'blob', headers: { 'Content-Type': 'application/blob' }})
}
// create a method to save a excel response as a file
saveFile(data: any, filename?: string) {
  const blob = new Blob([data], {type: 'blob'});
  // use a inbuilt saveAs function to save the file
  return saveAs(blob, filename);
}
}
