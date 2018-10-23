import { Component, OnInit } from '@angular/core';
import{ AuthService } from '../service/auth.service';
@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
  registerStudentData ={};
  constructor(private _auth: AuthService) {

   }

  ngOnInit() {
  }

  registerStudent() {
    this._auth.registerStudent(this.registerStudentData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
        
      
      
    )      
  }

}
