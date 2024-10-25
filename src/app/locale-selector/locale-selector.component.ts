import { Component, Inject, LOCALE_ID } from '@angular/core';
import { MxComponent } from '../flags/mx.component';
import { FrComponent } from '../flags/fr.component';

@Component({
  selector: 'app-locale-selector',
  standalone: true,
  imports: [MxComponent, FrComponent],
  template: `
    <div class="fixed top-5 right-5 cursor-pointer flex flex-col gap-2 ring-1 ring-black rounded-md bg-white/70">
      <div class="flex items-center gap-2 p-2 pb-1" (click)="displayLocales()">
        @if (this.locale === 'fr'){
          <app-fr />
          <span class="hidden md:block">Français</span>
        } @else {
          <app-mx />
          <span class="hidden md:block">Español</span>
        }
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 hidden md:block">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
        </svg>
      </div>
      <div id="options" class="flex-col">
        <div class="flex items-center gap-2 hover:bg-slate-300 py-1 px-2" (click)="changeLocale('es')">
          <app-mx />
          <span class="hidden md:block">Español</span>
        </div>
        <div class="flex items-center gap-2 hover:bg-slate-300 py-1 px-2" (click)="changeLocale('fr')">
          <app-fr />
          <span class="hidden md:block">Français</span>
        </div>
      </div>
    </div>
  `,
  styles: `
    #options {
      display: none;
    }
    #options.show {
      display: flex;
      animation: expand 0.5s;
    }

    @keyframes expand {
      from {
        transform: translateY(-10px);
      }
      to {
        transform: translateY(0);
      }
    }
  `
})
export class LocaleSelectorComponent {

  constructor(@Inject(LOCALE_ID) public locale: string) {}
  
  displayLocales() {
    const options = document.getElementById('options') as HTMLElement;
    options.classList.toggle('show');
  }

  changeLocale(locale: string) {
    window.location.href = `/${locale}`;
  }
}
