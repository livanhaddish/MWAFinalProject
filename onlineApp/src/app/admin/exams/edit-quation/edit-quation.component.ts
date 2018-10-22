import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-quation',
  templateUrl: './edit-quation.component.html',
  styleUrls: ['./edit-quation.component.css']
})
export class EditQuationComponent implements OnInit {
   question;
    questions$;
  constructor( private _auth: AuthService,private activatedRoute: ActivatedRoute) {
     let params: any = this.activatedRoute.snapshot.params;
     //this.questions$ = _auth.getUsers();
   
    // let x = params.id;
    console.log(this.questions$);
    // this.question = this.questions.x;

   }

  ngOnInit() {
  }

}
