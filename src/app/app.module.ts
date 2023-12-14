import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostStudentComponent } from './components/post-student/post-student.component';
import { GetAllStudentComponent } from './components/get-all-student/get-all-student.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { PostTeacherComponent } from './components/post-teacher/post-teacher.component';
import { GetAllTeacherComponent } from './components/get-all-teacher/get-all-teacher.component';
import { UpdateTeacherComponent } from './components/update-teacher/update-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    PostStudentComponent,
    GetAllStudentComponent,
    UpdateStudentComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    PostTeacherComponent,
    GetAllTeacherComponent,
    UpdateTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
