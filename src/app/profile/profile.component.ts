import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Basics } from 'resume';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() basics!: Basics;
  locationIcon = faLocationDot;
}
