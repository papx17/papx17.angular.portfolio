import { Component } from '@angular/core';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  imports: [],
  selector: 'profile-c',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}
