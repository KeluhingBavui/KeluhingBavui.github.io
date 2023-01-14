import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { fade } from '../animations';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fade
  ]
})
export class HomeComponent {
  public faLinkedIn = faLinkedin;
  public faGithub = faGithub;
  public faGoogle = faGoogle;
}
