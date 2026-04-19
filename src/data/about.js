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
        description: "Formation complète orientée pratique, avec une montée en compétences progressive en développement logiciel, bases de données, réseaux, systèmes et gestion de projet.\n\nLes SAE (Situation d'Apprentissage et d'Évaluation) sont des projets universitaires qui nous permettent de mettre en pratique les notions vues en cours sur des cas concrets, en autonomie comme en équipe.\n\nÀ partir de la 2e année, j'ai également pu faire une alternance, ce qui m'a permis de découvrir le monde professionnel, d'appliquer mes connaissances dans un contexte réel et de renforcer ma rigueur technique au quotidien.",
        current: true
      },
      {
        id: 2,
        title: "BAC Général - Mention Bien",
        institution: "Lycée privée l'Espérance",
        location: "Aulnay-sous-Bois, France",
        period: "2020 - 2023",
        description: "Spécialités Mathématiques et NSI (Numérique et Sciences Informatiques), avec une première immersion solide dans les fondamentaux de l'algorithmique et du développement.\n\nLe projet de terminale consistait en la réalisation d'un jeu python en POO (Programmation Orientée Objet). Un fois le rendu effectué, j'ai continué à l'améliorer de mon côté, ce qui m'a permis d'aller plus loin dans sa conception et dans sa réalisation.\nCe projet a été le véritable déclic qui m'a donné envie de continuer dans l'informatique et de m'y investir sérieusement.",
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
        period: "2024 - 2026",
        description: "Je travaille au sein d'une direction comptable, dans un environnement Agile où la méthode SCRUM structure l'organisation du travail et le suivi des tâches.\n\n Mes principales missions consistent en :\n - Développement de programmes d'automatisation en Python et Batch pour optimiser des processus internes.\n - Maintenance et évolution d'outils comptables existants, notamment des macros VBA et des programmes SAS.\n - Collaboration avec plusieurs directions métier et intégration de leurs besoins dans des outils automatisés adaptés aux usages du service.",
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
          skills: [
            { name: "Python", level: 85 },
            { name: "JavaScript", level: 80 },
            { name: "Java", level: 75 },
            { name: "TypeScript", level: 65 },
            { name: "PHP", level: 65 },
            { name: "Kotlin", level: 60 },
            { name: "VBA", level: 70 },
            { name: "SQL", level: 85 },
            { name: "Bash", level: 75 },
            { name: "Batch", level: 80 },
            { name: "HTML/CSS", level: 85 }
          ]
        },
        {
          id: 2,
          name: "Frameworks & Bibliothèques",
          skills: [
            { name: "React", level: 80 },
            { name: "Next.js", level: 75 },
            { name: "Vite", level: 80 },
            { name: "FastAPI", level: 75 },
            { name: "Django", level: 70 },
            { name: "Flutter", level: 70 },
            { name: "Pandas", level: 80 },
            { name: "PySpark", level: 65 },
            { name: "TensorFlow", level: 60 },
            { name: "Keras", level: 60 }
          ]
        },
        {
          id: 3,
          name: "Environnements & Outils",
          skills: [
            { name: "Git/GitHub", level: 90 },
            { name: "Visual Studio Code", level: 90 },
            { name: "Docker", level: 70 },
            { name: "GitHub Actions", level: 75 },
            { name: "Jenkins", level: 75 },
            { name: "PostgreSQL", level: 80 },
            { name: "Android Studio", level: 70 },
            { name: "Jupyter Notebook", level: 85 },
            { name: "Linux", level: 75 }
          ]
        },
        {
          id: 4,
          name: "Gestion de Projet & Méthodes",
          skills: [
            { name: "GitHub Projects", level: 85 },
            { name: "Jira", level: 75 },
            { name: "Microsoft Planner", level: 80 },
            { name: "Trello", level: 85 },
            { name: "Shortcut", level: 70 },
            { name: "SCRUM", level: 80 },
            { name: "Agile", level: 80 }
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
    content: "L'informatique m'a toujours attiré parce qu'elle permet de transformer une idée en quelque chose de concret, utile et évolutif. J'ai commencé par m'intéresser aux jeux vidéo, puis très vite j'ai eu envie de comprendre comment les programmes étaient construits et comment les améliorer.\n\nAvec le BUT Informatique, j'ai découvert l'étendue du domaine: développement web, développement mobile, bases de données, plusieurs langages et méthodes de travail. Cette formation m'a permis de passer d'une vision assez large à une vraie compréhension des différents métiers et des différents usages de l'informatique.\n\nL'alternance a confirmé ma passion en me confrontant à des besoins réels. J'ai pu optimiser des processus et automatiser des tâches répétitives pour faire gagner du temps à d'autres équipes, ce qui m'a montré concrètement l'impact que peut avoir le développement dans une organisation.",
  },

  professionalGoals: {
    title: "Mon Projet Professionnel",
    shortTerm: {
      title: "Court & Moyen Terme",
      goals: [
        "Terminer mon BUT Informatique en consolidant mes acquis techniques et méthodologiques",
        "Approfondir mes compétences en data et en intelligence artificielle",
        "Continuer à progresser chez Allianz en développant des outils utiles au quotidien",
        "Poursuivre des projets personnels pour continuer à apprendre et à expérimenter"
      ]
    },
    longTerm: {
      title: "Long Terme",
      goals: [
        "Obtenir mon titre d'ingénieur en poursuivant une spécialisation en data et IA",
        "Contribuer à des projets significatifs qui ont un impact concret dans le futur",
        "Évoluer vers un poste où je peux combiner logique, qualité de code et analyse des données",
        "Continuer à apprendre dans un environnement technique exigeant et collaboratif"
      ]
    }
  },

};
