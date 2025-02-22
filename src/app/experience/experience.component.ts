import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperience } from 'resume';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input() experience!: WorkExperience;
}
