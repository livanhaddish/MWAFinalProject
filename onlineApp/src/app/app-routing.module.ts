import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ListExamsComponent } from './admin/exams/list-exams/list-exams.component';
import { NewExamQuationComponent } from './admin/exams/new-exam-quation/new-exam-quation.component';
import { EditQuationComponent } from './admin/exams/edit-quation/edit-quation.component';
import { ListAdminStudentsComponent } from './admin/students/list-admin-students/list-admin-students.component';
import { GradeStudentComponent } from './admin/students/grade-student/grade-student.component';
import { ListStaffsComponent } from './admin/addmission-staff/list-staffs/list-staffs.component';
import { NewStaffComponent } from './admin/addmission-staff/new-staff/new-staff.component';
import { EditStaffComponent } from './admin/addmission-staff/edit-staff/edit-staff.component';
<<<<<<< HEAD
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import{AuthGuard} from'./auth.guard';
=======
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

>>>>>>> 286bc838434997d9503f79bddd4e62997e881a00
const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'admin/exams', component:ListExamsComponent},
  {path:'admin/exams/new', component:NewExamQuationComponent},
  {path:'admin/exams/edit/:id', component:EditQuationComponent},
  {path:'admin/students', component:ListAdminStudentsComponent},
  {path:'admin/students/grade', component:GradeStudentComponent},
  {path:'admin/admission-staffs', component:ListStaffsComponent},
  {path:'admin/admission-staffs/new', component:NewStaffComponent},
  {path:'admin/admission-staffs/edit', component:EditStaffComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
