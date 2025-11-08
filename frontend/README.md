# Frontend - Portfolio Ryan

## 🚀 Technologies

- **React** - Bibliothèque UI
- **Vite** - Build tool et dev server
- **CSS3** - Styles avec variables CSS

## 📁 Structure du projet

```
frontend/
├── public/                 # Fichiers statiques
│   └── assets/
│       ├── images/        # Images du site
│       └── documents/     # CV et autres documents
├── src/
│   ├── components/        # Composants React
│   │   ├── common/       # Composants réutilisables
│   │   ├── layout/       # Header, Footer, Navigation
│   │   └── sections/     # Sections spécifiques
│   ├── pages/            # Pages principales
│   ├── data/             # Données statiques (projets, parcours, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── styles/           # Styles globaux et variables
│   ├── utils/            # Fonctions utilitaires
│   ├── App.jsx           # Composant principal
│   └── main.jsx          # Point d'entrée
└── package.json
```

## 🛠️ Installation

```bash
cd frontend
npm install
```

## 🚀 Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 📦 Build

```bash
npm run build
```

Les fichiers de production seront dans le dossier `dist/`

## 🎨 Personnalisation

### Couleurs et variables
Modifiez `src/styles/variables.css` pour personnaliser les couleurs, espacements, etc.

### Données
- **Projets** : `src/data/projects.js`
- **Parcours** : `src/data/experience.js`
- **Passions** : `src/data/passions.js`

## 📝 Convention de code

- Composants en PascalCase (ex: `Header.jsx`)
- Fichiers de données en camelCase (ex: `projects.js`)
- Classes CSS en kebab-case (ex: `.nav-links`)

