import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { scrollAnimation } from '../animations';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    scrollAnimation
  ]
})
export class ContactComponent {
  public faEnvelope = faEnvelope;
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
    const element = document.getElementById('contact-content');
    observer.observe(element!);
  }
}
