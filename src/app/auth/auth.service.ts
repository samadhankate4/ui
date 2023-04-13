import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, catchError, tap, throwError } from "rxjs";
import { User } from "../user.model";
export interface AuthResponse{
    
        email:string,
        password:string,
        returnSecureToken:boolean,
        expiresIn:string,
        localId:string,
        idToken:string
        registered?:boolean

    
}

@Injectable({providedIn:"root"})
export class AuthService{
   subject:BehaviorSubject<User>= new BehaviorSubject(null);

    constructor(private http:HttpClient){

    }
    signUp(email:string,password:string)
    {
      return  this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBstkBbJR2rGgc7G4sOF6mis1VW6X4JiOI",
        {
            email:email,
            password:password,
            returnSecureToken:true

        })
        .pipe(
            
        catchError(errorRes=>this.handleError(errorRes)),
        
        tap(res=> this.handleAuthentication(res) )      

        );
        
        

    }
    handleAuthentication(res:AuthResponse){
        const expirationDate=new Date(new Date().getTime()+ +res.expiresIn);
        let user= new User(res.email,res.localId,res.idToken,expirationDate);
        
        localStorage.setItem("currentUser",JSON.stringify(user));

        console.log("emitting user");
        console.log(user);
        this.subject.next(user);

    }

    login(email:string,password:string){
       return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBstkBbJR2rGgc7G4sOF6mis1VW6X4JiOI',
        {
            email:email,
            password:password,
            returnSecureToken:true

        })
        .pipe(
        catchError(errorRes=>this.handleError(errorRes)),
        tap(res=> this.handleAuthentication(res) )      
         );
    }

    private handleError(errorRes:HttpErrorResponse){
        console.log(errorRes);
     
            let errorMsg='Unknown error';
            if(!errorRes.error &&!errorRes.error.error){
                return throwError(()=>errorMsg);
            }
            switch(errorRes.error.error.message){
                case 'EMAIL_EXISTS':
                    errorMsg="Email already Exist"
                break;
                case 'INVALID_PASSWORD':
                    errorMsg="Invalid Credentials"
                    break;
                default :
                    errorMsg="Unknown error";
              }
        
              return throwError(()=>errorMsg);

        

    }
}