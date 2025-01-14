import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
    login(login:any){
      return this.http.post(`${environment.baseurl}/users/login`,login)
    }
    register(login:any){
      return this.http.post(`${environment.baseurl}/users/register`,login)
    }
}
