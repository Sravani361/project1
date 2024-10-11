import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            CommonModule,
            RouterLink,
            RouterLinkActive
            ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[AuthService]
})
export class AppComponent implements OnInit {
  title = 'sample-project'
  ngOnInit(): void {  
  }
}
