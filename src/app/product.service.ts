import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public apiurl="/api/auth/login";
  constructor(private http : HttpClient) {}
  login(email:string,password:string){
    const body={email,password};
    return this.http.post(this.apiurl,body);
  }
  private apiurl1="https://dummyjson.com/auth/me";
  getDetails() {
    const token = localStorage.getItem('accesstoken');
    const headers = new HttpHeaders(
      { 
        'Authorization':`Bearer ${token}`
      }
    );
    return this.http.get(this.apiurl1,{headers});
  }
  private apiurl2="/api/auth/register";
  register(firstname:string,lastname:string,email:string,password:string,phonenumber:string,dob:string) {
    const body={firstname,lastname,email,password,phonenumber,dob};
    return this.http.post(this.apiurl2,body);
  }
  private apiurl3="https://dummyjson.com/auth/refresh";
  refresh() {
    const refreshToken = localStorage.getItem('accesstoken');
    const headers = new HttpHeaders(
      {
      'Authorization':`Bearer ${refreshToken}`
      }
    );
    const body = {refreshToken};
    return this.http.post(this.apiurl3,body,{headers});
  }
}

  
