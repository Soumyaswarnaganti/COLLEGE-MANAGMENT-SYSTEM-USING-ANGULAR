import { Component } from '@angular/core';
import { User } from '../../model/user';
import { LoginService } from '../../service/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  loginForm!:FormGroup;
  user:User=new User();
  constructor(private loginService:LoginService,private router:Router){}
  ngOnInit():void{
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)])
    })
  }

  get email(){
    return this.loginForm.controls['email'];
  }

  get password(){
    return this.loginForm.controls['password'];
  }

  loginUser(){
    
      console.log(this.user);
      this.loginService.loginUser(this.user).subscribe(date=>
      {
        alert('Successfully user is logged in')
      },
      error=> alert('Sorry!! not logged in ')
      )
      this.router.navigateByUrl('home');
    
  }
    
}