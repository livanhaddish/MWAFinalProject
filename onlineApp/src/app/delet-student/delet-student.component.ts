import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delet-student',
  templateUrl: './delet-student.component.html',
  styleUrls: ['./delet-student.component.css']
})
export class DeletStudentComponent implements OnInit {

  deletedStaff={}
   id;
  constructor(private _auth: AuthService ,private activateRoute:ActivatedRoute,private router:Router) { 
    let params:any =this.activateRoute.snapshot.params;
     console.log(params);

    const observable = this._auth.deletOneStudent(params)
    observable.subscribe(data => {
      
      console.log(data)
      this.id=data.id
      this.deletedStaff = data
      this.router.navigate(['/stafhome/students'])
    })
  }

  ngOnInit() {
  }

}
