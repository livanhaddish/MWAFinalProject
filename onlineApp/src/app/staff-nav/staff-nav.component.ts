import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-nav',
  templateUrl: './staff-nav.component.html',
  styleUrls: ['./staff-nav.component.css']
})
export class StaffNavComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  logoutUser(){
    //console.log(localStorage.getItem('token'))
   
    
    localStorage.removeItem('token')
    this._router.navigate(['/'])
  }
}
