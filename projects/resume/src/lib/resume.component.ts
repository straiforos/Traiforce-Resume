import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from './resume.service';

@Component({
  selector: 'lib-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="resume-container" *ngIf="basics$ | async as basics">
      <header class="resume-header">
        <img [src]="basics.image" [alt]="basics.name" class="profile-image">
        <h1>{{ basics.name }}</h1>
        <h2>{{ basics.label }}</h2>
        <p>{{ basics.summary }}</p>
        <div class="contact-info">
          <p>{{ basics.email }} | {{ basics.phone }}</p>
          <p>{{ basics.location.city }}, {{ basics.location.region }} {{ basics.location.postalCode }}</p>
        </div>
        <div class="profiles" *ngIf="basics.profiles.length">
          <a *ngFor="let profile of basics.profiles" [href]="profile.url" target="_blank">
            {{ profile.network }}
          </a>
        </div>
      </header>

      <section class="work-experience" *ngIf="work$ | async as work">
        <h2>Work Experience</h2>
        <div *ngFor="let job of work" class="job">
          <h3>{{ job.position }}</h3>
          <h4>{{ job.company }}</h4>
          <p class="date">{{ job.startDate }} - {{ job.endDate || 'Present' }}</p>
          <ul>
            <li *ngFor="let highlight of job.highlights">{{ highlight }}</li>
          </ul>
        </div>
      </section>

      <section class="education" *ngIf="education$ | async as education">
        <h2>Education</h2>
        <div *ngFor="let edu of education" class="education-item">
          <h3>{{ edu.institution }}</h3>
          <p>{{ edu.studyType }} in {{ edu.area }}</p>
          <p>GPA: {{ edu.score }}</p>
          <div *ngIf="edu.courses.length">
            <h4>Key Courses:</h4>
            <ul>
              <li *ngFor="let course of edu.courses">{{ course }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="skills" *ngIf="skills$ | async as skills">
        <h2>Skills</h2>
        <div *ngFor="let skill of skills" class="skill-group">
          <h3>{{ skill.name }}</h3>
          <div class="keywords">
            <span *ngFor="let keyword of skill.keywords" class="keyword">{{ keyword }}</span>
          </div>
        </div>
      </section>

      <section class="projects" *ngIf="projects$ | async as projects">
        <h2>Projects</h2>
        <div *ngFor="let project of projects" class="project">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <div class="keywords">
            <span *ngFor="let keyword of project.keywords" class="keyword">{{ keyword }}</span>
          </div>
          <p><strong>Role:</strong> {{ project.role.join(', ') }}</p>
          <p><strong>Entity:</strong> {{ project.entity }}</p>
          <a [href]="project.url" target="_blank">View Project</a>
        </div>
      </section>

      <section class="interests" *ngIf="interests$ | async as interests">
        <h2>Interests</h2>
        <div *ngFor="let interest of interests" class="interest">
          <h3>{{ interest.name }}</h3>
          <div class="keywords">
            <span *ngFor="let keyword of interest.keywords" class="keyword">{{ keyword }}</span>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .resume-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .resume-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .profile-image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-bottom: 1rem;
    }

    .contact-info {
      margin: 1rem 0;
    }

    .profiles {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin: 1rem 0;
    }

    section {
      margin-bottom: 2rem;
    }

    .job, .education-item, .project {
      margin-bottom: 1.5rem;
    }

    .keywords {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 0.5rem 0;
    }

    .keyword {
      background: #f0f0f0;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.9rem;
    }

    ul {
      margin: 0.5rem 0;
      padding-left: 1.5rem;
    }

    li {
      margin-bottom: 0.25rem;
    }

    a {
      color: #007bff;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  `]
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
