import { Component, Inject, LOCALE_ID } from '@angular/core';
import getJobs from '../../data/jobs';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  template: `
    <h2 class="text-2xl font-semibold py-2" i18n>Experiencia</h2>
    <div class="flex flex-col gap-2">
      @for (job of jobs; track job.id) {
        <div class="border-[1px] border-black rounded-lg p-4">
          <div class="flex gap-4">
            <img class="size-20 rounded-full" src="{{ job.logo }}" alt="">
            <div>
              <h5 class="text-xl font-medium">{{ job.title }}</h5>
              <p>{{ job.employmentType }} <span i18n>en</span> {{ job.company }}</p>
              <p>{{ job.startDate }} - {{ job.endDate }}</p>
              <p>{{ job.location }} ({{ job.locationType }})</p>
              <p class="text-sm">{{ job.description }}</p>
            </div>
          </div>
          <ul class="flex flex-wrap gap-2 pt-4">
            @for (skill of job.skills; track skill) {
              <li class="border-[1px] border-black py-1 px-2 hover:bg-black hover:text-white">{{ skill }}</li>
            }
          </ul>
        </div>
      }
    </div>
  `
})
export class ExperienceComponent {
  jobs = getJobs("es");
  
  constructor(@Inject(LOCALE_ID) private locale: string) {}
  ngOnInit(){
    this.jobs = getJobs(this.locale);
  }
}
