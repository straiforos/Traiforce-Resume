import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService, Basics } from 'resume';
import { Observable } from 'rxjs';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';

@Component({
  selector: 'app-bio-summary',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
  <ng-container *ngIf="basics$ | async as basics">
    <app-section-header title="About Me"></app-section-header>
    <p>{{ basics.summary }}</p>
  </ng-container>
  `,
  styles: [`
    p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: var(--text-primary);
    }

    h2 {
      color: var(--text-primary);
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  `]
})
export class BioSummaryComponent {
  basics$: Observable<Basics> = this.resumeService.basics$;

  constructor(private readonly resumeService: ResumeService) {}
}
