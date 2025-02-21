import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SocialNetworksComponent } from '../social-networks/social-networks.component';
import { ResumeService } from 'resume';
import { Profile } from 'resume';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, SocialNetworksComponent, CommonModule],
  template: `
    <mat-toolbar>
      <div class="footer-content">
        <div class="copyright">
          © {{ currentYear }} All rights reserved
        </div>
        <app-social-networks
          *ngIf="profiles$ | async as profiles"
          [profiles]="profiles"
          [iconsOnly]="true"
          class="footer-social-networks">
        </app-social-networks>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    // Footer toolbar styling
    mat-toolbar {
      background-color: var(--surface-lighter);
      padding: 1rem;
    }

    // Container for footer content
    .footer-content {
      width: 100%;
      display: flex;
      justify-content: space-between; // Space between copyright and social icons
      align-items: center;
      max-width: 1200px; // Match content width
      margin: 0 auto; // Center content
      gap: 2rem; // Space between elements
    }

    // Copyright text styling
    .copyright {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }

    // Social networks section styling
    .footer-social-networks {
      ::ng-deep .social-networks {
        margin: 0;
        justify-content: flex-end; // Align icons to the right
      }
    }

    // Mobile responsive adjustments
    @media (max-width: 600px) {
      .footer-content {
        flex-direction: column; // Stack elements vertically
        gap: 1rem; // Reduce gap on mobile
      }

      // Center social icons on mobile
      .footer-social-networks {
        ::ng-deep .social-networks {
          justify-content: center;
        }
      }
    }
  `]
})
export class FooterComponent {
  profiles$: Observable<Profile[]>;
  currentYear = new Date().getFullYear();

  constructor(private resumeService: ResumeService) {
    this.profiles$ = this.resumeService.basics$.pipe(
      map(basics => basics.profiles)
    );
  }
}
