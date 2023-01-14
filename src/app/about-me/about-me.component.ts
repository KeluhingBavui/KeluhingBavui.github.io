import { Component, AfterViewInit } from '@angular/core';
import { scrollAnimation } from '../animations';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [
    scrollAnimation
  ]
})
export class AboutMeComponent implements AfterViewInit {
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
    const element = document.getElementById('about-content');
    observer.observe(element!);
  }
}
