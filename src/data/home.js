// Données pour la page d'accueil

export const homeData = {
  hero: {
    greeting: "Bonjour, je suis",
    name: "Ryan",
    tagline: "Étudiant en BUT Informatique & Apprenti Développeur",
    description: "Passionné par l'informatique depuis mon plus jeune âge, j'ai découvert ce domaine grâce aux jeux vidéo avant de m'intéresser à la création et aux mécanismes des logiciels. Aujourd'hui alternant en développement informatique chez Allianz, je combine apprentissage théorique et expérience professionnelle.",
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
    description: "Étudiant en 3ème année de BUT Informatique à l'Université Sorbonne Paris Nord, actuellement en alternance chez Allianz. Curieux et motivé, je m'investis dans la maîtrise de nouvelles technologies et dans le travail en équipe, avec pour ambition de contribuer à des projets innovants dans le secteur numérique.",
    image: "/assets/images/profile.jpg",
    stats: [
      {
        value: "2",
        label: "Ans d'alternance"
      },
      {
        value: "6+",
        label: "Projets personnels"
      },
      {
        value: "18+",
        label: "Technologies"
      }
    ]
  },

  keySkills: {
    title: "Compétences Principales",
    description: "Les technologies que j'utilise pour développer des solutions performantes.",
    skills: [
      {
        name: "Python",
        icon: "🐍",
        description: "Scripts, automatisation et développement backend"
      },
      {
        name: "JavaScript",
        icon: "🟨",
        description: "Développement web front-end et back-end"
      },
      {
        name: "React",
        icon: "⚛️",
        description: "Création d'interfaces utilisateur modernes"
      },
      {
        name: "Java",
        icon: "☕",
        description: "Programmation orientée objet et applications"
      },
      {
        name: "SQL",
        icon: "🗄️",
        description: "Bases de données et requêtes complexes"
      },
      {
        name: "Git",
        icon: "📦",
        description: "Gestion de version et collaboration"
      }
    ]
  },

  highlights: {
    title: "Pourquoi Travailler Avec Moi ?",
    items: [
      {
        icon: "🎮",
        title: "Passion depuis l'enfance",
        description: "Une vraie passion pour l'informatique née des jeux vidéo et concrétisée par la création"
      },
      {
        icon: "🔍",
        title: "Curiosité naturelle",
        description: "Toujours chercher à comprendre les mécanismes et améliorer mes compétences"
      },
      {
        icon: "🤝",
        title: "Esprit d'équipe",
        description: "Collaboration efficace sur des projets universitaires et professionnels"
      },
      {
        icon: "📈",
        title: "Apprentissage continu",
        description: "Veille technologique constante et adaptation aux nouvelles technologies"
      }
    ]
  }
};
