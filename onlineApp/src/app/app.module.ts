import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule}  from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//import { LoginComponent } from './login/login.component';

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
import{ HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import{ TokenInterceptorService } from'./service/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,

    //LoginComponent,


 
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
    RegisterComponent,
    LoginComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
