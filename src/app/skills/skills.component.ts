import { Component, AfterViewInit } from '@angular/core';
import { faPaintBrush, faCode, faGears } from '@fortawesome/free-solid-svg-icons';
import { scrollAnimation } from '../animations';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    scrollAnimation
  ]
})
export class SkillsComponent implements AfterViewInit {
  public faPaintbrush = faPaintBrush;
  public faCode = faCode;
  public faGears = faGears;
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
    const element = document.getElementById('skill-content');
    observer.observe(element!);
  }
}
