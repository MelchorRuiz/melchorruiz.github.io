import { Component } from '@angular/core';
import projects from '../../data/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
    <h2 class="text-2xl font-semibold py-2">Proyectos</h2>
    <div class="flex flex-col gap-2">
      @for (project of projects; track project.id) {
        <div class="border-[1px] border-black rounded-lg p-4">
          <div>
            <h5 class="text-xl font-medium">{{ project.name }}</h5>
            <div class="flex gap-4">
              <a href="{{ project.github }}" target="_blank" class="hover:underline flex items-center gap-1 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="inline size-5" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
                Código fuente
              </a>
              <a href="{{ project.link }}" target="_blank" class="hover:underline flex items-center gap-1 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                Ver proyecto
              </a>
            </div>
            <p class="text-sm">{{ project.description }} </p>
          </div>
          <ul class="flex flex-wrap gap-2 pt-4">
            @for (technology of project.technologies; track technology) {
              <li class="border-[1px] border-black py-1 px-2 hover:bg-black hover:text-white">{{ technology }}</li>
            }
          </ul>
        </div>
      }
    </div>
  `
})
export class ProjectsComponent {
  projects = projects;
}