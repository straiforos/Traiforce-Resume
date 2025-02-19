import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Interest } from 'resume';

@Component({
  selector: 'app-interests-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests-grid.component.html',
  styleUrls: ['./interests-grid.component.scss']
})
export class InterestsGridComponent {
  @Input() interests: Interest[] = [];
}
