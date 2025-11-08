# Configuration EmailJS

## 📧 Étapes pour configurer EmailJS

### 1. Créer un compte EmailJS
- Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
- Inscrivez-vous gratuitement

### 2. Créer un service email
- Allez dans "Email Services"
- Cliquez sur "Add New Service"
- Choisissez votre fournisseur d'email (Gmail recommandé)
- Connectez votre compte **ryanmariapaul7@gmail.com**
- Notez le **Service ID**

### 3. Créer un template d'email
- Allez dans "Email Templates"
- Cliquez sur "Create New Template"
- Utilisez ce template :

```
Sujet : Nouveau message de {{name}}

Corps :
De: {{name}}
Email: {{email}}

Message:
{{message}}
```

- Notez le **Template ID**

### 4. Obtenir votre clé publique
- Allez dans "Account" → "General"
- Copiez votre **Public Key**

### 5. Mettre à jour le code
Dans `frontend/src/pages/Contact.jsx`, remplacez :
- `YOUR_SERVICE_ID` par votre Service ID
- `YOUR_TEMPLATE_ID` par votre Template ID  
- `YOUR_PUBLIC_KEY` par votre Public Key

## 🔐 Alternative : Variables d'environnement

Pour plus de sécurité, créez un fichier `.env` :

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Puis utilisez dans le code :
```javascript
emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
```

N'oubliez pas d'ajouter `.env` dans le `.gitignore` !
