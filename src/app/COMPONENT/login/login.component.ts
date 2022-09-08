import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from 'src/app/DOMAIN/login';
import { CustomerDetails } from 'src/app/DOMAIN/registration';
import { LoginService } from 'src/app/SERVICES/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails : LoginDetails = new LoginDetails();
  customerDetails : CustomerDetails = new CustomerDetails();
  result : boolean = false;
  constructor(
    private loginService : LoginService,
    private router : Router
  ) {  }

  ngOnInit(): void {
  }

  loginUser(){
    console.log("loginUser()");
    console.log(this.result);
    this.loginService.loginUser(this.loginDetails).subscribe(
      data => {
        this.loginDetails = data;
        console.log(this.loginDetails);
        this.router.navigate(['']);
      }
    )
  }

  newRegistration() {
    console.log("newRegistration()");
    this.router.navigate(['newRegistration']);
    
  }

}
