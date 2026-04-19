// Données pour la page À propos

export const aboutData = {
  intro: {
    name: "MARIA PAUL Ryan",
    title: "Étudiant en 3e année de BUT Informatique en alternance",
    description: "Passionné par l'informatique depuis mon plus jeune âge, j'ai découvert ce domaine grâce aux jeux vidéo, avant de m'intéresser à la création et aux mécanismes des logiciels. Aujourd'hui alternant en développement informatique chez Allianz, je combine apprentissage théorique et expérience professionnelle. Curieux et motivé, je m'investis dans la maîtrise de nouvelles technologies et dans le travail en équipe, avec pour ambition de contribuer à des projets innovants dans le secteur numérique.",
    image: "/assets/images/profile.jpg",
    location: "France",
    email: "ryanmariapaul7@gmail.com"
  },

  education: {
    title: "Formations",
    description: "Mon parcours académique",
    items: [
      {
        id: 1,
        title: "BUT Informatique (alternance)",
        institution: "Université Sorbonne Paris Nord - IUT de Villetaneuse",
        location: "Villetaneuse, France",
        period: "2023 - 2026",
        description: "Formation pratique en développement logiciel, bases de données, réseaux, systèmes et gestion de projet. SAE (projets universitaires en autonomie) permettant d'appliquer les connaissances théoriques sur des cas concrets. Alternance depuis la 2ème année pour consolider les acquis par la pratique professionnelle.",
        current: true
      },
      {
        id: 2,
        title: "BAC Général - Mention Bien",
        institution: "Lycée privée l'Espérance",
        location: "Aulnay-sous-Bois, France",
        period: "2020 - 2023",
        description: "Spécialité Mathématiques et NSI (Numérique et Sciences Informatiques). Première véritable immersion dans le développement informatique. Projet de terminale : développement d'un jeu vidéo sur 2 mois (Hero Legacy), confirmant ma passion pour l'informatique et mon envie d'en faire mon métier.",
        current: false
      }
    ]
  },

  experience: {
    title: "Expériences Professionnelles",
    description: "Mon parcours professionnel",
    items: [
      {
        id: 1,
        title: "Apprenti Développeur Informatique",
        company: "Allianz",
        location: "Courbevoie, France",
        period: "2024 - Aujourd'hui",
        description: "Développement d'un script permettant d'automatiser certaines étapes de traitements comptables. Maintenance et amélioration d'applications internes. Confrontation aux réalités du monde professionnel et utilisation d'outils et langages non abordés en cours.",
        current: true
      },
      {
        id: 2,
        title: "Stage de 3ème",
        company: "Pharmacie Pasteur",
        location: "Tremblay-en-France, France",
        period: "2020",
        description: "Rangement du stock et réapprovisionnement. Échanges avec les salariés pour découvrir leur métier et comprendre le fonctionnement de l'entreprise.",
        current: false
      }
    ]
  },

  skills: {
    title: "Compétences",
    description: "Mes compétences techniques et comportementales",
    hardSkills: {
      title: "Hard Skills",
      description: "Compétences techniques",
      categories: [
        {
          id: 1,
          name: "Langages de Programmation",
          icon: "💻",
          skills: [
            { name: "Python", level: 85 },
            { name: "JavaScript", level: 80 },
            { name: "Java", level: 75 },
            { name: "TypeScript", level: 65 },
            { name: "VBA", level: 70 },
            { name: "SQL", level: 85 },
            { name: "HTML/CSS", level: 85 }
          ]
        },
        {
          id: 2,
          name: "Frameworks & Bibliothèques",
          icon: "⚛️",
          skills: [
            { name: "React", level: 80 },
            { name: "Next.js", level: 75 },
            { name: "Vite", level: 80 },
            { name: "FastAPI", level: 75 },
            { name: "Django", level: 70 },
            { name: "Flutter", level: 70 }
          ]
        },
        {
          id: 3,
          name: "Outils de Développement",
          icon: "🛠️",
          skills: [
            { name: "Git/GitHub", level: 90 },
            { name: "Visual Studio Code", level: 90 },
            { name: "Docker", level: 70 },
            { name: "GitHub Actions", level: 75 },
            { name: "PostgreSQL", level: 80 }
          ]
        }
      ]
    },
    softSkills: {
      title: "Soft Skills",
      description: "Compétences comportementales",
      skills: [
        {
          id: 1,
          name: "Travail en équipe",
          icon: "🤝",
          description: "Collaboration efficace sur des projets en équipe, SAE et alternance",
          level: 85
        },
        {
          id: 2,
          name: "Résolution de problèmes",
          icon: "🧩",
          description: "Analyse et résolution méthodique de problèmes complexes",
          level: 80
        },
        {
          id: 3,
          name: "Autonomie",
          icon: "🎯",
          description: "Capacité à mener des projets de manière autonome",
          level: 85
        },
        {
          id: 4,
          name: "Adaptabilité",
          icon: "🔄",
          description: "Apprentissage rapide de nouvelles technologies et méthodologies",
          level: 80
        },
        {
          id: 5,
          name: "Communication",
          icon: "💬",
          description: "Communication claire des idées techniques et non-techniques",
          level: 75
        },
        {
          id: 6,
          name: "Curiosité",
          icon: "🔍",
          description: "Veille technologique et apprentissage continu",
          level: 90
        }
      ]
    }
  },

  motivation: {
    title: "Pourquoi l'Informatique ?",
    content: "Depuis mon plus jeune âge, l'informatique a occupé une place importante dans mon quotidien. Comme beaucoup, c'est par le biais des jeux vidéo que j'ai découvert cet univers. Mais très vite, ma curiosité naturelle m'a poussé à aller au-delà de l'utilisation et à comprendre les mécanismes qui se cachent derrière ces programmes interactifs. Ce goût pour la découverte s'est affirmé au fil des années et a orienté progressivement mes choix scolaires et professionnels. En classe de première, j'ai choisi la spécialité NSI, ce qui m'a offert une première véritable immersion dans le développement informatique. En terminale, le projet de jeu vidéo a été une révélation : j'ai pris plaisir à coder, résoudre des problèmes, tester, améliorer. Ce travail personnel a confirmé ma passion pour l'informatique et mon envie d'en faire mon métier.",
    highlights: [
      {
        icon: "🎮",
        title: "Découverte ludique",
        description: "L'univers des jeux vidéo comme porte d'entrée"
      },
      {
        icon: "�",
        title: "Curiosité naturelle",
        description: "Comprendre les mécanismes derrière les programmes"
      },
      {
        icon: "🚀",
        title: "Créativité technique",
        description: "Créer des solutions de A à Z"
      },
      {
        icon: "📈",
        title: "Apprentissage continu",
        description: "Toujours apprendre et relever de nouveaux défis"
      }
    ]
  },

  professionalGoals: {
    title: "Mon Projet Professionnel",
    shortTerm: {
      title: "Court & Moyen Terme",
      goals: [
        "Obtenir le BUT Informatique et poursuivre en école d'ingénieur en alternance",
        "Consolider mon expérience professionnelle chez Allianz",
        "Affiner mon choix de spécialisation entre développement logiciel, cybersécurité et intelligence artificielle",
        "Contribuer à des projets open-source et développer des projets personnels innovants"
      ]
    },
    longTerm: {
      title: "Long Terme",
      goals: [
        "Occuper un poste à fort enjeu technique dans un environnement dynamique et stimulant",
        "Me spécialiser dans un domaine porteur (développement logiciel, cybersécurité ou IA)",
        "Continuer à apprendre et évoluer vers des fonctions à responsabilités",
        "Participer à la création ou au développement d'une start-up dans le domaine du numérique"
      ]
    }
  },

  values: [
    {
      icon: "🤝",
      title: "Travail en équipe",
      description: "La collaboration mène à des solutions plus riches"
    },
    {
      icon: "💪",
      title: "Persévérance",
      description: "Sortir de ma zone de confort pour progresser"
    },
    {
      icon: "🎓",
      title: "Apprentissage continu",
      description: "Toujours chercher à maîtriser de nouvelles technologies"
    },
    {
      icon: "✨",
      title: "Qualité du code",
      description: "Appliquer les bonnes pratiques et la rigueur professionnelle"
    }
  ]
};
