import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="showHeader">
      <h1 class="section-title">{{ title }}</h1>
      <p *ngIf="subtitle" class="section-subtitle">{{ subtitle }}</p>
    </ng-container>
  `
})
export class SectionHeaderComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input() showHeader = true;
}
