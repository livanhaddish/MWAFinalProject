import { Component, OnDestroy, OnInit, NgModuleFactoryLoader } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-countdown-timer',
  template: '<h1>Remainig Time :  {{message}}</h1>'
})
export class CountdownTimerComponent implements OnInit, OnDestroy {

  intervalId = 0;
  message;
  seconds = 20;
  constructor(private router: Router) {}
  clearTimer() { clearInterval(this.intervalId); }

  ngOnInit()    { 
    this.start();
  //   setTimeout(() => {
  //     this.router.navigate(['endexam']);
  // }, 21000);  //5s
  }
  ngOnDestroy() { this.clearTimer(); }

  start() { 
    this.countDown();
   }
  stop()  {
    this.clearTimer();
    this.message = this.seconds;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Time is over!';
      } else {
        // if (this.seconds < 0) {
        //    this.seconds = 10; 
        //   } // reset
        this.message =this.seconds;
      }
    }, 1000);
  }
}