import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-staff-home',
  templateUrl: './staff-home.component.html',
  styleUrls: ['./staff-home.component.css']
})
export class StaffHomeComponent implements OnInit {
  students$;
  constructor(private _auth: AuthService) {
    this.students$ = _auth.getStudents();
   }


   deletestudent(id){
    console.log(id);
        // const observable = this._auth.deletOneStudent(id)
        // observable.subscribe(data => {
          
          //console.log(data)
          // this.id=data.id
          // this.deletedStaff = data
          //this.router.navigate(['/home/admin/staffs'])
        //})
      }
  ngOnInit() {
  }

}
