import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../app.routes';
// Material Design imports
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navigation',
  // Required imports for standalone component
  imports: [
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  standalone: true
})
export class NavigationComponent {
  // Filter out the wildcard route from navigation
  navigationRoutes = routes.filter(route => route.path !== '**');
}
