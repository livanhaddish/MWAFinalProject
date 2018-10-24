import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delet-staff',
  templateUrl: './delet-staff.component.html',
  styleUrls: ['./delet-staff.component.css']
})
export class DeletStaffComponent implements OnInit {

  deletedStaff={}
   id;
  constructor(private _auth: AuthService ,private activateRoute:ActivatedRoute,private router:Router) { 
    let params:any =this.activateRoute.snapshot.params;
     console.log(params);

    const observable = this._auth.deletOneStaff(params)
    observable.subscribe(data => {
      
      console.log(data)
      this.id=data.id
      this.deletedStaff = data
      this.router.navigate(['/home/admin/staffs'])
    })
  }
  

  ngOnInit() {

  }

}
