type project = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  link: string;
}

const projects: project[] = [
  {
    id: 1,
    name: 'Foro Electromovilidad 2024',
    description: 'Este proyecto presenta una Landing Page diseñada para el «Foro Electromovilidad 2024», una conferencia dedicada a explorar las últimas tendencias, innovaciones y desarrollos en electromovilidad.',
    technologies: ['Astro', 'TailwindCSS', 'React', 'Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/MelchorRuiz/foro_electromovilidad_2024',
    link: 'https://foro-electromovilidad.igeco.mx/'
  },
]

export default projects;