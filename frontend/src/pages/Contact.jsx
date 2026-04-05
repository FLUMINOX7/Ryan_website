import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './Contact.css';

const Contact = () => {
  useDocumentTitle('Contact');
  
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [emailCount, setEmailCount] = useState(() => {
    // Récupérer le nombre d'emails envoyés depuis localStorage
    const count = localStorage.getItem('emailCount');
    const lastReset = localStorage.getItem('emailLastReset');
    const today = new Date().toDateString();
    
    // Réinitialiser le compteur si c'est un nouveau jour
    if (lastReset !== today) {
      localStorage.setItem('emailLastReset', today);
      localStorage.setItem('emailCount', '0');
      return 0;
    }
    
    return parseInt(count) || 0;
  });

  const MAX_EMAILS_PER_DAY = 5;

  const validateForm = () => {
    const errors = {};

    // Validation du nom
    if (!formData.name.trim()) {
      errors.name = 'Le nom est requis';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Le nom doit contenir au moins 2 caractères';
    } else if (formData.name.trim().length > 50) {
      errors.name = 'Le nom ne peut pas dépasser 50 caractères';
    }

    // Validation de l'email
    if (!formData.email.trim()) {
      errors.email = 'L\'email est requis';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = 'L\'email n\'est pas valide';
      }
    }

    // Validation du message
    if (!formData.message.trim()) {
      errors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Le message doit contenir au moins 10 caractères';
    } else if (formData.message.trim().length > 1000) {
      errors.message = 'Le message ne peut pas dépasser 1000 caractères';
    }

    return errors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Effacer l'erreur de validation du champ modifié
    if (validationErrors[e.target.name]) {
      setValidationErrors({
        ...validationErrors,
        [e.target.name]: null
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Vérifier les validations
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Vérifier la limite d'envois
    if (emailCount >= MAX_EMAILS_PER_DAY) {
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: `Vous avez atteint la limite de ${MAX_EMAILS_PER_DAY} emails par jour. Réessayez demain.` 
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });
    setValidationErrors({});

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Email envoyé:', result.text);
      
      // Incrémenter le compteur d'emails
      const newCount = emailCount + 1;
      setEmailCount(newCount);
      localStorage.setItem('emailCount', newCount.toString());
      
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      
      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: null });
      }, 5000);
    } catch (error) {
      console.error('Erreur:', error);
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.' 
      });
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <h2>Contactez-moi</h2>
        <p className="contact-intro">
          Une question ? Un projet ? N'hésitez pas à me contacter !
        </p>

        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              maxLength="50"
              className={validationErrors.name ? 'error' : ''}
            />
            {validationErrors.name && (
              <span className="validation-error">{validationErrors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              className={validationErrors.email ? 'error' : ''}
            />
            {validationErrors.email && (
              <span className="validation-error">{validationErrors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Votre message..."
              maxLength="1000"
              className={validationErrors.message ? 'error' : ''}
            />
            <div className="character-count">
              {formData.message.length}/1000
            </div>
            {validationErrors.message && (
              <span className="validation-error">{validationErrors.message}</span>
            )}
          </div>

          <div className="email-limit-info">
            {emailCount > 0 && (
              <p>
                Emails envoyés aujourd'hui : {emailCount}/{MAX_EMAILS_PER_DAY}
              </p>
            )}
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={status.submitting || emailCount >= MAX_EMAILS_PER_DAY}
          >
            {status.submitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>

          {status.submitted && (
            <div className="success-message">
              ✓ Message envoyé avec succès !
            </div>
          )}

          {status.error && (
            <div className="error-message">
              ✗ {status.error}
            </div>
          )}
        </form>

        <div className="contact-info">
          <p>
            <strong>Email direct :</strong>{' '}
            <a href="mailto:ryanmariapaul7@gmail.com">
              ryanmariapaul7@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
