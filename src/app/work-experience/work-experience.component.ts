import { Component, AfterViewInit } from '@angular/core';
import { scrollAnimation } from '../animations';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
  animations: [
    scrollAnimation
  ]
})
export class WorkExperienceComponent implements AfterViewInit {
  state = 'hide';
  
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.state = 'show';
          observer.unobserve(entry.target);
        }
      })
    });
    const element = document.getElementById('work-content');
    observer.observe(element!);
  }
}
