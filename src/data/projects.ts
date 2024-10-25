type project = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  link: string;
}

const projects_es: project[] = [
  {
    id: 1,
    name: 'Foro Electromovilidad 2024',
    description: 'Este proyecto presenta una Landing Page diseñada para el «Foro Electromovilidad 2024», una conferencia dedicada a explorar las últimas tendencias, innovaciones y desarrollos en electromovilidad.',
    technologies: ['Astro', 'TailwindCSS', 'React', 'Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/MelchorRuiz/foro_electromovilidad_2024',
    link: 'https://foro-electromovilidad.igeco.mx/'
  },
]

const projects_fr: project[] = [
  {
    id: 1,
    name: 'Forum Électromobilité 2024',
    description: 'Ce projet présente une page d\'atterrissage conçue pour le « Foro Electromovilidad 2024 », une conférence dédiée à l\'exploration des dernières tendances, innovations et développements dans le domaine de l\'électromobilité.',
    technologies: ['Astro', 'TailwindCSS', 'React', 'Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/MelchorRuiz/foro_electromovilidad_2024',
    link: 'https://foro-electromovilidad.igeco.mx/'
  },
]

function getProjects(locale: string): project[] {
  if (locale === "fr") {
    return projects_fr;
  } else {
    return projects_es;
  }
}

export default getProjects;