import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Basics, ResumeService } from 'resume';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Observable, take, tap } from 'rxjs';
import { SectionHeaderComponent } from "../shared/section-header/section-header.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgOptimizedImage, SectionHeaderComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  basics$: Observable<Basics> = this.resumeService.basics$;

  constructor(private readonly resumeService: ResumeService) {}
  locationIcon = faLocationDot;

  /**
   * Handles high-rez loading failure and falls back to the jsonresume gravatar url.
   * @param event
   */
  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    this.basics$.pipe(tap((basics) => (img.src = basics.image)), take(1)).subscribe();
  }
}
