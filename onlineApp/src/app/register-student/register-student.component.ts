import { Component, OnInit } from '@angular/core';
import{ AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
  registerStudentData ={};
  constructor(private _auth: AuthService,private _router: Router) {

   }

  ngOnInit() {
  }

  registerStudent() {
    this._auth.registerStudent(this.registerStudentData)
    .subscribe(
      res => {
        console.log(res),
        this._router.navigate(['/confirmation'])
      },
      err => console.log(err)
        
      
      
    )      
  }

}
