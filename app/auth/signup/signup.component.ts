import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { UserServiceModule } from '../user-service.module';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};



  errorExists = false;
  errorText = "";
  hide = true;
  constructor(private userService: UserServiceModule, private router: Router) { }

  ngOnInit(): void {
    this.dropdownList = [
      {"id":1,"itemName":"nightclub"},
      {"id":2,"itemName":"Bar"},
      {"id":3,"itemName":"Theatres"},

    ];
    this.selectedItems = [
      
    ];
    this.dropdownSettings = { 
      singleSelection: false, 
      text:"Preferred Entertainment: ",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      classes:"myclass custom-class",
      maxHeight: "300"
     
    };      
  }
// Checks if email exists already since other info can be the same as other users! If email exists then error appears //
  onSubmit(form: NgForm){
   if(!this.userService.getUser(form.value.email)){
     this.errorExists = false;
    var interests = this.selectedItems.map(item => item.itemName);
    var newUser = this.userService.registerUser(form.value.email,form.value.password, form.value.birthdate, form.value.firstName,form.value.lastName, form.value.location , interests);
    this.router.navigate([''])
   }else{
     this.errorText = "User with this email already exists";
   }
  }
  onItemSelect(item:any){
    this.selectedItems.push(item);
    
    console.log(this.selectedItems);
    
}
OnItemDeSelect(item:any){
  
  const index = this.selectedItems.indexOf(item);
   
  if (index > -1) {
    this.selectedItems.splice(index, 1);
  }
    console.log(this.selectedItems);
    
}
onSelectAll(items: any){
   
    this.selectedItems = items;
    console.log(this.selectedItems);
}
onDeSelectAll(items: any){
  this.selectedItems = items;
    console.log(this.selectedItems);
}

}
