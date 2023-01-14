import { Component, AfterViewInit } from '@angular/core';
import { scrollAnimation } from '../animations';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    scrollAnimation
  ]
})
export class ProjectsComponent implements AfterViewInit {
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
    const element = document.getElementById('project-content');
    observer.observe(element!);
  }
}
