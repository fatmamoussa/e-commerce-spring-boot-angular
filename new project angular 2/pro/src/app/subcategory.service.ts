import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  constructor(private http:HttpClient) { }
  getsubcategory(){
    return this.http.get(`${environment.baseurl}/users/subcategory/all`)
  }
}
