import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <h2 class="text-2xl font-semibold py-2" i18n>Acerca de</h2>
    <p class="py-1" i18n>Me apasiona la tecnología y la programación, y estoy constantemente actualizándome mediante cursos de informática.</p>
    <p class="py-1" i18n>Actualmente me enfoco en el desarrollo fullstack por la versatilidad que ofrece, permitiéndome trabajar eficazmente al mismo tiempo en el frontend y el backend.</p>
    <p class="py-1" i18n>En mi tiempo libre, disfruto explorando nuevos proyectos y desafíos.</p>
  `
})
export class AboutComponent {

}
