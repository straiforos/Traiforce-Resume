import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from 'resume';
import { Basics, Interest, Profile } from 'resume';
import { Observable } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faMedium,
  faStackOverflow,
  faInstagram,
  faFacebook,
  faYoutube,
  faTwitch,
  faCodepen,
  faDev,
  faReddit
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  basics$: Observable<Basics>;
  interests$: Observable<Interest[]>;

  // Icon mapping for social networks
  networkIcons: { [key: string]: any } = {
    'GitHub': faGithub,
    'LinkedIn': faLinkedin,
    'Twitter': faTwitter,
    'Medium': faMedium,
    'Stack Overflow': faStackOverflow,
    'Instagram': faInstagram,
    'Facebook': faFacebook,
    'YouTube': faYoutube,
    'Twitch': faTwitch,
    'CodePen': faCodepen,
    'Dev.to': faDev,
    'Reddit': faReddit,
    'Website': faGlobe
  };

  constructor(private resumeService: ResumeService) {
    this.basics$ = this.resumeService.basics$;
    this.interests$ = this.resumeService.interests$;
  }

  getIconForNetwork(network: string): any {
    return this.networkIcons[network] || faGlobe;
  }
}
