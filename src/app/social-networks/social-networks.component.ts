import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
  template: `
    <div class="social-networks">
      <a *ngFor="let profile of profiles"
         [href]="profile.url"
         target="_blank"
         class="social-link"
         [title]="profile.network">
        <fa-icon [icon]="getIconForNetwork(profile.network)" class="social-icon"></fa-icon>
        <span class="network-name">{{ profile.network }}</span>
      </a>
    </div>
  `,
  styles: [`
    .social-networks {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.25rem;
      background-color: var(--surface-lighter);
      border-radius: 25px;
      text-decoration: none;
      color: var(--text-primary);
      transition: all 0.3s ease;

      .social-icon {
        font-size: 1.2rem;
      }

      .network-name {
        font-size: 0.9rem;
      }

      &:hover {
        background-color: var(--primary-color);
        color: var(--surface-default);
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
    }
  `]
})
export class SocialNetworksComponent {
  @Input() profiles: Profile[] = [];

  // Icon mapping for social networks
  private networkIcons: { [key: string]: any } = {
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

  getIconForNetwork(network: string): any {
    return this.networkIcons[network] || faGlobe;
  }
}
