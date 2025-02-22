import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';
import { ResumeService } from 'resume';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-experiences',
  imports: [SectionHeaderComponent, ExperienceComponent, CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css',
  standalone: true,
})
export class ExperiencesComponent {
  work$ = this.resumeService.work$;
  constructor(private readonly resumeService: ResumeService) {}
}
