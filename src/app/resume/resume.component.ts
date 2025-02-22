import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';
import { SocialNetworksComponent } from '../social-networks/social-networks.component';
import { InterestsGridComponent } from '../interests-grid/interests-grid.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SkillsComponent } from '../skills/skills.component';
import { EducationComponent } from '../education/education.component';
import { ExperiencesComponent } from "../experiences/experiences.component";
import { ContactInfoComponent } from "../contact-info/contact-info.component";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CommonModule,
    ProfileComponent,
    SocialNetworksComponent,
    InterestsGridComponent,
    PortfolioComponent,
    SkillsComponent,
    EducationComponent,
    ExperiencesComponent,
    ContactInfoComponent
],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {}
