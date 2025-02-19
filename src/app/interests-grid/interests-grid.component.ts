import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Interest } from 'resume';

@Component({
  selector: 'app-interests-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="interests-grid">
      <div *ngFor="let interest of interests" class="interest-card">
        <h3>{{ interest.name }}</h3>
        <div class="keywords">
          <span *ngFor="let keyword of interest.keywords" class="keyword">
            {{ keyword }}
          </span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .interests-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .interest-card {
      background: var(--surface-lighter);
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

      h3 {
        margin-bottom: 1rem;
        color: var(--text-primary);
      }
    }

    .keywords {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      .keyword {
        background: var(--surface-default);
        padding: 0.25rem 0.75rem;
        border-radius: 15px;
        font-size: 0.9rem;
        color: var(--text-secondary);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
      }
    }
  `]
})
export class InterestsGridComponent {
  @Input() interests: Interest[] = [];
}
