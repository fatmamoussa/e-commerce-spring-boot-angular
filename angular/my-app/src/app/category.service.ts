import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {}
    getcategory(){
      return this.http.get(`${environment.baseurl}/users/category/all`)
    }
    deletecategory(id:any){
      return this.http.delete(`${environment.baseurl}/users/category/delete/${id}`)
  
    }
    getone(id:any){
      return this.http.get(`${environment.baseurl}/users/category/getone/${id}`)
    }
    update(id:any,category:any){
      return this.http.put(`${environment.baseurl}/users/category/update/${id}`,category)
    }
    save(category:any){
      return this.http.post(`${environment.baseurl}/users/category/save`,category)
    }
}
