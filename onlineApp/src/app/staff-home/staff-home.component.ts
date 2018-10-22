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

  ngOnInit() {
  }

}
