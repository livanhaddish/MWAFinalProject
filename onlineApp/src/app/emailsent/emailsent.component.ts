import { Component, OnInit } from '@angular/core';
import{ AuthService } from '../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router'
import { ConditionalExpr } from '@angular/compiler';
@Component({
  selector: 'app-emailsent',
  templateUrl: './emailsent.component.html',
  styleUrls: ['./emailsent.component.css']
})
export class EmailsentComponent implements OnInit {
emailSend={
  subject : '',
  to: '',
  body: ' click the link below to start the exam http://localhost:4200/startexam'
}

email;
  constructor(private _auth: AuthService,private _router: Router,private activated: ActivatedRoute) {
    console.log(this.activated.params);
    this.email = this.activated.snapshot.params;
    this.emailSend.to = this.email.email;
   }

  ngOnInit() {
    console.log(this.email.email)
  }
  sendEmail(){
    console.log(this.emailSend);

    this._auth.sentEmail(this.emailSend)
    .subscribe(
      res => {
        
        this._router.navigate(['/staffhome'])
      },
      err => console.log(err)
    )      
  }
  }

