import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root', // Disponible en toda la aplicación
})
export class NavigationService {
  private readonly _activeSection = signal<string>('skills');

  readonly activeSection = this._activeSection.asReadonly();

  setSection(sectionName: string): void {
    this._activeSection.set(sectionName.toLowerCase());
  }
}
