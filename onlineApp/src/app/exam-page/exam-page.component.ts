import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {
 public answerData ={};
  examQuestions$;

  constructor(private _auth: AuthService) {
     this.examQuestions$ = _auth.getExams();
  }

  sendAnswer(a){
    // this.answerData = JSON.parse(a);
   
   this._auth.saveAnswer(this.answerData)
   .subscribe(
    res => console.log(res),
    err => console.log(err)
      
    
    
  )      
}
  
    onsubmit(){
      this._auth.saveAnswer(this.answerData)
   .subscribe(
    res => console.log(res),
    err => console.log(err)
      
    
    
  )      
    }
  ngOnInit() {
  }

}
