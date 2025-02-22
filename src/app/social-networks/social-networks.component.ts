import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { Profile } from 'resume';
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
  selector: 'app-social-networks',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent {
  @Input() profiles: Profile[] = [];
  @Input() iconsOnly = false;

  // Icon mapping for social networks
  private networkIcons: Record<string, IconDefinition> = {
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

  getIconForNetwork(network: string): IconDefinition {
    return this.networkIcons[network] || faGlobe;
  }
}
