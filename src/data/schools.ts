type school = {
  id: number;
  name: string;
  logo: string;
  degree: string;
  startDate: string;
  endDate: string;
  skills: string[];
}

const schools_es: school[] = [
  {
    "id": 1,
    "name": "IUT d'Orléans",
    "logo": "iut-orleans.webp",
    "degree": "BUT 3 Informatica - Realización de aplicaciones",
    "startDate": "Septiembre 2024",
    "endDate": "Presente",
    "skills": ["Desarrollo web backend", "Python", "Django", "Redes neuronales", "Base de datos orientada a grafos"]
  },
  {
    "id": 2,
    "name": "Universidad Tecnológica de León",
    "logo": "utleon.webp",
    "degree": "TSU en Desarrollo de Software Multiplataforma",
    "startDate": "Septiembre 2022",
    "endDate": "Agosto 2024",
    "skills": ["Programación orientada a objetos (POO)", "Java", "MySQL", "Desarrollo frontend", "Networking"]
  }
]

const schools_fr: school[] = [
  {
    "id": 1,
    "name": "IUT d'Orléans",
    "logo": "iut-orleans.webp",
    "degree": "BUT 3 Informatique - Développement d'applications",
    "startDate": "Septembre 2024",
    "endDate": "Présent",
    "skills": ["Développement web backend", "Python", "Django", "Réseaux de neurones", "Base de données orientée graphe"]
  },
  {
    "id": 2,
    "name": "Universidad Tecnológica de León",
    "logo": "utleon.webp",
    "degree": "TSU en Développement de logiciels multiplateforme",
    "startDate": "Septembre 2022",
    "endDate": "Août 2024",
    "skills": ["Programmation orientée objet (POO)", "Java", "MySQL", "Développement frontend", "Networking"]
  }
]

function getSchools(locale: string): school[] {
  if (locale === "fr") {
    return schools_fr;
  } else {
    return schools_es;
  }
}

export default getSchools;