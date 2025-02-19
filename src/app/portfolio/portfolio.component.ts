import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from 'resume';
import { Project } from 'resume';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects$: Observable<Project[]>;

  constructor(private resumeService: ResumeService) {
    this.projects$ = this.resumeService.projects$;
  }
}
