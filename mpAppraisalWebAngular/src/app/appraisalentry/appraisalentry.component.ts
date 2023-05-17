import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedservicesService } from '../sharedservices.service';

@Component({
  selector: 'app-appraisalentry',
  templateUrl: './appraisalentry.component.html',
  styleUrls: ['./appraisalentry.component.scss']
})
export class AppraisalentryComponent implements OnInit {

  constructor(
    // Inject the shared service
    private sharedService:SharedservicesService
  ) { }

  ngOnInit(): void {
  }

  // Create a form with the following fields:
  // Product Knowledge, 
  // System Knowledge, 
  // Sales Promotion Skills, 
  // Private Label Promotion Skills, 
  // Customer Interaction Skills, 
  // Overall Rating - Rating on a scale of 1-5
  // Comments Field

  product_knowledge = new FormControl('');
  system_knowledge = new FormControl('');
  sales_promotion_skills = new FormControl('');
  private_label_promotion_skills = new FormControl('');
  customer_interaction_skills = new FormControl('');
  overall_rating = new FormControl('');
  comments = new FormControl('');
  employee_id = new FormControl('');
  user_id = new FormControl('');
  
  appraisalForm = new FormGroup({
    employee_id: this.employee_id,
    user_id: this.user_id,
    product_knowledge: this.product_knowledge,
    system_knowledge: this.system_knowledge,
    sales_promotion_skills: this.sales_promotion_skills,
    private_label_promotion_skills: this.private_label_promotion_skills,
    customer_interaction_skills: this.customer_interaction_skills,
    overall_rating: this.overall_rating,
    comments: this.comments
  });

  // Implement a method to submit the form
  onSubmit() {
    // Get the user data from the local storage
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    // Set the employee_id and user_id fields in the form
    if (user[0].role == 'employee') {
      this.appraisalForm.controls['employee_id'].setValue(user[0].employee_id);
    }
    this.appraisalForm.controls['user_id'].setValue(user[0].employee_id);
    // Use the shared service to post the form data to the API
    this.sharedService.postAppraisal(this.appraisalForm.value).subscribe((data:any)=>{
      console.log(data);
      (error: any )=> console.log(error);
    })
  }



}
