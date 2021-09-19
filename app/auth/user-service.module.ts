import { Injectable } from '@angular/core';
import { Post } from '../search/post.model';
import { PostsService } from '../search/post.servise';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

// User info //
export interface User{
  id:number;
  email:string;
  firstName: string;
  lastName: string;
  password:string;
  date: Date;
  location : "Beograd" | "Pozarevac" | "Novi Sad" | "Nis" | "Kragujevac" | "Smederevo" ;
  favorites?: Array<number>;
  likes?: Array<string>;
}
// Checks if user is logged in, if user logged in, then logged = true //
@Injectable()
export class UserServiceModule {
  public ps = new  PostsService;
  private loggedSource = new BehaviorSubject<boolean>(false);
  private loggedUserSourse = new BehaviorSubject<User>(null);
  logged = this.loggedSource.asObservable();
  currentUser = this.loggedUserSourse.asObservable();
  constructor() { 

  }
  setLoggedTrue(){
    this.loggedSource.next(true);
  }
  logout(){
   this.loggedSource.next(false);
   this.loggedUserSourse.next(null);
  }
  isUserLogged(){
    return this.logged;
  } 
  getCurrentUser(){
    return this.currentUser;
  }
  setCurrentUser(user){
    this.loggedUserSourse.next(user);
  }
  removeUser(id:number){
  UserServiceModule.dummyUserList.splice(UserServiceModule.dummyUserList.findIndex(item => item.id === id), 1);
  
  }
  // dummy list serving as database //
   public static dummyUserList: Array<User> = [
    {

      id:1,
      firstName: "Lazar",
      lastName: "Smiljkovic",
      email: "lazar@gmail.com",
      password: "lazar12345",
      date: new Date("2020-02-22 08:15"),
      favorites : [4,6],
      location: "Beograd" ,
      likes: ["Theatres","Hotels","nightclub","Resorts","Bars"]
    },
    {
      id:2,
      firstName: "Milos",
      lastName: "Milosevic",
      email: "milos@gmail.com",
      password: "milos12345",
      date: new Date("2020-03-12 19:05"),
      favorites : [1,4],

      location: "Pozarevac",
      likes:[ "Hotels", "Resorts"]
    },
    {
      id:3,
      firstName: "Moderator",
      lastName: "Moderator",
      email: "moderator@gmail.com",
      password: "mod12345",
      date: new Date("2020-06-15 14:45"),
      favorites : [3,5],
      location: "Smederevo",
      likes: ["Bar"]
    },
    {
      id:4,
      firstName: "Ana",
      lastName: "Anic",
      email: "ana@gmail.com",
      password: "ana12345",
      date: new Date("2020-02-12 16:55"),
      favorites : [1,2,3,4],
      location: "Novi Sad",
      likes:["Hotels", "Theatres", "Resorts"]
    },
    {
      id:5,
      firstName: "Jovan",
      lastName: "Jovanovic",
      email: "jovan@gmail.com",
      password: "jovan12345",
      date: new Date("2019-08-18 02:05"),
      favorites : [1,2,3,5,4],
      location: "Nis",
      likes:["Hotels", "Theatres", "Resorts"]
    },
    {
      id:6,
      firstName: "Milica",
      lastName: "Milic",
      email: "milica@gmail.com",
      password: "milica12345",
      date: new Date("2017-03-12 14:30"),
      favorites : [1,2,3,5,4],
      location: "Kragujevac",
      likes:["Hotels", "Theatres", "Resorts"]
    }

  ]
  public getAllFavoritePostsForUser(userId : number){
     var user = UserServiceModule.dummyUserList.find(userToFind => userToFind.id == userId);
     console.log(user);
    const arr1 = user.favorites;
    const result = Array<Post>();
    for(let i of arr1){
      result.push(this.ps.getPostById(i.toString()));
    }
      console.log(result);
     return result;
  }
  getfirstName(user: User) :string {
    return user.email;
  }
  getUserById(id:number) : User {
    var foundUser : User; 
    UserServiceModule.dummyUserList.forEach(user => {
      if(user.id == id){
        foundUser = user;
      }

    });
    return foundUser;
  }


  getUser(userEmail: string) : User{
    return UserServiceModule.dummyUserList.find(userToFind => userToFind.email == userEmail);
  }

  isPasswordCorrect(userEmail : string, password:string) : boolean{
    return UserServiceModule.dummyUserList.find(userToFind => (userToFind.email == userEmail && userToFind.password == password)) != undefined;
  }
// New user gets added after he registers pushing data about him and adding a +1 to the new user id from the last registered user //
  registerUser(email:string,password:string, date:Date, firstName:string, lastName: string,location:any, likes:any) : User{
    var maxId = 0;
    UserServiceModule.dummyUserList.forEach(user => {
      if(maxId < user.id){
        maxId = user.id;
      }
    });
    var id = ++maxId;
    var favorites = Array<number>();
    var bookings = Array<number>();
    var user : User = {id,email,password,date,lastName,firstName,favorites,location, likes};
    UserServiceModule.dummyUserList.push(user);

    console.log(user);
    return user;
  }
  

 
  
}
