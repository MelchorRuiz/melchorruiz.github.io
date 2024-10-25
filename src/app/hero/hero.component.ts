import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-col-reverse md:flex-row justify-between md:gap-5">
      <div class="pt-4 max-w-[400px]">
        <h1 class="text-4xl font-bold" i18n>Hola, Soy Melchor Ruiz</h1>
        <p class="text-2xl" i18n>Desarrollador de software</p>
        <p i18n>Orleans, Centro-Valle del Loira, Francia</p>
        <div class="flex flex-wrap gap-2 py-2">
          <a href="https://github.com/MelchorRuiz" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github badge"></a>
          <a href="https://www.linkedin.com/in/melchor-ruiz-gonzalez/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin badge"></a>
          <a href="https://www.instagram.com/melchor.ru.go/" target="_blank"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="instagram badge"></a>
          <a href="https://api.whatsapp.com/send?phone=33782549655" target="_blank"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="whatsapp badge"></a>
          <a href="mailto:me@melchor-ruiz.fr" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="gmail badge"></a>
        </div>
        <a href="cv.pdf" target="_blank" class="px-3 py-1 my-1 bg-black text-white flex w-fit font-semibold">
          <span i18n>Currículum</span>
          <svg class="size-5 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 7l-10 10"></path><path d="M8 7l9 0l0 9"></path></svg>
        </a>
      </div>
      <div class="flex justify-center">
        <img class="size-44 rounded-full" src="melchor.webp" alt="Foto de Melchor Ruiz">
      </div>
    </div>
  `
})
export class HeroComponent {

}
