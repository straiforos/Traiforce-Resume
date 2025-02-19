import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from 'resume';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input() skills: Skill[] = [];
}
