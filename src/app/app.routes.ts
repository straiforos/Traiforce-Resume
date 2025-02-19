import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
  {
    path: 'about-me',
    title: 'About Me',
    component: AboutMeComponent,
  },
  {
    path: 'timeline',
    title: 'Timeline',
    component: TimelineComponent
  },
  {
    path: 'resume',
    title: 'Resume',
    component: ResumeComponent
  },
  {
    path: 'portfolio',
    title: 'Portfolio',
    component: PortfolioComponent
  },
  {
    path: 'hobbies',
    title: 'Hobbies',
    component: PortfolioComponent
  },
  {
    path: '**',
    redirectTo: 'about-me',
  },
];
