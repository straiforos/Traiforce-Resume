import { Routes } from '@angular/router';
import { ResumeComponent } from 'resume';
import { AboutMeComponent } from './about-me/about-me.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  {
    path: 'about-me',
    title: 'About Stephen Traiforos',
    component: AboutMeComponent,
  },
  {
    path: 'timeline',
    title: 'Stephens\'s Timeline',
    component: TimelineComponent
  },
  {
    path: 'resume',
    title: 'Stephen\'s Resume',
    component: ResumeComponent
  },
  {
    path: 'portfolio',
    title: 'Stephen\'s Portfolio',
    component: PortfolioComponent
  },
  {
    path: 'passions',
    title: 'Stephen\'s Passions',
    component: PortfolioComponent
  },
  {
    path: '**',
    redirectTo: 'about-me',
  },
];
