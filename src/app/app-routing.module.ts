import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostStudentComponent } from './components/post-student/post-student.component';
import { GetAllStudentComponent } from './components/get-all-student/get-all-student.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { PostTeacherComponent } from './components/post-teacher/post-teacher.component';
import { GetAllTeacherComponent } from './components/get-all-teacher/get-all-teacher.component';
import { UpdateTeacherComponent } from './components/update-teacher/update-teacher.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:"student",component:PostStudentComponent},
  {path:"students",component:GetAllStudentComponent},
  {path:"student/:id",component:UpdateStudentComponent},
  {path:"teacher",component:PostTeacherComponent},
  {path:"teachers",component:GetAllTeacherComponent},
  {path:"teacher/:id",component:UpdateTeacherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
