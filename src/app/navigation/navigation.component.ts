import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  standalone: true
})
export class NavigationComponent {
  navigationRoutes = routes.filter(route => route.path !== '**');
}
