import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Education } from 'resume';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  @Input() education!: Education;
}
