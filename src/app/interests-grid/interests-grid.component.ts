import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Interest } from 'resume';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';
import { ActivatedRoute } from '@angular/router';
import { INTERESTS_SECTION } from './interests.constants';

@Component({
  selector: 'app-interests-grid',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './interests-grid.component.html',
  styleUrls: ['./interests-grid.component.scss']
})
export class InterestsGridComponent implements OnInit {
  @Input({ required: true }) interests!: Interest[];
  @Input() showHeader: boolean = true;
  @Input() title: string = INTERESTS_SECTION.title;
  @Input() subtitle: string = INTERESTS_SECTION.subtitle;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // If interests not provided via input, try to get from route data
    if (!this.interests) {
      this.route.data.subscribe(data => {
        if (data['interests']) {
          this.interests = data['interests'];
        }
        // Update title/subtitle from route data if available
        if (data['title']) {
          this.title = data['title'];
        }
        if (data['subtitle']) {
          this.subtitle = data['subtitle'];
        }
      });
    }
  }
}
