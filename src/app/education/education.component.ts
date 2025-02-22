import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Education, ResumeService } from 'resume';
import { Observable } from 'rxjs';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    SectionHeaderComponent,
    MatCardModule,
    MatChipsModule,
  ],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  education$: Observable<Education[]> = this.resumeService.education$;
  constructor(private readonly resumeService: ResumeService) {}
}
