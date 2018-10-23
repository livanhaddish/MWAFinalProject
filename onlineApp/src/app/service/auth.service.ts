import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "http://localhost:3090/app/register";
  private _loginUrl = "http://localhost:3090/app/login";
  private _sentEmail = "http://localhost:3090/email/send-email";
  private _registerUrl = "http://localhost:3090/app/register";
  private _loginUrl = "http://localhost:3090/app/login";
  private _getUserUrl = "http://localhost:3090/users"
  private _studentUrl = "http://localhost:3090/students/register"
  private _getstudentUrl = "http://localhost:3090/students"
  private _getexamUrl = "http://localhost:3090/exams"
  private _saveanswerUrl = "http://localhost:3090/exams/answer"
  private _setquestiontUrl = "http://localhost:3090/exams/add"
  
  constructor(private http: HttpClient) {
    
   }
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
getUsers(){
  return this.http.get<any>(this._getUserUrl);
}

registerStudent(student){
    return this.http.post<any>(this._studentUrl,student);
}

getStudents(){
  return this.http.get<any>(this._getstudentUrl);
}
addQuestion(question){
  return this.http.post<any>(this._setquestiontUrl, question)
}
getExams(){
   return this.http.get<any>(this._getexamUrl);
}

saveAnswer(answer){
  return this.http.post<any>(this._saveanswerUrl,answer);

}

}
