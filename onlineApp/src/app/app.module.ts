import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
=======
>>>>>>> e5fddd06996f87e94fca2a4bcd7092f21557af2e
import { ListExamsComponent } from './admin/exams/list-exams/list-exams.component';
import { NewExamQuationComponent } from './admin/exams/new-exam-quation/new-exam-quation.component';
import { EditQuationComponent } from './admin/exams/edit-quation/edit-quation.component';
import { ListAdminStudentsComponent } from './admin/students/list-admin-students/list-admin-students.component';
import { ListStaffsComponent } from './admin/addmission-staff/list-staffs/list-staffs.component';
import { NewStaffComponent } from './admin/addmission-staff/new-staff/new-staff.component';
import { EditStaffComponent } from './admin/addmission-staff/edit-staff/edit-staff.component';
import { HomeComponent } from './home/home.component';
import { GradeStudentComponent } from './admin/students/grade-student/grade-student.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCheckboxModule} from '@angular/material/checkbox';
<<<<<<< HEAD
>>>>>>> e5fddd06996f87e94fca2a4bcd7092f21557af2e
=======
>>>>>>> e5fddd06996f87e94fca2a4bcd7092f21557af2e

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    LoginComponent
=======
=======
>>>>>>> e5fddd06996f87e94fca2a4bcd7092f21557af2e
    ListExamsComponent,
    NewExamQuationComponent,
    EditQuationComponent,
    ListAdminStudentsComponent,
    ListStaffsComponent,
    NewStaffComponent,
    EditStaffComponent,
    HomeComponent,
    GradeStudentComponent,
    BsNavbarComponent,
    
<<<<<<< HEAD
>>>>>>> e5fddd06996f87e94fca2a4bcd7092f21557af2e
=======
>>>>>>> e5fddd06996f87e94fca2a4bcd7092f21557af2e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
