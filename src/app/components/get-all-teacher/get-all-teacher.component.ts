import { Component } from '@angular/core';
import { TeacherService } from '../../service/teacher.service';

@Component({
  selector: 'app-get-all-teacher',
  templateUrl: './get-all-teacher.component.html',
  styleUrl: './get-all-teacher.component.css'
})
export class GetAllTeacherComponent {

  teachers: any = [];

  constructor(private service: TeacherService){ }

  ngOnInit(){
    this.getAllTeachers();
  }

  getAllTeachers(){
    this.service.getAllTeachers().subscribe(
      (res)=>{console.log(res);
      this.teachers=res;
    })
  }

  deleteTeacher(id: number){
    this.service.deleteTeacher(id).subscribe(
      (res)=>{console.log(res);
      this.getAllTeachers();
    })
  }
}
