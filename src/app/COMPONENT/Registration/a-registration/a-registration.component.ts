import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-registration',
  templateUrl: './a-registration.component.html',
  styleUrls: ['./a-registration.component.css']
})
export class ARegistrationComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  nextPage1(){
    console.log("in nextPage1");
    this.router.navigate(['nextPage']);
    
  }

}
