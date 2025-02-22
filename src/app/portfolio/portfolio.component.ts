import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService, Project } from 'resume';
import { Observable } from 'rxjs';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    SectionHeaderComponent,
    MatCardModule,
    MatButtonModule,
    MatChipsModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects$: Observable<Project[]>;

  constructor(private resumeService: ResumeService) {
    this.projects$ = this.resumeService.projects$;
  }
}
