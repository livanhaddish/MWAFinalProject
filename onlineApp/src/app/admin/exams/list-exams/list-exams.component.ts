import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-exams',
  templateUrl: './list-exams.component.html',
  styleUrls: ['./list-exams.component.css']
})
export class ListExamsComponent implements OnInit {
   exams = [];
  //  count = 1;
  constructor() { 
    this.exams = ["yahiaghjbkl;lkjhgfxghjkl;'po[0987o6i5uersgdfgncvhjbkl;OP[\9-[p695oi47u654wyreshxfgnmcv,hjkhil/u989p68o67i5erjdhmgcjvkhl/iup'9706p958r5rsjgfmhgcvjkhl/jopu'9y8978", "mera","livan"];
    // this.count +=1;
  }

  ngOnInit() {
  }

}
