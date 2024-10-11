import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personaldetails',
  standalone: true,
  imports: [FormsModule,
            CommonModule
  ],
  templateUrl: './personaldetails.component.html',
  styleUrl: './personaldetails.component.css'
})
export class PersonaldetailsComponent {
  constructor(private det:ProductService) {
  }
  user:any='';
  address:any='';

  ngOnInit(): void {
    this.det.getDetails()
    .subscribe((response:any) => {
      this.user=response;
      this.user.birthDate=this.formatDate(this.user.birthDate);
      this.address = {
               address: response.address.address,
               city: response.address.city,
               state: response.address.state,
               postalCode: response.address.postalCode
      };
    });
    }
    formatDate(dateString: string): string {
      const date = new Date(dateString);
      return date.toISOString().split('T')[0]; 
    }
  }
