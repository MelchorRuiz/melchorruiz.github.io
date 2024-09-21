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

const jobs: Job[] = [
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

export default jobs;