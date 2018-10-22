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
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EmailsentComponent } from './emailsent/emailsent.component';
import{AuthGuard} from'./auth.guard';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';
const routes: Routes = [
  {path:'register',component:RegisterComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'', component:HomeComponent},
  {path:'stafhome', component:StaffHomeComponent},
  {path:'home',component:BsNavbarComponent},
  {path:'login', component:LoginComponent},
  {path:'send-email',component:EmailsentComponent},
  {path:'admin/exams', component:ListExamsComponent,canActivate:[AuthGuard]},
  {path:'admin/exams/new', component:NewExamQuationComponent,canActivate:[AuthGuard]},
  {path:'admin/exams/edit/:id', component:EditQuationComponent,canActivate:[AuthGuard]},
  {path:'admin/students', component:ListAdminStudentsComponent,canActivate:[AuthGuard]},
  {path:'admin/students/grade', component:GradeStudentComponent,canActivate:[AuthGuard]},
  {path:'admin/admission-staffs', component:ListStaffsComponent,canActivate:[AuthGuard]},
  {path:'admin/admission-staffs/new', component:NewStaffComponent,canActivate:[AuthGuard]},
  {path:'admin/admission-staffs/edit', component:EditStaffComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
