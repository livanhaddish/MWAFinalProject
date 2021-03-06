import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-list-exams',
  templateUrl: './list-exams.component.html',
  styleUrls: ['./list-exams.component.css']
})
export class ListExamsComponent implements OnInit {
   exams$;
   
  //  count = 1;
  constructor(private _auth: AuthService) { 
   this.exams$ = _auth.getExams();
   
    //this.count +=1;
  }

  ngOnInit() {
  
}

}
