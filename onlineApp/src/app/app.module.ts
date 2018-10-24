import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule}  from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//import { LoginComponent } from './login/login.component';
//https://www.npmjs.com/package/ng2-responsive
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
import { FirstNavBarComponent } from './first-nav-bar/first-nav-bar.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';
import { EmailsentComponent } from './emailsent/emailsent.component';

import { ExamPageComponent } from './exam-page/exam-page.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { EndExamComponent } from './end-exam/end-exam.component';
import { DeletStaffComponent } from './admin/addmission-staff/delet-staff/delet-staff.component';
import { DeletStudentComponent } from './delet-student/delet-student.component';
import { StaffNavComponent } from './staff-nav/staff-nav.component';
import { StudentsComponent } from './students/students.component';
import { TestComponent } from './test/test.component';
// import { ResponsiveModule, ResponsiveConfig } from 'ng2-responsive';

// let config = {
//   breakPoints: {
//       xs: {max: 600},
//       sm: {min: 601, max: 959},
//       md: {min: 960, max: 1279},
//       lg: {min: 1280, max: 1919},
//       xl: {min: 1920}
//   },
//   debounceTime: 100 // allow to debounce checking timer
// };

// export function ResponsiveDefinition(){ 
//         return new ResponsiveConfig(config);
// };



@NgModule({
  declarations: [
    AppComponent,

    //LoginComponent,
    FirstNavBarComponent,
StudentsComponent,
 
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
    StaffHomeComponent,
    EmailsentComponent,
    
    FirstNavBarComponent,
    ExamPageComponent,
    RegisterStudentComponent,
    StaffHomeComponent,
   
    CountdownTimerComponent,
   
    EndExamComponent,
    DeletStaffComponent,
    DeletStudentComponent,
    StaffNavComponent,
    TestComponent
  ],
  imports: [
    // ResponsiveModule,
    CountdownTimerModule.forRoot(),
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
  },
// {provide: ResponsiveConfig, 
//   useFactory: ResponsiveDefinition }

],
  bootstrap: [AppComponent]
})
export class AppModule { }
