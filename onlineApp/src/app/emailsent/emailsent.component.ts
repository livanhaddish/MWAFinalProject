import { Component, OnInit } from '@angular/core';
import{ AuthService } from '../service/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-emailsent',
  templateUrl: './emailsent.component.html',
  styleUrls: ['./emailsent.component.css']
})
export class EmailsentComponent implements OnInit {
emailSend={}
  constructor(private _auth: AuthService,private _router: Router) { }

  ngOnInit() {
  }
  sendEmail(){
    this._auth.sentEmail(this.emailSend)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/'])
      },
      err => console.log(err)
    )      
  }
  }

