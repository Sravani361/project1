import { Component } from '@angular/core';
import { Review } from '../../review.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviews: Review[] = [];
  review: Review = { id: 0, username: '', content: '', rating: 0 };

  submitReview() {
    const newReview: Review = {...this.review, id: this.reviews.length + 1 };
    this.reviews.push(newReview);
    this.review = { id: 0, username: '', content: '', rating: 0 }; 
  }
}
