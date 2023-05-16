import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// Create a function to logout the user
// The function should remove the user data from the local storage
// The function should navigate to the login component
logout(){
  localStorage.removeItem('user');
  window.location.href = '/login'
}

// Create a function to check if the user is logged in
// The function should return true if the user is logged in
// The function should return false if the user is not logged in
isLoggedIn(){
  if(localStorage.getItem('user')){
    return true;
  }
  else{
    return false;
  }
}
}
