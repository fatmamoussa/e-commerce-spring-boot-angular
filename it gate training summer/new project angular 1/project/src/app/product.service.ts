import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListproductService {

  constructor(private http:HttpClient) { }
  getproducts(){
    return this.http.get(`${environment.baseurl}/users/product/all`)
  }
  save(idsubcategory:any,idprovider:any,product:any){
    return this.http.post(`${environment.baseurl}/users/product/save/${idsubcategory}/${idprovider}`,product)
  }
  deleteproduct(id:any){
    return this.http.delete(`${environment.baseurl}/users/product/delete/${id}`)

  }
  getone(id:any){
    return this.http.get(`${environment.baseurl}/users/product/getone/${id}`)
  }
  update(id:any,product:any){
    return this.http.put(`${environment.baseurl}/users/product/update/${id}`,product)
  }
}
