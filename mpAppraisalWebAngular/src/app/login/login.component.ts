import { Component, OnInit } from '@angular/core';
import { SharedservicesService } from '../sharedservices.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private sharedService:SharedservicesService
  ) { }

  ngOnInit(): void {
  }
  // create a form with the following fields:
  // username
  // password

  username = new FormControl('');
  password = new FormControl('');

  loginForm = new FormGroup({
    username: this.username,
    password: this.password
  });

  // implement a method to login the user
  // The method should check if the username and password are valid
  // If the username and password are valid, navigate to the dashboard component
  // If the username and password are invalid, display an error message
  // Use the shared service to login the user
  // Use the shared service to store the user data in the local storage

  login(){
    this.sharedService.loginUser(this.loginForm.value).subscribe((data:any)=>{
      console.log(data)
      localStorage.setItem('user', JSON.stringify(data));
      (error: any )=> console.log(error);
    })
    
  }

}
