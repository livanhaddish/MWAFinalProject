import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
<<<<<<< HEAD
  private _registerUrl = "http://localhost:3090/app/register";
  private _loginUrl = "http://localhost:3090/app/login";
  constructor(private http: HttpClient) { }
=======
  
  private _registerUrl = "http://localhost:3090/app/register";
  private _loginUrl = "http://localhost:3090/app/login";
  private _getUserUrl = "http://localhost:3090/exams"
  private _getOneUserUrl = "http://localhost:3090/exams/edit"
  constructor(private http: HttpClient) {
    
   }
>>>>>>> 286bc838434997d9503f79bddd4e62997e881a00

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }
<<<<<<< HEAD
  loggedIn() {
    return !!localStorage.getItem('token')    
  }
  getToken() {
    return localStorage.getItem('token')
  }
=======
getUsers(){
  return this.http.get<any>(this._getUserUrl);
}

// getOneUser(id){
//   return this.http.get<any>(this._getOneUserUrl);
// }

>>>>>>> 286bc838434997d9503f79bddd4e62997e881a00
}
