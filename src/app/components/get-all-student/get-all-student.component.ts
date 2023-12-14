import { Component } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-get-all-student',
  templateUrl: './get-all-student.component.html',
  styleUrl: './get-all-student.component.css'
})
export class GetAllStudentComponent {

  students: any = [];

  constructor(private service: StudentService){ }

  ngOnInit(){
    this.getAllStudents();
  }

  getAllStudents(){
    this.service.getAllStudents().subscribe(
      (res)=>{console.log(res);
      this.students=res;
    })
  }

  deleteStudent(id: number){
    this.service.deleteStudent(id).subscribe(
      (res)=>{console.log(res);
      this.getAllStudents();
    })
  }
}
