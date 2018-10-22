import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {
 public answer1 : String = "yahia";
  examQuestions$;

  constructor(private _auth: AuthService) {
     this.examQuestions$ = _auth.getExams();
  }
    onsubmit(){
      console.log(this.answer1);
    }
  ngOnInit() {
  }

}
