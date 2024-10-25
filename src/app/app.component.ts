import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from "./education/education.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TechnologiesComponent } from "./technologies/technologies.component";
import { LocaleSelectorComponent } from "./locale-selector/locale-selector.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, AboutComponent, ExperienceComponent, EducationComponent, ProjectsComponent, TechnologiesComponent, LocaleSelectorComponent],
  template: `
    <header class="max-w-[650px] mx-auto pt-5 md:pt-20 px-4">
      <app-hero />
      <app-locale-selector />
    </header>
    <main class="max-w-[650px] mx-auto pb-5 px-4">
      <app-about />
      <app-technologies />
      <app-experience />
      <app-education />
      <app-projects />
    </main>
    <footer class="flex justify-center py-2 px-4">
      <p>&copy; {{ currentYear }} Melchor Ruiz. <span i18n>Todos los derechos reservados.</span></p>
    </footer>
  `
})
export class AppComponent implements OnInit {
  currentYear: number = 0;

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
  
}
