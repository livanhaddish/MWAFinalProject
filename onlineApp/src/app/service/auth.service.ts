import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private _registerUrl = "http://localhost:3090/app/register";
  private _loginUrl = "http://localhost:3090/app/login";
  private _getUserUrl = "http://localhost:3090/exams"
  private _getOneUserUrl = "http://localhost:3090/exams/edit"
  constructor(private http: HttpClient) {
    
   }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }
getUsers(){
  return this.http.get<any>(this._getUserUrl);
}

// getOneUser(id){
//   return this.http.get<any>(this._getOneUserUrl);
// }

}
