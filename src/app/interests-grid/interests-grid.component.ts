import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Interest, ResumeService } from 'resume';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-interests-grid',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './interests-grid.component.html',
  styleUrls: ['./interests-grid.component.scss']
})
export class InterestsGridComponent {
  interests$: Observable<Interest[]>  = this.resumeService.interests$;
  @Input() showHeader = true;

  constructor(private readonly resumeService: ResumeService) {}
}
