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
  {
    id: 2,
    name: 'Sicefa',
    description: 'Sistema integral para la administración de múltiples farmacias pertenecientes a una misma empresa. Permite la gestión centralizada de sucursales, pedidos, envíos, ventas, empleados y clientes. Optimiza la logística, mejora el control de inventarios y facilita la toma de decisiones estratégicas empresariales.',
    technologies: ['Javascript', 'mysql', 'java', 'docker', 'tomcat', 'jakarta'],
    github: 'https://github.com/MelchorRuiz/Sicefa',
    link: 'https://sicefa.onrender.com/'
  },
  {
    id: 3,
    name: 'CashPlash_Pro',
    description: 'Solución integral diseñada para facilitar la administración de pequeños y medianos negocios. Los usuarios pueden agregar nuevos módulos al sistema a través de una interfaz dedicada, permitiendo la adaptación de la aplicación a las necesidades específicas de cada negocio.',
    technologies: ['javascript', 'electron', 'html5', 'css3', 'mongodb', 'node.js'],
    github: 'https://github.com/MelchorRuiz/CashPlash_Pro',
    link: 'https://github.com/MelchorRuiz/CashPlash_Pro/releases/tag/v1.0.0'
  },
]

const projects_fr: project[] = [
  {
    id: 1,
    name: 'Foro Electromovilidad 2024',
    description: 'Ce projet présente une page d\'atterrissage conçue pour le « Foro Electromovilidad 2024 », une conférence dédiée à l\'exploration des dernières tendances, innovations et développements dans le domaine de l\'électromobilité.',
    technologies: ['Astro', 'TailwindCSS', 'React', 'Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/MelchorRuiz/foro_electromovilidad_2024',
    link: 'https://foro-electromovilidad.igeco.mx/'
  },
  {
    id: 2,
    name: 'Sicefa',
    description: 'Système intégré pour la gestion de plusieurs pharmacies. Il permet la gestion centralisée des succursales, des commandes, des expéditions, des ventes, des employés et des clients. Il optimise la logistique, améliore le contrôle des stocks et facilite la prise de décisions stratégiques au sein de l\'entreprise.',
    technologies: ['Javascript', 'mysql', 'java', 'docker', 'tomcat', 'jakarta'],
    github: 'https://github.com/MelchorRuiz/Sicefa',
    link: 'https://sicefa.onrender.com/'
  },
  {
    id: 3,
    name: 'CashPlash_Pro',
    description: 'Solución intégrale conçue pour faciliter la gestion des petites et moyennes entreprises. Les utilisateurs peuvent ajouter de nouveaux modules au système via une interface dédiée, permettant ainsi d\'adapter l\'application aux besoins spécifiques de chaque entreprise.',
    technologies: ['javascript', 'electron', 'html5', 'css3', 'mongodb', 'node.js'],
    github: 'https://github.com/MelchorRuiz/CashPlash_Pro',
    link: 'https://github.com/MelchorRuiz/CashPlash_Pro/releases/tag/v1.0.0'
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