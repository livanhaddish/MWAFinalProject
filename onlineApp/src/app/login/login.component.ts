import { Component, OnInit } from '@angular/core';
import{ AuthService} from '../service/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData={}
  constructor(private _auth: AuthService,private _router: Router) { }

  ngOnInit() {
  }
  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        console.log(res.token);
        console.log(res.user);
        if(res.user.role=="Admin"){
          this._router.navigate(['/home'])
        }
        else{
        this._router.navigate(['/stafhome'])
      }
      },
      err => console.log(err)
    ) 
  }
}

