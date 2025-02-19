import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {provideHttpClient } from '@angular/common/http';
import { ResumeService } from './resume.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ResumeService,
    provideHttpClient()
  ]
})
export class ResumeModule { }
