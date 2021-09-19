import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';

import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceModule, User } from './auth/user-service.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  logged : boolean = false;;
  currentUser : User = null;

  constructor(private userService: UserServiceModule, public route: ActivatedRoute, public router : Router){
   
  }
  // Checking if user is logged in... If yes logged = true, also added logout available which just redirects user to home refreshing the page //
  ngOnInit(): void {
   this.userService.logged.subscribe(log => { 
    console.log(log)
    this.logged = log 
    });

   this.userService.currentUser.subscribe(user => {
     console.log()
     this.currentUser = user
    });
  }
  
  
 logout(){
   this.userService.logout();
   this.router.navigate(['']);
 }
 public isLogged(l : boolean){
  this.logged = l;
  console.log(this.logged)
  
 }
 public loggedUser(user : User){
   this.currentUser = user;
   console.log(this.currentUser)
 }
 

  title = 'SingiTrip';
}
