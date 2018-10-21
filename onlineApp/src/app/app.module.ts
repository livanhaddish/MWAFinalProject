import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
=======

>>>>>>> e4fcfbc8c88e31a214d40c6a7c186fa334de832a
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
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
<<<<<<< HEAD
=======
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
>>>>>>> e4fcfbc8c88e31a214d40c6a7c186fa334de832a

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
  
ListExamsComponent,
=======
   LoginComponent,
    ListExamsComponent,
>>>>>>> e4fcfbc8c88e31a214d40c6a7c186fa334de832a
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
    

=======
    RegisterComponent
>>>>>>> e4fcfbc8c88e31a214d40c6a7c186fa334de832a
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
