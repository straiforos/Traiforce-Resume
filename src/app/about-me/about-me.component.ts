import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworksComponent } from '../social-networks/social-networks.component';
import { InterestsGridComponent } from '../interests-grid/interests-grid.component';
import { BioSummaryComponent } from '../bio-summary/bio-summary.component';
import { ProfileComponent } from '../profile/profile.component';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CommonModule,
    ProfileComponent,
    BioSummaryComponent,
    SocialNetworksComponent,
    InterestsGridComponent,
    SectionHeaderComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {}
