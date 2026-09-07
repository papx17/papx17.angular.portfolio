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
  email = 'jmadev17@gmail.com';
  readonly subject = encodeURIComponent('Contacto desde el Portafolio');
  readonly body = encodeURIComponent(
    'Hola José Miguel,\n\nMe gustaría ponerme en contacto contigo para un proyecto...',
  );
  openWindow(windowName: string) {
    switch (windowName) {
      case 'linkedin':
        window.open(
          'https://www.linkedin.com/in/jos%C3%A9-miguel-apicello-escobar-341632282/',
          'blank',
        );
        break;
      case 'mail':
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${this.email}&su=${this.subject}&body=${this.body}`;
        window.open(gmailUrl, '_blank');
        break;
      case 'whatsapp':
        window.open('https://wa.link/fhigj4', 'blank');
        break;
    }
  }
}
