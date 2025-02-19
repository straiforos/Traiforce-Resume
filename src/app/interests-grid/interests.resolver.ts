import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Interest } from 'resume';
import { ResumeService } from 'resume';


// TODO move to resolvers dir for the application.
export const interestsResolver: ResolveFn<Interest[]> = () => {
  const resumeService = inject(ResumeService);
  return resumeService.interests$;
};
