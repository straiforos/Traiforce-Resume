import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Resume, Basics, WorkExperience, Education, Skill, Interest, Project } from './types/resume.types';

@Injectable({
  providedIn: 'root',
  deps: [provideHttpClient()]
})
export class ResumeService {
  private readonly resumeSubject = new BehaviorSubject<Resume | null>(null);
  public resume$: Observable<Resume>;

  // Expose individual sections as observables
  public basics$: Observable<Basics>;
  public work$: Observable<WorkExperience[]>;
  public education$: Observable<Education[]>;
  public skills$: Observable<Skill[]>;
  public interests$: Observable<Interest[]>;
  public projects$: Observable<Project[]>;

  constructor(private readonly http: HttpClient) {
    this.resume$ = this.resumeSubject.asObservable().pipe(
      map(resume => {
        if (!resume) {
          throw new Error('Resume data not loaded');
        }
        return resume;
      })
    );

    this.basics$ = this.resume$.pipe(map(resume => resume.basics));
    this.work$ = this.resume$.pipe(map(resume => resume.work));
    this.education$ = this.resume$.pipe(map(resume => resume.education));
    this.skills$ = this.resume$.pipe(map(resume => resume.skills));
    this.interests$ = this.resume$.pipe(map(resume => resume.interests));
    this.projects$ = this.resume$.pipe(map(resume => resume.projects));

    // Load the resume data
    this.loadResumeData();
  }

  private loadResumeData(): void {
    this.http.get<Resume>('assets/resume/resume.json').pipe(
      tap(resume => this.resumeSubject.next(resume))
    ).subscribe();
  }

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
