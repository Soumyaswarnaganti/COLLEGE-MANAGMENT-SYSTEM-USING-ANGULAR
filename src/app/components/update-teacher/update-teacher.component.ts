import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../../service/teacher.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrl: './update-teacher.component.css'
})
export class UpdateTeacherComponent {

  updateTeacherForm!:FormGroup;
  id:number=this.activatedRoute.snapshot.params['id'];

  constructor(private activatedRoute: ActivatedRoute, private service: TeacherService, 
              private fb: FormBuilder,private router: Router){ }

  ngOnInit(){
    this.updateTeacherForm=this.fb.group({
      name:[null,Validators.required],
      department:[null,Validators.required],
      subject:[null,Validators.required],
      address:[null,Validators.required],
      phone:[null,Validators.required],
    })
    this.getTeacherById();
  }

  getTeacherById(){
    this.service.getTeacherById(this.id).subscribe(
      (res)=>{
        console.log(res);
      })
  }

  updateTeacher(){
    this.service.updateTeacher(this.id,this.updateTeacherForm.value).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigateByUrl('teachers');
      })
  }


}
