import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../app.routes';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  standalone: true
})
export class NavigationComponent {
  navigationRoutes = routes.filter(route => route.path !== '**');
}
