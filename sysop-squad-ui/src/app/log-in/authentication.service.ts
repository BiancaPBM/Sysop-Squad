import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { RegisterModel } from "../sign-up/register-model.model";
import { Token } from "../token.model";
import { LoginModel } from "./login-model.model";
const loginUrl = "https://localhost:5001/api/account/login"
const registerUrl = "https://localhost:5001/api/account/register"
let headers = new HttpHeaders({
    Authorization: "Bearer " + localStorage.getItem("access_token"),
  });

  @Injectable({
    providedIn: "root",
  })

  export class AuthenticationService{
   
    isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

      constructor (private http: HttpClient){
      }

      login(login: LoginModel): Observable<Token> {
          return this.http.post<Token>(loginUrl, login);                    
      }

      register (register: RegisterModel): Observable<any>{
        return this.http.post(registerUrl, register);
      }

      isAuthenticated(): Observable<boolean>{
        return this.isLoginSubject.asObservable();

      }

      logout(){
        localStorage.clear();
        this.isLoginSubject.next(false);
      }

      hasToken(): any {
        return !!localStorage.getItem('token');
      }
  }