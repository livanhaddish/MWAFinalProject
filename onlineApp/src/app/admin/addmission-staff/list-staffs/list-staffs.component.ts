import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service'
@Component({
  selector: 'app-list-staffs',
  templateUrl: './list-staffs.component.html',
  styleUrls: ['./list-staffs.component.css']
})
export class ListStaffsComponent implements OnInit {

  staff$;
   
  
  constructor(private _auth: AuthService) { 
   this.staff$ = _auth.getStaffs();
   
   
  }

  ngOnInit() {
  
}


}
