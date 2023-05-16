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

  filterData: any;
  constructor(
    private sharedService: SharedservicesService
  ) {
    // Call the getEmployeeAppraisal method
    this.getEmployeeAppraisal();
   }

  ngOnInit(): void {
  }

  // Create a function that returns the filter data
  // The filter data should contain the status, from date and to date
  // The status should be set to pending
  // The from date should be set to the current date
  // The to date should be set to the current date
  // The filter data should be returned
  onFilterSelection(){
    let filterData = {
      status: 'pending',
      from_date: new Date(),
      to_date: new Date()
    }
    return filterData;
  }
  
  // Write a function to get the appraisal from the API
  // Display the appraisal data in the dashboard component
  // Use the shared service to get the appraisal data from the API by passing the filter data

getEmployeeAppraisal(){
  this.sharedService.getEmployeeAppraisal(this.filterData).subscribe((data:any)=>{
    console.log(data);
    (error: any )=> console.log(error);
  });
}
}
