import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent {

  updateStudentForm!:FormGroup;
  id:number=this.activatedRoute.snapshot.params['id'];

  constructor(private activatedRoute: ActivatedRoute, private service: StudentService, 
              private fb: FormBuilder,private router: Router){ }

  ngOnInit(){
    this.updateStudentForm=this.fb.group({
      roll:[null,Validators.required],
      name:[null,Validators.required],
      department:[null,Validators.required],
      address:[null,Validators.required],
      phone:[null,Validators.required],
    })
    this.getStudentById();
  }

  getStudentById(){
    this.service.getStudentById(this.id).subscribe(
      (res)=>{
        console.log(res);
      })
  }

  updateStudent(){
    this.service.updateStudent(this.id,this.updateStudentForm.value).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigateByUrl('students');
      })
  }
}
