import { Component } from '@angular/core';
import technologies from '../../data/technologies';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [],
  template: `
    <h2 class="text-2xl font-semibold py-2">Tecnologías</h2>
    <div class="flex flex-wrap gap-2">
      @for (technology of technologies; track technology.id) {
        <img src="{{ technology.image }}" alt="{{ technology.name }}" />
      }
  `,
  styles: ``
})
export class TechnologiesComponent {
  technologies = technologies;
}
