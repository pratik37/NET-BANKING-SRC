import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDetails } from '../DOMAIN/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL : string = "http://localhost:8080/loginapi/logindetails";
  constructor(private httpClient : HttpClient) { }

  loginUser(loginDetails : LoginDetails) : Observable<LoginDetails> {
    console.log("in loginUser");
    console.log(loginDetails);
    
    
    return this.httpClient.post<LoginDetails>(this.baseURL, loginDetails);
  }
}
