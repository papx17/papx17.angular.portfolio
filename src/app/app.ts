import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { Dashboard } from './dashboard/dashboard';
import { Showcase } from './showcase/showcase';

@Component({
  imports: [RouterOutlet, Profile, Dashboard, Showcase],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio-app');
}
