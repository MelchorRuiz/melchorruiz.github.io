import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <h2 class="text-2xl font-semibold py-2">Acerca de</h2>
    <p class="py-1">Me apasiona la tecnología y la programación, y estoy constantemente actualizándome mediante cursos de informática.</p>
    <p class="py-1">Actualmente me enfoco en el desarrollo fullstack por la versatilidad que ofrece, permitiéndome trabajar eficazmente al mismo tiempo en el frontend y el backend.</p>
    <p class="py-1">En mi tiempo libre, disfruto explorando nuevos proyectos y desafíos.</p>
  `
})
export class AboutComponent {

}
