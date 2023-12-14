import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  baseUrl="http://localhost:8080/user"

  constructor(private httpClient:HttpClient) { }

  loginUser(user:User):Observable<Object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`,user);
  }
}