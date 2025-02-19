import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from 'resume';
import { Basics, Interest } from 'resume';
import { Observable } from 'rxjs';
import { SocialNetworksComponent } from '../social-networks/social-networks.component';
import { InterestsGridComponent } from '../interests-grid/interests-grid.component';
import { BioSummaryComponent } from '../bio-summary/bio-summary.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CommonModule,
    SocialNetworksComponent,
    InterestsGridComponent,
    BioSummaryComponent,
    ProfileComponent
  ],
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
