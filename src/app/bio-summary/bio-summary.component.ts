import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bio-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>About Me</h2>
    <p>{{ summary }}</p>
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
  @Input() summary: string = '';
}
