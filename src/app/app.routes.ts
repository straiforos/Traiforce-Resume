import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { InterestsGridComponent } from './interests-grid/interests-grid.component';
import { interestsResolver } from './interests-grid/interests.resolver';
import { INTERESTS_SECTION } from './interests-grid/interests.constants';

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
    title: INTERESTS_SECTION.title,
    component: InterestsGridComponent,
    resolve: {
      interests: interestsResolver
    },
    data: {
      title: INTERESTS_SECTION.title,
      subtitle: INTERESTS_SECTION.subtitle,
      showHeader: true
    }
  },
  {
    path: '**',
    redirectTo: 'about-me',
  },
];
