import { Component, Output, signal, output, inject } from '@angular/core';
import { Skills } from '../showcase/skills/skills';
import { NavigationService } from '../portfolio';

interface Translate {
  id: number;
  language: String;
  sectionName: string;
}

@Component({
  imports: [],
  selector: 'dashboard-c',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  nav_ser = inject(NavigationService);
  section = signal<string>('');
  language = 'en';
  sectionsEs: Array<Translate> = [
    { id: 1, language: 'es', sectionName: 'Sobre Mí' },
    { id: 2, language: 'es', sectionName: 'Habilidades' },
    { id: 3, language: 'es', sectionName: 'Experiencia' },
  ];
  sections: Array<Translate> = [
    { id: 1, language: 'en', sectionName: 'About Me' },
    { id: 2, language: 'en', sectionName: 'Skills' },
    { id: 3, language: 'en', sectionName: 'Experience' },
  ];

  handleClick(sectionName: string) {
    this.nav_ser.setSection(sectionName);
    console.log(sectionName);
  }
}
