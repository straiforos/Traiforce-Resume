import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from 'resume';

@Component({
  selector: 'lib-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  basics$ = this.resumeService.basics$;
  work$ = this.resumeService.work$;
  education$ = this.resumeService.education$;
  skills$ = this.resumeService.skills$;
  projects$ = this.resumeService.projects$;
  interests$ = this.resumeService.interests$;

  constructor(private resumeService: ResumeService) {}
}
