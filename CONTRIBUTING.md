# Convention Git - Ryan Website

## 🌿 Branches

### Branches principales
- `main` - Version de production (code stable)
- `develop` - Branche de développement (intégration)

### Branches de fonctionnalités
Créer depuis `develop`, merger vers `develop`

**Format :** `feature/nom-descriptif`

**Exemples :**
```bash
feature/about-section
feature/projects-gallery
feature/contact-form
feature/navbar-responsive
```

### Branches de correction
**Format :** `fix/description-bug`

**Exemples :**
```bash
fix/mobile-menu-overflow
fix/image-loading-error
fix/form-validation
```

### Autres types
- `refactor/description` - Refactoring de code
- `style/description` - Modifications CSS/UI uniquement
- `docs/description` - Documentation
- `test/description` - Ajout/modification de tests
- `chore/description` - Maintenance, configuration

## 📝 Commits

### Format
```
type(scope): description courte

[corps optionnel]

[footer optionnel]
```

### Types
- `feat` - Nouvelle fonctionnalité
- `fix` - Correction de bug
- `style` - Changements CSS/UI (pas de logique)
- `refactor` - Refactoring (ni feat ni fix)
- `perf` - Amélioration de performance
- `test` - Ajout/modification de tests
- `docs` - Documentation
- `build` - Build system (webpack, vite, etc.)
- `ci` - Intégration continue
- `chore` - Maintenance, dépendances

### Scopes (exemples)
- `frontend` - Code frontend
- `backend` - Code backend
- `about` - Page À propos
- `projects` - Page Projets
- `navbar` - Navigation
- `footer` - Footer
- `api` - API backend

### Exemples de commits

**Fonctionnalité :**
```bash
feat(about): add professional journey section
feat(projects): create project card component
feat(contact): implement contact form with validation
```

**Correction :**
```bash
fix(navbar): correct mobile menu toggle behavior
fix(footer): align social media icons properly
fix(projects): resolve image loading issue
```

**Style :**
```bash
style(navbar): improve responsive design for tablets
style(home): update hero section colors
```

**Refactoring :**
```bash
refactor(projects): extract project card to separate component
refactor(utils): optimize data fetching functions
```

**Documentation :**
```bash
docs(readme): add installation instructions
docs(api): document API endpoints
```

**Maintenance :**
```bash
chore(deps): update React to v18.3.0
chore(config): configure ESLint rules
```

## 🔄 Workflow

### 1. Créer une branche
```bash
# Depuis develop
git checkout develop
git pull origin develop
git checkout -b feature/ma-fonctionnalite
```

### 2. Développer et commiter
```bash
# Faire des modifications
git add .
git commit -m "feat(scope): description"

# Commits multiples possibles
git commit -m "style(scope): improve UI"
```

### 3. Pousser la branche
```bash
git push origin feature/ma-fonctionnalite
```

### 4. Créer une Pull Request (PR)
- Sur GitHub : `feature/ma-fonctionnalite` → `develop`
- Décrire les changements
- Demander une review si nécessaire

### 5. Merger
```bash
# Si pas de conflit, merger sur GitHub
# OU en local :
git checkout develop
git merge feature/ma-fonctionnalite
git push origin develop

# Supprimer la branche
git branch -d feature/ma-fonctionnalite
git push origin --delete feature/ma-fonctionnalite
```

### 6. Release (de develop vers main)
```bash
# Quand develop est stable
git checkout main
git merge develop
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main --tags
```

## ✅ Bonnes pratiques

1. **Commits atomiques** - Un commit = une modification logique
2. **Messages clairs** - Décrire le "quoi" et le "pourquoi"
3. **Branches courtes** - Merger régulièrement pour éviter les gros conflits
4. **Revue de code** - Faire relire les PR importantes
5. **Tests avant merge** - Vérifier que tout fonctionne
6. **Historique propre** - Ne pas commiter node_modules, .env, etc.

## 🚫 À éviter

- ❌ Commits vagues : `fix bug`, `update`, `changes`
- ❌ Commits trop gros : modifier 20 fichiers différents
- ❌ Commiter directement sur `main`
- ❌ Laisser des branches non mergées longtemps
- ❌ Commiter des fichiers sensibles (.env, clés API)
