import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceModule, User } from '../user-service.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorExists = false;
  errorText = "";
  hide = true;
  constructor(private userService: UserServiceModule, private router: Router) { }

  ngOnInit() {
    
  }
// Checks login info from dummylist //
  onSubmit(form: NgForm) {
    var email = form.value.email;
    var password = form.value.password;

    var user = this.userService.getUser(email);
    console.log(user);
    if(!user){
      this.errorExists = true;
      this.errorText = "Invalid email address: " + "--->" + email;
      return;
    }
    var isPasswordValid = this.userService.isPasswordCorrect(email,password);
    if(!isPasswordValid){
      this.errorExists = true;
      this.errorText = "Password is incorrect";
      return;
    }
  
    
    this.errorExists = false;
    this.userService.setLoggedTrue();
    this.userService.setCurrentUser(user);
    this.router.navigate(['']);
  }
}
