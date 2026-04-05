// Données des projets personnels
export const projects = [
  {
    id: 1,
    title: 'V-lib - Application Multi-plateforme Vélib\'',
    shortDescription: 'Plateforme complète de réservation de vélos en libre-service (Web + Mobile)',
    fullDescription: 'V-lib est un projet universitaire d\'envergure développé en 2ème année de BUT Informatique dans le cadre d\'une SAE (Situation d\'Apprentissage et d\'Évaluation). Ce projet ambitieux, réalisé en équipe de 5 étudiants, consiste en une application multi-plateforme complète de gestion et réservation de stations Vélib\'. Le système comprend trois composantes majeures : un backend robuste développé avec Django et PostgreSQL, une application web moderne en Next.js/React, et une application mobile native avec Flutter, toutes trois communiquant via une API REST sécurisée. Le backend implémente un système d\'authentification complet avec chiffrement RSA et HMAC, une gestion des utilisateurs avec vérification d\'email, et une synchronisation en temps réel avec l\'API officielle Vélib\' pour afficher les disponibilités des stations. L\'application offre de nombreuses fonctionnalités : recherche géolocalisée de stations, affichage sur carte interactive, réservation de vélos, gestion des favoris, historique des réservations, calcul d\'itinéraires vers les stations, et un système complet de compte utilisateur. Ce projet m\'a permis de découvrir la complexité du développement full-stack avec l\'intégration de multiples technologies (frontend, backend, mobile, base de données). Nous avons appliqué des méthodes professionnelles de développement : intégration continue avec GitHub Actions, gestion de projet avec GitHub Projects, documentation technique complète (README détaillés, diagrammes UML), containerisation avec Docker, et tests automatisés. Cette expérience collaborative m\'a enseigné l\'importance de la communication en équipe, de l\'architecture logicielle, de la sécurité des données, et de la gestion de projet agile. Le déploiement d\'une application complète de A à Z, de la conception de la base de données jusqu\'à l\'interface utilisateur mobile, a été un défi enrichissant qui m\'a donné une vision globale du développement moderne.',
    technologies: ['Django', 'Python', 'Next.js', 'React', 'TypeScript', 'Flutter', 'Dart', 'PostgreSQL', 'Docker', 'API REST', 'GitHub Actions', 'Tailwind CSS'],
    github: 'https://github.com/NoWauu/V-lib',
    demo: null,
    image: '/assets/images/vlib_cover.png',
    coverImage: '/assets/images/vlib_cover.png',
    detailImages: ['/assets/images/vlib_detail1.webp', '/assets/images/vlib_detail2.webp'],
    date: '2024-05-15',
    status: 'terminé'
  },
  {
    id: 2,
    title: 'Hero Legacy - Mon Premier Jeu Vidéo',
    shortDescription: 'Jeu d\'aventure 2D en Python développé en Terminale',
    fullDescription: 'Hero Legacy est mon tout premier jeu vidéo, développé en classe de Terminale au lycée. Il s\'agit d\'un jeu d\'aventure 2D créé avec Python et Pygame, combinant exploration de carte et combats dynamiques. Le jeu propose un mode aventure avec une carte explorable, des PNJ interactifs, un système de dialogues, et des quêtes à accomplir. Initialement conçu avec 6 niveaux de combat pour le rendu scolaire, j\'ai ensuite continué le développement par passion en ajoutant un mode multijoueur local à 2 joueurs, 4 niveaux supplémentaires, et en agrandissant considérablement la carte du jeu. Chaque niveau de combat met en scène des personnages issus de différents univers (Yu-Gi-Oh!, Pokémon, Ninjago, Mario, Sonic, Kung Fu Panda) avec des mécaniques de jeu uniques : système de projectiles variés, attaques spéciales, barres de vie, événements aléatoires de chute d\'obstacles. Ce projet m\'a permis de maîtriser la programmation orientée objet, la gestion des collisions, l\'animation de sprites, et la création d\'une expérience de jeu complète.',
    technologies: ['Python', 'Pygame', 'Pytmx', 'Pyscroll'],
    github: 'https://github.com/FLUMINOX7/Hero_Legacy',
    demo: null,
    image: '/assets/images/hero_legacy_cover.png',
    coverImage: '/assets/images/hero_legacy_cover.png',
    detailImages: ['/assets/images/hero_legacy_detail1.png', '/assets/images/hero_legacy_detail2.png'],
    date: '2022-06-15',
    status: 'terminé'
  },
  {
    id: 3,
    title: 'YGO - Mon Premier Site Web',
    shortDescription: 'Site web interactif sur l\'univers Yu-Gi-Oh! réalisé au lycée',
    fullDescription: 'Ce projet représente mon tout premier site web, développé en classe de Première au lycée. Il s\'agit d\'un site dédié à l\'univers Yu-Gi-Oh!, présentant les différentes séries de l\'anime (ZEXAL, ARC-V, VRAINS, SEVENS) avec leurs personnages principaux. Le site contient plusieurs pages interactives avec des effets au survol de la souris, des changements d\'images dynamiques, et des animations CSS. Ce projet fondateur m\'a permis de découvrir les bases du développement web et a été le point de départ de ma passion pour la programmation. Chaque page est dédiée à une série différente avec des informations détaillées sur les protagonistes et leurs cartes emblématiques.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/FLUMINOX7/YGO',
    demo: 'https://fluminox7.github.io/YGO/',
    image: '/assets/images/ygo_cover.png',
    coverImage: '/assets/images/ygo_cover.png',
    detailImage: '/assets/images/ygo_detail.png',
    date: '2020-06-15',
    status: 'terminé'
  },
  {
    id: 4,
    title: "Premier Portfolio (Magic Portfolio)",
    shortDescription: "Portfolio développé en 2ème année de BUT à partir d'un template open source",
    fullDescription: "Ce projet de portfolio a été réalisé en 2ème année de BUT Informatique dans le cadre d'une SAE (Situation d'Apprentissage et d'Évaluation). Il est basé sur le template open source 'Magic Portfolio' créé par Once UI. Ce projet m'a fait découvrir le monde de l'open source et m'a appris qu'il est possible de s'appuyer sur des solutions existantes plutôt que de tout développer à partir de zéro.\n\nLe template initial utilise Next.js, Once UI (un système de design React), et permet de créer un portfolio professionnel avec plusieurs sections : page d'accueil, projets, blog, galerie, et page à propos. Il intègre la génération automatique d'images open graph, la gestion de métadonnées SEO, et propose un système de contenu basé sur des fichiers MDX pour faciliter la création et la modification de projets et articles.\n\nJ'ai personnalisé ce template pour refléter mon identité et mes projets, en adaptant le contenu, les couleurs, et la structure. Cette expérience m'a permis de comprendre l'architecture d'une application Next.js moderne, de travailler avec des composants React avancés, et surtout de découvrir la philosophie de l'open source : réutiliser, adapter et améliorer des solutions existantes pour gagner en efficacité.\n\nLe portfolio est déployé sur Vercel et accessible publiquement. Il présente mes projets universitaires (V-lib, Hero Legacy) avec des descriptions détaillées et des illustrations, ainsi qu'une page à propos complète avec mon parcours, mes compétences techniques, et mes expériences professionnelles.\n\nCe projet m'a enseigné une leçon importante : il n'est pas toujours nécessaire de réinventer la roue. En informatique, savoir identifier et utiliser des outils ou templates open source de qualité est une compétence précieuse qui permet de se concentrer sur la valeur ajoutée plutôt que sur des tâches répétitives.",
    technologies: ["Next.js", "React", "TypeScript", "Once UI", "MDX", "Vercel", "Open Source"],
    github: "https://github.com/FLUMINOX7/portfolio",
    demo: "https://portfolio-six-orcin-77.vercel.app/",
    image: '/assets/images/portfolio_magic.svg',
    coverImage: '/assets/images/portfolio_magic_detail.png',
    detailImage: '/assets/images/portfolio_magic_detail.png',
    date: "2025-07-15",
    status: "terminé"
  },
  {
    id: 6,
    title: "EcomNova - Plateforme E-commerce Complète",
    shortDescription: "Site e-commerce full-stack développé avec les meilleures pratiques de qualité logicielle",
    fullDescription: "EcomNova est un projet e-commerce complet développé en 3ème année de BUT Informatique dans le cadre du cours de Qualité et Développement logiciel. Ce projet se distingue par l'application rigoureuse de toutes les méthodologies professionnelles de développement de qualité.\n\nLe projet est parti d'un code de base très léger fourni par l'enseignant, que j'ai dû compléter et transformer en une application e-commerce complète et fonctionnelle. L'application comprend un backend robuste développé avec FastAPI et PostgreSQL, et un frontend moderne créé avec React 19 et Vite 7. Le système offre toutes les fonctionnalités d'une plateforme e-commerce : authentification JWT sécurisée, catalogue de produits avec recherche avancée et filtres, gestion de panier dynamique en temps réel, système de commandes complet, interface d'administration pour la gestion des produits et des commandes, et statistiques en temps réel.\n\nCe qui rend ce projet particulièrement formateur, c'est l'accent mis sur la qualité du développement et les bonnes pratiques professionnelles. Le projet suit le cycle en V avec une documentation complète comprenant cahier des charges, spécifications fonctionnelles générales (SFG), spécifications fonctionnelles détaillées (SFD), et spécifications techniques (ST). Le développement a été réalisé en utilisant Git de manière professionnelle : une branche par fonctionnalité, messages de commit conventionnels et descriptifs, pull requests systématiques avec revue de code avant fusion, et GitFlow pour la gestion des branches.\n\nL'intégration continue et le déploiement continu (CI/CD) ont été mis en place avec GitHub Actions : tests automatiques sur Python 3.11 et 3.12, analyse de qualité du code avec ruff, black et isort, vérification à chaque push et pull request, et badges de statut en temps réel. Le projet inclut une suite de tests complète couvrant les fonctionnalités critiques avec pytest pour le backend et Vitest pour le frontend. La gestion de projet a été organisée avec un tableau GitHub Projects pour le suivi des tâches et la planification des sprints.\n\nL'architecture technique suit une structure moderne et modulaire : architecture en couches (Domain, Repository, Service, API), séparation claire des responsabilités, utilisation de Docker Compose pour l'orchestration, API REST complète avec documentation Swagger interactive, et validation stricte des données avec Pydantic. Le frontend implémente un design moderne avec glassmorphism et animations CSS, une navigation fluide avec React Router 7, et une gestion d'état avec Context API.\n\nCe projet m'a permis de comprendre l'importance de la qualité logicielle dans le développement professionnel : documentation technique rigoureuse, tests automatisés et couverture de code, intégration continue et déploiement automatisé, revue de code et collaboration en équipe, respect des standards et conventions, et maintenabilité à long terme. L'expérience acquise sur EcomNova reflète les attentes du monde professionnel et constitue une base solide pour ma future carrière de développeur.",
    technologies: ["FastAPI", "Python", "React", "Vite", "PostgreSQL", "SQLAlchemy", "Docker", "GitHub Actions", "JWT", "Pydantic", "pytest", "Vitest"],
    github: "https://github.com/FLUMINOX7/EcomNova_qualite_dev",
    demo: null,
    image: '/assets/images/ecomnova_project.svg',
    coverImage: '/assets/images/ecomnova_detail1.png',
    detailImages: [
      '/assets/images/ecomnova_detail1.png',
      '/assets/images/ecomnova_detail2.png',
      '/assets/images/ecomnova_detail3.png',
      '/assets/images/ecomnova_detail4.png',
      '/assets/images/ecomnova_detail5.png'
    ],
    date: "2025-11-05",
    status: "terminé"
  },
  {
    id: 7,
    title: "Kao AI - Analyse Faciale IA",
    shortDescription: "Application Android et pipeline IA pour prédire âge, genre et ethnicité à partir d'un visage",
    fullDescription: "Kao AI est un projet de BUT3 que je viens de finaliser, conçu comme une chaîne IA complète allant du traitement de données jusqu'au déploiement mobile. Le projet s'appuie sur le dataset UTKFace pour entraîner des modèles capables de prédire l'âge (régression), le genre (classification) et l'ethnicité (classification) à partir d'images de visages.\n\nL'architecture est organisée en deux volets complémentaires : une application Android en Kotlin pour l'inférence sur mobile, et un backend Python pour la préparation des données, l'entraînement, l'évaluation et l'export des modèles. Les modèles sont convertis en TensorFlow Lite pour être intégrés dans l'application mobile.\n\nCe projet m'a permis de consolider des compétences en machine learning appliqué, en déploiement embarqué, et en développement mobile, tout en travaillant avec une structure de projet claire incluant code, notebooks et livrables de soutenance.",
    technologies: ["Python", "TensorFlow", "Keras", "Jupyter Notebook", "Kotlin", "Android", "TensorFlow Lite", "Firebase", "Gradle"],
    github: "https://github.com/FLUMINOX7/SAE_AI",
    demo: null,
    image: '/assets/images/kaoai_detail1.webp',
    coverImage: '/assets/images/kaoai_cover.png',
    detailImages: [
      '/assets/images/kaoai_detail1.webp',
      '/assets/images/kaoai_detail2.webp',
      '/assets/images/kaoai_detail3.webp',
      '/assets/images/kaoai_detail4.webp'
    ],
    date: "2026-04-05",
    status: "terminé"
  },
  {
    id: 5,
    title: "Portfolio Personnel",
    shortDescription: "Portfolio moderne développé de zéro avec React et Vite",
    fullDescription: "Ce portfolio personnel est mon projet actuel, développé entièrement de zéro avec React et Vite pour présenter mes projets, compétences et parcours professionnel. Contrairement au premier portfolio basé sur un template, celui-ci a été conçu et codé intégralement par mes soins, me permettant d'avoir un contrôle total sur l'architecture et le design.\n\nLe site est entièrement responsive et s'adapte à tous les types d'écrans (mobile, tablette, desktop). Il intègre plusieurs fonctionnalités modernes : un mode sombre/clair avec système de thème personnalisable, un formulaire de contact fonctionnel via EmailJS permettant aux visiteurs de me contacter directement sans backend, une navigation fluide entre les différentes sections (Accueil, À propos, Projets, Passions, Contact), et des animations CSS subtiles pour améliorer l'expérience utilisateur.\n\nL'architecture du projet suit une organisation modulaire claire : composants réutilisables, gestion des données centralisée dans des fichiers dédiés, routage avec React Router pour une navigation SPA fluide, et styles CSS modernes avec variables CSS pour la gestion des thèmes. Le site présente tous mes projets universitaires et personnels avec des descriptions détaillées, mes passions et hobbies avec des liens vers mes profils (Chess.com, FIDE), et mon parcours académique et professionnel.\n\nCe projet me permet de mettre en pratique mes compétences en développement front-end moderne tout en ayant une vitrine professionnelle personnalisée pour mes travaux. Il représente ma progression en tant que développeur et ma capacité à créer une application web complète et soignée de A à Z.",
    technologies: ["React", "Vite", "React Router", "EmailJS", "CSS3"],
    github: "https://github.com/FLUMINOX7/Ryan_website",
    demo: null,
    image: '/assets/images/portfolio_personnel.svg',
    coverImage: '/assets/images/portfolio_detail.png',
    detailImage: '/assets/images/portfolio_detail.png',
    date: "2025-11-10",
    status: "en-cours"
  },
  {
    id: 8,
    title: "OtoRank - Application de Musique",
    shortDescription: "Application musicale Flutter multi-plateforme construite avec une Clean Architecture",
    fullDescription: "OtoRank est une application de musique en cours de développement, conçue avec Flutter pour cibler Android, iOS et le Web. Le projet est structuré avec une Clean Architecture et une organisation Feature-First afin de garantir une base de code maintenable, testable et évolutive.\n\nL'architecture sépare clairement les couches Presentation, Domain et Data, avec des patterns comme Repository et l'injection de dépendances via GetIt. La gestion d'état est portée par BLoC, et le projet intègre des briques utiles pour une app musicale moderne : lecture audio, gestion des permissions, sélection de fichiers, stockage local, et tests automatisés.\n\nLe dépôt contient également une documentation technique détaillée (architecture, conventions, workflow Git/commits) qui reflète une approche professionnelle du développement logiciel.",
    technologies: ["Flutter", "Dart", "BLoC", "Clean Architecture", "GetIt", "Dartz", "Equatable", "Hive", "Shared Preferences", "just_audio", "audio_service", "permission_handler", "file_picker"],
    github: "https://github.com/FLUMINOX7/OtoRank",
    demo: null,
    date: "2026-04-05",
    status: "en-cours"
  }
];

