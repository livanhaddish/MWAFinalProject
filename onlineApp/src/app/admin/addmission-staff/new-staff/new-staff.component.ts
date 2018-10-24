import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-staff',
  templateUrl: './new-staff.component.html',
  styleUrls: ['./new-staff.component.css']
})
export class NewStaffComponent implements OnInit {
registerdStaff={}
  constructor(private _auth: AuthService ,private router: Router) { }

  ngOnInit() {
  }
  registerStaff() {
    this._auth.registerdStaff(this.registerdStaff)
    .subscribe(
      res => {this.router.navigate(['/home/admin/staffs']),
      err => console.log(err)
        
    }
      
    )      
  }
}
