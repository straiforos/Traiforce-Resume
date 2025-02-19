import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ResumeComponent } from './resume.component';
import { ResumeService } from './resume.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ResumeComponent
  ],
  exports: [
    ResumeComponent
  ],
  providers: [
    ResumeService
  ]
})
export class ResumeModule { }
