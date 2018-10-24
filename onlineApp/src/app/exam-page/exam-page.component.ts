import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {
 public answerData1 ={
   ques: ''
 };
 public answerData2 ={
  ques: ''
};
 public answerData3 ={
  ques: ''
};
  examQuestions1={
    question : ''
  };
  examQuestions2={
    question : ''
  };
  examQuestions3={
    question : ''
  };
  constructor(private _auth: AuthService) {

    const observable1 = this._auth.getExams()
    observable1.subscribe(data => {
      console.log(data)
      this.examQuestions1.question = data.quetion;
      this.answerData1.ques = data.question;
    }
    )
    const observable2 = this._auth.getExams()
    observable2.subscribe(data => {
      console.log(data)
      this.examQuestions2.question = data.question;
      this.answerData2.ques = data.question;
    }
    )
    const observable3 = this._auth.getExams()
    observable3.subscribe(data => {
      console.log(data)
      this.examQuestions3.question = data.question;
      this.answerData3.ques = data.question;
    }
    )
    
  }

  sendAnswer1(a){
    this._auth.saveAnswer(this.answerData1)
   .subscribe(
    res => console.log(res),
    err => console.log(err)
  )      
}
sendAnswer2(a){
  this._auth.saveAnswer(this.answerData2)
 .subscribe(
  res => console.log(res),
  err => console.log(err)
)      
}
sendAnswer3(a){
  console.log('mun 3')
  this._auth.saveAnswer(this.answerData3)
 .subscribe(
  res => console.log(res),
  err => console.log(err)
)      
}
  
    onsubmit(){
      this._auth.saveAnswer(this.answerData3)
   .subscribe(
    res => console.log(res),
    err => console.log(err)
      
    
    
  )      
    }
  ngOnInit() {
  }

}
