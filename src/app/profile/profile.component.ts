import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Basics } from 'resume';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgOptimizedImage],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() basics!: Basics;
  locationIcon = faLocationDot;

  /**
   * Handles high-rez loading failure and falls back to the jsonresume gravatar url.
   * @param event
   */
  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img && this.basics.image) {
      img.src = this.basics.image;
    }
  }
}
