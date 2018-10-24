import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {
  registeredStaff={}
   id;
  constructor(private _auth: AuthService ,private activateRoute:ActivatedRoute) { 
    let params:any =this.activateRoute.snapshot.params;
     console.log(params);

    const observable = this._auth.getOneStaff(params)
    observable.subscribe(data => {
      console.log(data)
      this.id=data.id
      this.registeredStaff = data
    })
    
    console.log('........')
  }

  ngOnInit() {


  }

  updateStaff() {
    this._auth.updateStaff(this.registeredStaff,this.id)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
        
      
      
    )      
  }

}
