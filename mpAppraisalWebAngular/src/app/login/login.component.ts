import { Component, OnInit } from '@angular/core';
import { SharedservicesService } from '../sharedservices.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private sharedService:SharedservicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  // create a form with the following fields:
  // username
  // password

  employee_id = new FormControl('');
  password = new FormControl('');

  loginForm = new FormGroup({
    employee_id: this.employee_id,
    password: this.password
  });

  // implement a method to login the user
  // The method should check if the username and password are valid
  // If the username and password are valid, navigate to the dashboard component
  // If the username and password are invalid, display an error message
  // Use the shared service to login the user
  // Use the shared service to store the user data in the local storage
  // Use router to navigate to the dashboard component

  login(){
    this.sharedService.loginUser(this.loginForm.value).subscribe((data:any)=>{
      localStorage.setItem('user', JSON.stringify(data))
      this.router.navigate(['/dashboard']);
      (error: any )=> console.log(error);
    })
    
  }

}
