import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-nav-bar',
  templateUrl: './first-nav-bar.component.html',
  styleUrls: ['./first-nav-bar.component.css']
})
export class FirstNavBarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  logoutUser(){
    //console.log(localStorage.getItem('token'))
   
    
    localStorage.removeItem('token')
    this._router.navigate(['/'])
  }
}
