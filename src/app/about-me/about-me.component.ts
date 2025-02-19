import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from 'resume';
import { Basics, Interest } from 'resume';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  basics$: Observable<Basics>;
  interests$: Observable<Interest[]>;

  constructor(private resumeService: ResumeService) {
    this.basics$ = this.resumeService.basics$;
    this.interests$ = this.resumeService.interests$;
  }
}
