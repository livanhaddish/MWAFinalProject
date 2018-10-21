import { Component, OnInit } from '@angular/core';
import{ AuthService } from '../service/auth.service';
<<<<<<< HEAD
import { Router } from '@angular/router'
=======
>>>>>>> 286bc838434997d9503f79bddd4e62997e881a00
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {}
<<<<<<< HEAD
  constructor(private _auth: AuthService,private _router: Router) { }
=======
  constructor(private _auth: AuthService) { }
>>>>>>> 286bc838434997d9503f79bddd4e62997e881a00

  ngOnInit() {
  }
 
<<<<<<< HEAD
  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/'])
      },
      err => console.log(err)
    )      
  }
=======
registerUser() {
  this._auth.registerUser(this.registerUserData)
  .subscribe(
    res => console.log(res),
    err => console.log(err)
      
    
    
  )      
}
>>>>>>> 286bc838434997d9503f79bddd4e62997e881a00
}
