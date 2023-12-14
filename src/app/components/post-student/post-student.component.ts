import { Component } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-student',
  templateUrl: './post-student.component.html',
  styleUrl: './post-student.component.css'
})
export class PostStudentComponent {

  postStudentForm!:FormGroup;

  constructor(private studentService: StudentService,private fb: FormBuilder,private router: Router){ }

  ngOnInit(){
    this.postStudentForm=this.fb.group({
      roll:[null,Validators.required],
      name:[null,Validators.required],
      department:[null,Validators.required],
      address:[null,Validators.required],
      phone:[null,Validators.required],
    })
  }

  postStudent(){
    this.studentService.postStudent(this.postStudentForm.value).subscribe(
      (res)=>{console.log(res);
      this.router.navigateByUrl('students');
    })
  }
}
