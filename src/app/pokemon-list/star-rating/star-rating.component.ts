import { Component, OnInit, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() baseXp: number;

  public faStar: IconDefinition = faStar;
  public numberOfIcons: string[];

  constructor() { }

  public ngOnInit(): void {
    this.calculateStars();
  }
  
  private calculateStars(): void {
    const numberOfStars = Math.round(this.baseXp / 48);
    this.numberOfIcons = new Array(numberOfStars).fill("", 0);
  }

}
