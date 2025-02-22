import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService, Basics } from 'resume';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-info',
  imports: [CommonModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})
export class ContactInfoComponent {
  basics$: Observable<Basics> = this.resumeService.basics$;

  constructor(private readonly resumeService: ResumeService) {}
}
