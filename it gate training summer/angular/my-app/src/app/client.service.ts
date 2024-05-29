import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
 
  constructor(private http:HttpClient) {} 
    getclient(){
      return this.http.get(`${environment.baseurl}/users/coustom/all`) 
  }
  deleteclient(id:any){
    return this.http.delete(`${environment.baseurl}/users/coustom/delete/${id}`)

  }
  getone(id:any){
    return this.http.get(`${environment.baseurl}/users/coustom/getone/${id}`)
  }
  register(client:any){
    return this.http.post(`${environment.baseurl}/users/coustom/register1`,client) 
}
}
