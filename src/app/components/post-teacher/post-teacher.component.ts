import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../../service/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-teacher',
  templateUrl: './post-teacher.component.html',
  styleUrl: './post-teacher.component.css'
})
export class PostTeacherComponent {

  postTeacherForm!:FormGroup;

  constructor(private teacherService: TeacherService,private fb: FormBuilder,private router: Router){ }

  ngOnInit(){
    this.postTeacherForm=this.fb.group({
      name:[null,Validators.required],
      department:[null,Validators.required],
      subject:[null,Validators.required],
      address:[null,Validators.required],
      phone:[null,Validators.required],
    })
  }

  postTeacher(){
    this.teacherService.postTeacher(this.postTeacherForm.value).subscribe(
      (res)=>{console.log(res);
      this.router.navigateByUrl('teachers');
    })
  }
}
