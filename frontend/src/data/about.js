// Données pour la page À propos

export const aboutData = {
  intro: {
    name: "Ryan",
    title: "Développeur Full Stack & Passionné d'Informatique",
    description: "Étudiant passionné par le développement web et les nouvelles technologies, je cherche constamment à apprendre et à relever de nouveaux défis. Mon objectif est de créer des solutions numériques innovantes et accessibles.",
    image: "/assets/images/profile.jpg", // À remplacer par votre vraie photo
    location: "France",
    email: "ryanmariapaul7@gmail.com"
  },

  journey: {
    title: "Mon Parcours",
    description: "Découvrez mon cheminement académique et professionnel dans le monde de l'informatique.",
    timeline: [
      {
        id: 1,
        type: "education", // education ou experience
        title: "Licence Informatique",
        institution: "Université [Nom]",
        location: "France",
        period: "2023 - 2026",
        description: "Formation approfondie en informatique couvrant le développement logiciel, les bases de données, les réseaux et l'algorithmique. Projets pratiques en équipe et apprentissage des méthodologies agiles.",
        current: true
      },
      {
        id: 2,
        type: "education",
        title: "Baccalauréat Scientifique",
        institution: "Lycée [Nom]",
        location: "France",
        period: "2020 - 2023",
        description: "Spécialité Mathématiques et Numérique et Sciences Informatiques (NSI). Découverte de la programmation et des bases de l'algorithmique.",
        current: false
      },
      {
        id: 3,
        type: "experience",
        title: "Développeur Web Freelance",
        institution: "Projets Personnels",
        location: "Remote",
        period: "2024 - Présent",
        description: "Développement de sites web et d'applications pour divers clients. Gestion complète des projets de la conception à la mise en production.",
        current: true
      },
      {
        id: 4,
        type: "experience",
        title: "Stage Développement Web",
        institution: "Entreprise [Nom]",
        location: "France",
        period: "Été 2024",
        description: "Stage de découverte du développement web professionnel. Participation au développement d'une application interne et apprentissage des bonnes pratiques.",
        current: false
      }
    ]
  },

  skills: {
    title: "Mes Compétences",
    description: "Technologies et outils que je maîtrise à différents niveaux.",
    categories: [
      {
        id: 1,
        name: "Frontend",
        icon: "🎨",
        skills: [
          { name: "HTML/CSS", level: 90 },
          { name: "JavaScript", level: 85 },
          { name: "React", level: 80 },
          { name: "TypeScript", level: 70 },
          { name: "Tailwind CSS", level: 75 }
        ]
      },
      {
        id: 2,
        name: "Backend",
        icon: "⚙️",
        skills: [
          { name: "Node.js", level: 75 },
          { name: "Express", level: 70 },
          { name: "Python", level: 80 },
          { name: "SQL", level: 75 },
          { name: "MongoDB", level: 65 }
        ]
      },
      {
        id: 3,
        name: "Outils & Autres",
        icon: "🛠️",
        skills: [
          { name: "Git/GitHub", level: 85 },
          { name: "VS Code", level: 90 },
          { name: "Linux", level: 70 },
          { name: "Docker", level: 60 },
          { name: "Figma", level: 65 }
        ]
      }
    ]
  },

  motivation: {
    title: "Pourquoi l'Informatique ?",
    content: "Ma passion pour l'informatique est née de ma curiosité naturelle pour comprendre comment fonctionnent les choses. J'ai été fasciné par la capacité de créer des solutions qui peuvent avoir un impact réel sur la vie des gens. L'informatique offre un équilibre parfait entre créativité et logique, permettant de transformer des idées abstraites en applications concrètes. Ce qui me motive le plus, c'est l'apprentissage constant : les technologies évoluent rapidement, offrant toujours de nouveaux défis à relever et de nouvelles compétences à acquérir. J'aime particulièrement le développement web car il combine aspects visuels et techniques, permettant de créer des expériences utilisateur engageantes et performantes.",
    highlights: [
      {
        icon: "💡",
        title: "Créativité",
        description: "Transformer des idées en solutions concrètes"
      },
      {
        icon: "🚀",
        title: "Innovation",
        description: "Utiliser les dernières technologies"
      },
      {
        icon: "🎯",
        title: "Impact",
        description: "Créer des outils qui facilitent la vie"
      },
      {
        icon: "📈",
        title: "Évolution",
        description: "Apprendre continuellement de nouvelles choses"
      }
    ]
  },

  professionalGoals: {
    title: "Mon Projet Professionnel",
    shortTerm: {
      title: "Court Terme",
      goals: [
        "Terminer ma licence en informatique avec mention",
        "Développer des projets open-source pour contribuer à la communauté",
        "Obtenir des certifications en développement web moderne",
        "Participer à des hackathons et événements tech"
      ]
    },
    longTerm: {
      title: "Long Terme",
      goals: [
        "Devenir développeur full-stack senior dans une entreprise innovante",
        "Me spécialiser dans l'architecture cloud et les systèmes distribués",
        "Encadrer et former de jeunes développeurs",
        "Lancer ma propre startup dans le domaine de la tech"
      ]
    }
  },

  values: [
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Le travail d'équipe mène au succès"
    },
    {
      icon: "💪",
      title: "Persévérance",
      description: "Ne jamais abandonner face aux défis"
    },
    {
      icon: "🎓",
      title: "Apprentissage",
      description: "Toujours chercher à progresser"
    },
    {
      icon: "✨",
      title: "Qualité",
      description: "Livrer du code propre et maintenable"
    }
  ]
};
