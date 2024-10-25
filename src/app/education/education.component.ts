import { Component, Inject, LOCALE_ID } from '@angular/core';
import getSchools from '../../data/schools';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  template: `
    <h2 class="text-2xl font-semibold py-2" i18n>Educación</h2>
    <div class="flex flex-col gap-2">
      @for (school of schools; track school.id) {
        <div class="border-[1px] border-black rounded-lg p-4">
          <div class="flex gap-4">
            <img class="size-20 rounded-full" src="{{ school.logo }}" alt="">
            <div>
              <h5 class="text-xl font-medium">{{ school.name }}</h5>
              <p>{{ school.degree }} </p>
              <p>{{ school.startDate }} - {{ school.endDate }}</p>
            </div>
          </div>
          <ul class="flex flex-wrap gap-2 pt-4">
            @for (skill of school.skills; track skill) {
              <li class="border-[1px] border-black py-1 px-2 hover:bg-black hover:text-white">{{ skill }}</li>
            }
          </ul>
        </div>
      }
    </div>
  `,
  styles: ``
})
export class EducationComponent {
  schools = getSchools("es");

  constructor(@Inject(LOCALE_ID) private locale: string) {}
  ngOnInit(){
    this.schools = getSchools(this.locale);
  }
}
