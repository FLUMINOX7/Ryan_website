# Ryan Website - Portfolio Personnel

Portfolio personnel présentant mon parcours, mes passions et mes projets informatiques.

## 📁 Structure du projet

```
Ryan_website/
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   ├── hooks/
│   └── styles/
├── public/
│   └── assets/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Technologies

- React 19
- Vite
- React Router
- CSS3
- EmailJS

## 🛠️ Installation et développement

```bash
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:5173`.

### Build local

```bash
npm run build
npm run preview
```

## ☁️ Déploiement

### Vercel

Configuration recommandée :

- Root Directory: `.`
- Build Command: `npm run build`
- Output Directory: `dist`

Le site est ensuite déployé automatiquement à chaque push sur la branche connectée à Vercel.

### GitHub Pages

Possible aussi, mais moins pratique pour une SPA React/Vite avec routing client.

## 🌿 Workflow Git

### Branches principales
- `main` - Version production
- `develop` - Version de développement

### Convention de branches
- `feature/nom-fonctionnalite` - Nouvelles fonctionnalités
- `fix/description-bug` - Corrections de bugs
- `refactor/description` - Refactoring
- `style/description` - Modifications CSS/UI
- `docs/description` - Documentation

### Convention de commits
Format : `type(scope): description`

Exemples :
- `feat(projects): add project gallery`
- `fix(footer): update social links`
- `docs(readme): update deployment instructions`

## 📝 Sections du site

- **Accueil** - Présentation générale
- **À propos** - Parcours professionnel et académique
- **Passions** - Centres d'intérêt et hobbies
- **Projets** - Portfolio de projets personnels
- **Contact** - Formulaire de contact

## 📄 Licence

© 2026 Ryan. Tous droits réservés.
