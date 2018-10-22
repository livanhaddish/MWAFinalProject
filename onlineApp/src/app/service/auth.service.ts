import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "http://localhost:3090/app/register";
  private _loginUrl = "http://localhost:3090/app/login";
  private _sentEmail = "http://localhost:3090/email/send-email";
  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  sentEmail(user){
    return this.http.post<any>(this._sentEmail, user)
  }
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }
  loggedIn() {
console.log(localStorage.getItem('user'))
    return !!localStorage.getItem('token')    
  }
  getToken() {
    return localStorage.getItem('token')
  }
}
