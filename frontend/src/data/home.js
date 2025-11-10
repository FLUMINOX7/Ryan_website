// Données pour la page d'accueil

export const homeData = {
  hero: {
    greeting: "Bonjour, je suis",
    name: "Ryan",
    tagline: "Développeur Full Stack & Créateur d'Expériences Web",
    description: "Étudiant passionné qui transforme des idées en applications web modernes et performantes. Toujours prêt à relever de nouveaux défis technologiques.",
    cta: {
      primary: {
        text: "Découvrir mes projets",
        link: "/projects"
      },
      secondary: {
        text: "Me contacter",
        link: "/contact"
      }
    }
  },

  about: {
    title: "À Propos",
    description: "Étudiant en informatique passionné par le développement web et les nouvelles technologies. Je crée des solutions numériques innovantes en combinant créativité et expertise technique.",
    image: "/assets/images/profile.jpg",
    stats: [
      {
        value: "3+",
        label: "Ans d'expérience"
      },
      {
        value: "10+",
        label: "Projets réalisés"
      },
      {
        value: "15+",
        label: "Technologies maîtrisées"
      }
    ]
  },

  keySkills: {
    title: "Compétences Principales",
    description: "Les technologies que j'utilise au quotidien pour créer des solutions web performantes.",
    skills: [
      {
        name: "React",
        icon: "⚛️",
        description: "Développement d'interfaces modernes et réactives",
        level: 80
      },
      {
        name: "JavaScript",
        icon: "🟨",
        description: "Programmation front-end et back-end",
        level: 85
      },
      {
        name: "Node.js",
        icon: "🟢",
        description: "Création d'APIs et services backend",
        level: 75
      },
      {
        name: "Python",
        icon: "🐍",
        description: "Scripts, IA et développement backend",
        level: 80
      },
      {
        name: "Git",
        icon: "📦",
        description: "Gestion de version et collaboration",
        level: 85
      },
      {
        name: "SQL",
        icon: "🗄️",
        description: "Bases de données relationnelles",
        level: 75
      }
    ]
  },

  highlights: {
    title: "Pourquoi Travailler Avec Moi ?",
    items: [
      {
        icon: "💡",
        title: "Créatif & Innovant",
        description: "J'apporte des solutions originales et des idées fraîches à chaque projet"
      },
      {
        icon: "🚀",
        title: "Technologies Modernes",
        description: "J'utilise les frameworks et outils les plus récents de l'industrie"
      },
      {
        icon: "🎯",
        title: "Orienté Résultats",
        description: "Je me concentre sur la livraison de solutions qui répondent aux besoins"
      },
      {
        icon: "📈",
        title: "Apprentissage Continu",
        description: "Je me tiens constamment à jour avec les dernières tendances tech"
      }
    ]
  }
};
