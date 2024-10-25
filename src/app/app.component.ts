import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
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

  constructor(
    private title: Title, 
    private meta: Meta,
    @Inject(LOCALE_ID) private locale: string
  ) { }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
    this.setMetaData();
  }

  setMetaData() {
    this.title.setTitle('Melchor Ruiz');
    this.meta.addTags([
      { name: 'author', content: 'Melchor Ruiz' },
      { name: 'description', content: 'Melchor Ruiz - Full Stack Developer' },
      { name: 'keywords', content: 'Melchor Ruiz, Full Stack Developer, Angular, Node.js, JavaScript, TypeScript, HTML, CSS, SASS, Tailwind CSS, MySQL, MongoDB, Git, GitHub' },
      { name: 'robots', content: 'index, follow' },
      { rel: 'canonical', href: this.locale == 'fr' ? 'https://melchor-ruiz.fr/fr/' : 'https://melchor-ruiz.fr/es/' },
      { rel: 'alternate', hreflang: 'es', href: 'https://melchor-ruiz.fr/es/' },
      { rel: 'alternate', hreflang: 'fr', href: 'https://melchor-ruiz.fr/fr/' },
      { rel: 'alternate', hreflang: 'x-default', href: 'https://melchor-ruiz.fr' },
      { property: 'og:title', content: 'Melchor Ruiz' },
      { property: 'og:description', content: 'Melchor Ruiz - Full Stack Developer' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: this.locale == 'fr' ? 'https://melchor-ruiz.fr/fr/' : 'https://melchor-ruiz.fr/es/' },
      { property: 'og:image', content: this.locale == 'fr' ? 'https://melchor-ruiz.fr/fr/melchor.webp' : 'https://melchor-ruiz.fr/es/melchor.webp' }, // <-
    ])
  }
  
}
