import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill, ResumeService } from 'resume';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    SectionHeaderComponent,
    MatCardModule,
    MatChipsModule,
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills$: Observable<Skill[]> = this.resumeService.skills$;

  constructor(private readonly resumeService: ResumeService) {}
}
