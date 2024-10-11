import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,
            FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  Firstname:string='admin';
  Lastname:string='sravs';
  Email:string='tester@gmail.com';
  Phonenumber:string='9849330973';
  DOB:string='16/04/2000';
  Password:string='admin';
  constructor(private reg:ProductService,
              private router:Router) {}
  userreg() {
    this.reg.register(this.Firstname,this.Lastname,this.Email,this.Password,this.Phonenumber,this.DOB)
    .subscribe(response => {
      console.log("Registration Successfull");
      this.router.navigate(['/login']);
      
    });
  }

}
