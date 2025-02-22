import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SocialNetworksComponent } from '../social-networks/social-networks.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, SocialNetworksComponent, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
