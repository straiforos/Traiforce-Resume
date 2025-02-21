import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SocialNetworksComponent } from '../social-networks/social-networks.component';
import { ResumeService } from 'resume';
import { Profile } from 'resume';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, SocialNetworksComponent, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  profiles$: Observable<Profile[]>;
  currentYear = new Date().getFullYear();

  constructor(private resumeService: ResumeService) {
    this.profiles$ = this.resumeService.basics$.pipe(
      map(basics => basics.profiles)
    );
  }
}
