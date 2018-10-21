import { Component, OnInit } from '@angular/core';
import{ AuthService} from '../service/auth.service';
<<<<<<< HEAD
import { Router } from '@angular/router'
=======
import { identifierModuleUrl } from '@angular/compiler';
>>>>>>> 286bc838434997d9503f79bddd4e62997e881a00
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData={}
<<<<<<< HEAD
  constructor(private _auth: AuthService,private _router: Router) { }

  ngOnInit() {
  }
  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/'])
      },
      err => console.log(err)
    ) 
  }
}

=======
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }
loginUser(){
  this._auth.loginUser(this.loginUserData)
  .subscribe(
    res => console.log(res),
    err => console.log(err)
  )
}
 getUsers(){
   this._auth.getUsers().subscribe(
     res => console.log(res),
     err => console.log(err)
   )
 }
}
>>>>>>> 286bc838434997d9503f79bddd4e62997e881a00
