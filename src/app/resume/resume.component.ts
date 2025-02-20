import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from 'resume';
import { ProfileComponent } from '../profile/profile.component';
import { SocialNetworksComponent } from '../social-networks/social-networks.component';
import { ExperienceComponent } from '../experience/experience.component';
import { InterestsGridComponent } from '../interests-grid/interests-grid.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SkillsComponent } from '../skills/skills.component';
import { EducationComponent } from '../education/education.component';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CommonModule,
    ProfileComponent,
    SocialNetworksComponent,
    ExperienceComponent,
    InterestsGridComponent,
    PortfolioComponent,
    SkillsComponent,
    EducationComponent,
    SectionHeaderComponent
  ],
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
