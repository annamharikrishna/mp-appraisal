import { Component, OnInit } from '@angular/core';
import { SharedservicesService } from '../sharedservices.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Initialize the variable that stores the status of the appraisal with values as Submitted, Supervisor Reviewed, Manager Reviewed
  statusList = ['Submitted', 'Supervisor Reviewed', 'Manager Reviewed'];
  // Initialize the variable to store the appraisal data
  appraisalData: any;
  // Initialize the variables to store the status, from date and to date
  status: any;
  from_date: any;
  to_date: any;
  displayedColumns: string[] = ["employee_id", "product_knowledge", "system_knowledge", "sales_promotion_skills", "private_label_promotion_skills", "customer_interaction_skills", "overall_rating", "comments", "status"];
  // "product_knowledge":1,
  // "system_knowledge":1,
  // "sales_promotion_skills":1,
  // "private_label_promotion_skills":1,
  // "customer_interaction_skills":1,
  // "overall_rating":1,
  // "comments":"good",
  // "status":"Submitted",;

  constructor(
    private sharedService: SharedservicesService
  ) {
    // Call the getEmployeeAppraisal method
    this.getEmployeeAppraisal();
   }

  ngOnInit(): void {
  }

  // Create a function to update the status variable with the value selected in the status dropdown
  // function is passed with an event
  onStatusChange(event: any) {
    this.status = event.value;
    this.getEmployeeAppraisal();
  }

  // Create a function to update the from_date variable with the value selected in the from date datepicker
  // function is passed with an event
  onFromDateChange(event: any) {
    this.from_date = event.value;
    this.getEmployeeAppraisal();
  }

  // Create a function to update the to_date variable with the value selected in the to date datepicker
  // function is passed with an event
  onToDateChange(event: any) {
    this.to_date = event.value;
    this.getEmployeeAppraisal();
  }

 // Create a function to get the dict with values as status, from_date and to_date 
   // The function should return the dict
   // Check if variables are empty or not and add to dict accordingly

  setFilterData() {
    let filterData: any = {};
    if (this.status) {
      filterData.status = this.status;
    }
    if (this.from_date) {
      filterData.from_date = this.from_date;
    }
    if (this.to_date) {
      filterData.to_date = this.to_date;
    }
    // get the employee id from the local storage and add it to the dict with key as user_id
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    filterData.user_id = user[0].employee_id;
    return filterData;
  }

  // Write a function to get the appraisal from the API
  // Display the appraisal data in the dashboard component
  // Use the shared service to get the appraisal data from the API by passing the filter data

getEmployeeAppraisal(){
  this.sharedService.getEmployeeAppraisal(this.setFilterData()).subscribe((data:any)=>{
    this.appraisalData = data;
    (error: any )=> console.log(error);
  });
}
}
