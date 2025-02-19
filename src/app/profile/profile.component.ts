import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Basics } from 'resume';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() basics!: Basics;
}
