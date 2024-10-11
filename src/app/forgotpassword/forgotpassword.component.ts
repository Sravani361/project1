import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [RouterOutlet,
            RouterLink,
            RouterLinkActive,
            FormsModule,
            CommonModule],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {
  email:string='kanaparthisravani123@gmail.com';
  onSubmit() {
    if(this.email) {
      alert("Email sent successfully to" + ' ' +this.email);
  }
  else {
    alert("Please enter registered email.");
  }
}
}
