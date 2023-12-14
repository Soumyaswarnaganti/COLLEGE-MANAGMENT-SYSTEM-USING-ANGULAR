import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL=["http://localhost:8080/"]
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  postTeacher(teacher: any): Observable<any>{
    return this.http.post(BASIC_URL+"apit/teacher",teacher);
  }

  getAllTeachers(): Observable<any>{
    return this.http.get(BASIC_URL+"apit/teachers");
  }

  deleteTeacher(id: number): Observable<any>{
    return this.http.delete(BASIC_URL+"apit/teacher/"+id);
  }

  getTeacherById(id:number): Observable<any>{
    return this.http.get(BASIC_URL+"apit/teacher/"+id);
  }

  updateTeacher(id:number, teacher: any): Observable<any>{
    return this.http.put(BASIC_URL+"apit/teacher/"+id,teacher);
  }
}
