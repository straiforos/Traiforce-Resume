import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Resume, Basics, WorkExperience, Education, Skill, Interest, Project } from './types/resume.types';
import resumeData from '../../assets/resume/resume.json';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private resumeSubject = new BehaviorSubject<Resume>(resumeData);
  public resume$ = this.resumeSubject.asObservable();

  // Expose individual sections as observables
  public basics$: Observable<Basics> = this.resume$.pipe(
    map(resume => resume.basics)
  );

  public work$: Observable<WorkExperience[]> = this.resume$.pipe(
    map(resume => resume.work)
  );

  public education$: Observable<Education[]> = this.resume$.pipe(
    map(resume => resume.education)
  );

  public skills$: Observable<Skill[]> = this.resume$.pipe(
    map(resume => resume.skills)
  );

  public interests$: Observable<Interest[]> = this.resume$.pipe(
    map(resume => resume.interests)
  );

  public projects$: Observable<Project[]> = this.resume$.pipe(
    map(resume => resume.projects)
  );

  constructor() {}

  // Helper methods to get specific items
  public getWorkExperienceByCompany(company: string): Observable<WorkExperience | undefined> {
    return this.work$.pipe(
      map(work => work.find(w => w.company === company))
    );
  }

  public getProjectByName(name: string): Observable<Project | undefined> {
    return this.projects$.pipe(
      map(projects => projects.find(p => p.name === name))
    );
  }

  public getSkillByName(name: string): Observable<Skill | undefined> {
    return this.skills$.pipe(
      map(skills => skills.find(s => s.name === name))
    );
  }
}
