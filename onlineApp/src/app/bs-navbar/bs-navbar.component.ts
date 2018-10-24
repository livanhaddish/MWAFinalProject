// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'bs-navbar',
//   templateUrl: './bs-navbar.component.html',
//   styleUrls: ['./bs-navbar.component.css']
// })
// export class BsNavbarComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  constructor(private _authService:AuthService, private _router:Router) { }

  ngOnInit() {
  }
  logoutUser(){
    //console.log(localStorage.getItem('token'))
   // console.log("vgfhvbasdfg")
    
    localStorage.removeItem('token')
    this._router.navigate(['/'])
  }
  
}
