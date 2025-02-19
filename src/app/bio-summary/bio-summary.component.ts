import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bio-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bio-summary">
      <h2>About Me</h2>
      <p>{{ summary }}</p>
    </section>
  `,
  styles: [`
    .bio-summary {
      p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--text-primary);
      }
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
