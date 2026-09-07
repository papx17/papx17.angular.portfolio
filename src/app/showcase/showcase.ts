import { Component, inject } from '@angular/core';
import { Skills } from './skills/skills';
import { NavigationService } from '../portfolio';
import { AboutMe } from './about-me/about-me';
import { Experience } from './experience/experience';

@Component({
  imports: [Skills, AboutMe, Experience],
  selector: 'showcase-c',
  styleUrl: './showcase.css',
  templateUrl: './showcase.html',
})
export class Showcase {
  nav_ser = inject(NavigationService);
  readonly section = this.nav_ser.activeSection;
}
