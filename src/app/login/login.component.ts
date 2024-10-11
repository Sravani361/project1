import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
            FormsModule,
            RouterOutlet,
            RouterLink,
            RouterLinkActive
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  
  constructor(private router:Router,
    private prod:ProductService) {}
  Username:string="tester@gmail.com";
  Password:string="admin";
  Onlogin() {
    this.prod.login(this.Username,this.Password)
    .subscribe((response:any)=> {
        console.log('Login Successful!');
        //localStorage.setItem('accesstoken',response.accessToken)
        this.router.navigate(['/navbar']);
    },
    (error)=> {
      this.prod.refresh()
      .subscribe((response:any) => {
        localStorage.setItem('accesstoken',response.accessToken)
      });
    });
  }
 }
 

