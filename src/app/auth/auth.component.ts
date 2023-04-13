import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponse, AuthService } from './auth.service';
import { Observable, Subject } from 'rxjs';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
 
  loginMode=false;
  isLoading=false;
  error:string=null;
  user:User;
  unsubscribeSub:Subject<User>;
 

 observer:Observable<AuthResponse>;
  

  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.authService.subject.subscribe(user=>{
      this.user=user;
    })
  }

  switchToLoginMode(){
    this.loginMode=true;
  }

  onSubmit(form:NgForm){
   console.log(form.value);
   const email=form.value.email;
   const password=form.value.password;
this.isLoading=true;
   if(!this.loginMode){

   this.observer= this.authService.signUp(email,password);

   }
   else{
    this.observer= this.authService.login(email,password);

   }
   this.observer.subscribe((responseData)=>{
    this.isLoading=false;
    console.log(responseData)
    this.route.navigate(['/recipes']);
  },
  (error)=>{
    console.log("error");
    console.log(error);
    this.isLoading=false;
    this.error=error

  }
  )
   form.reset(); 

  }
  login(form:NgForm){
    console.log(form.value);
    const email=form.value.email;
    const password=form.value.password;
  }

}
