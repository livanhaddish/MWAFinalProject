import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../window-ref.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  message:string;
  constructor(private _window:WindowRefService, private router: Router) { }

  ngOnInit() {
  }
startexam(){
 
  let isChrome = !!this._window.nativeWindow.chrome && !!this._window.nativeWindow.chrome.webstore;
  if(!isChrome){
    this.message = "You are not using Chrome";
    alert("Please use chrome to take the exam");
  }else{
    this.router.navigate(['/exampage'])
  }

}
}
