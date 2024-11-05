type Job = {
  id: number;
  title: string;
  logo: string;
  employmentType: string;
  company: string;
  location: string;
  locationType: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

const jobs_es: Job[] = [
  {
    "id": 1,
    "title": "Desarrollador full stack",
    "logo": "igeco-mexico.webp",
    "employmentType": "Contrato de prácticas",
    "company": "IGECO México",
    "location": "León, Guanajuato, México",
    "locationType": "Presencial",
    "startDate": "Mayo 2024",
    "endDate": "Agosto 2024",
    "description": "Formé parte del equipo de desarrollo web, donde colaboré a construir las diversas landing pages de los eventos que realiza la empresa, utilizando tecnologías como Astro, React y Node, contribuyendo al éxito de cada evento con interfaces eficientes y atractivas.",
    "skills": ["Node.js", "Astro", "JavaScript", "React.js", "Tailwind CSS", "Git"]
  },
]

const jobs_fr: Job[] = [
  {
    "id": 1,
    "title": "Développeur full stack",
    "logo": "igeco-mexico.webp",
    "employmentType": "Contrat de stage",
    "company": "IGECO México",
    "location": "León, Guanajuato, Mexique",
    "locationType": "Présentiel",
    "startDate": "Mai 2024",
    "endDate": "Août 2024",
    "description": "J'ai fait partie de l'équipe de développement web, où j'ai collaboré à la construction des différentes pages de destination des événements organisés par l'entreprise, en utilisant des technologies telles que Astro, React et Node, contribuant au succès de chaque événement avec des interfaces efficaces et attrayantes.",
    "skills": ["Node.js", "Astro", "JavaScript", "React.js", "Tailwind CSS", "Git"]
  },
]

function getJobs(locale: string = 'es'): Job[] {
  if (locale === "fr") {
    return jobs_fr;
  } else {
    return jobs_es;
  }
}

export default getJobs;