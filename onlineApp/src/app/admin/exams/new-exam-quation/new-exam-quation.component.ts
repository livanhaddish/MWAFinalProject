import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-new-exam-quation',
  templateUrl: './new-exam-quation.component.html',
  styleUrls: ['./new-exam-quation.component.css']
})
export class NewExamQuationComponent implements OnInit {
  questionData = {};
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }
  addQuestion() {
    this._auth.addQuestion(this.questionData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
        
      
      
    )      
  }
}
