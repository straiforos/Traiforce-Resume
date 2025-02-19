import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from 'resume';
import type { WorkExperience } from 'resume';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  work$: Observable<WorkExperience[]>;

  constructor(private resumeService: ResumeService) {
    this.work$ = this.resumeService.work$;
  }
}
