import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http:HttpClient) { }
  getprovider(){
    return this.http.get(`${environment.baseurl}/users/provider/all`)
  }
}
