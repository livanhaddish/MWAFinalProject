import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "http://localhost:3090/app/register";
  private _loginUrl = "http://localhost:3090/app/login";
  private _sentEmail = "http://localhost:3090/email/send-email";
  private _getUserUrl = "http://localhost:3090/users"
  private _studentUrl = "http://localhost:3090/students/register"
  private _getstudentUrl = "http://localhost:3090/students"
  private _getexamUrl = "http://localhost:3090/exams"
  private _saveanswerUrl = "http://localhost:3090/exams/answer"
  private _setquestiontUrl = "http://localhost:3090/exams/add"
  
  private _getstaffUrl = "http://localhost:3090/staffs"
  private _createStaffUrl = "http://localhost:3090/staffs/createStaff";
  private _getOnestaffUrl = "http://localhost:3090/staffs/"
  private _updateStaffUrl = "http://localhost:3090/staffs/updateStaff/"
  
  private _deletOneStaff = "http://localhost:3090/staffs/deletStaff/"
  private _deletOneStudent = "http://localhost:3090/students/deleteStudent/"
  constructor(private http: HttpClient) {
    
   }
  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  sentEmail(mail){
    return this.http.post<any>(this._sentEmail, mail)
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

getStaffs(){
  return this.http.get<any>(this._getstaffUrl);
}

getOneStaff(id){
  const params = new HttpParams();
  params.set('id', id);
  return this.http.get<any>(this._getOnestaffUrl+id.id);
}

updateStaff(staff,id){
  const params = new HttpParams();
  params.set('id', id);
  return this.http.put<any>(this._updateStaffUrl+id.id,staff);
}
registerdStaff(staff){
  return this.http.post<any>(this._createStaffUrl,staff);
}
deletOneStaff(id){
  const params = new HttpParams();
  params.set('id', id);
  return this.http.delete<any>(this._deletOneStaff+id.id);
}
deletOneStudent(id){
  const params = new HttpParams();
  params.set('id', id);
  return this.http.delete<any>(this._deletOneStudent+id.id);
}
}
