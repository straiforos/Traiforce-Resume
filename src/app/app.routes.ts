import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { InterestsGridComponent } from './interests-grid/interests-grid.component';
import { interestsResolver } from './interests-grid/interests.resolver';

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
  // TODO style so the interests are centered in the page.
  {
    path: 'hobbies',
    title: 'Hobbies',
    component: InterestsGridComponent,
    resolve: {
      interests: interestsResolver
    }
  },
  {
    path: '**',
    redirectTo: 'about-me',
  },
];
