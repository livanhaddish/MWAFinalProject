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
import { RegisterStudentComponent } from './register-student/register-student.component';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { EndExamComponent } from './end-exam/end-exam.component';
import { DeletStaffComponent } from './admin/addmission-staff/delet-staff/delet-staff.component';
import { DeletStudentComponent } from './delet-student/delet-student.component';
import { StaffNavComponent } from './staff-nav/staff-nav.component';
import { StudentsComponent } from './students/students.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'', component:HomeComponent},
  // {path:'stafhome', component:StaffHomeComponent,canActivate:[AuthGuard]},
  {path:'stafhome', component:StaffNavComponent,children:[
    {path:'students',component: StaffHomeComponent,canActivate:[AuthGuard]},
    {path:'students/delete/:id', component:DeletStudentComponent,canActivate:[AuthGuard]},
    {path: 'students/email/:email', component:EmailsentComponent,canActivate:[AuthGuard]}
  ]},

  {path:'home',component:BsNavbarComponent,children:[
    {path:'admin/exams', component:ListExamsComponent,canActivate:[AuthGuard]},
  {path:'admin/exams/new', component:NewExamQuationComponent,canActivate:[AuthGuard]},
  {path:'admin/exams/edit/:id', component:EditQuationComponent,canActivate:[AuthGuard]},
  {path:'admin/students', component:ListAdminStudentsComponent,canActivate:[AuthGuard]},
  {path:'admin/students/grade', component:GradeStudentComponent,canActivate:[AuthGuard]},
  {path :'admin/staff/new', component:NewStaffComponent,canActivate:[AuthGuard]},
  {path :'admin/staffs', component:ListStaffsComponent,canActivate:[AuthGuard]},
  {path:'admin/staffs/edit/:id', component:EditStaffComponent,canActivate:[AuthGuard]},
  {path:'admin/staffs/delete/:id', component:DeletStaffComponent,canActivate:[AuthGuard]},
  {path:'register', component:RegisterComponent}
  

]},
 { path:'startexam', component: TestComponent},
  {path:'login', component:LoginComponent},
  {path: 'confirmation',component:StudentsComponent},
  {path:'signup', component:RegisterStudentComponent},
  {path:'exampage', component:ExamPageComponent,canActivate:[AuthGuard]},
  {path:'endexam', component:EndExamComponent},
  {path: 'sendemail', component:EmailsentComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
