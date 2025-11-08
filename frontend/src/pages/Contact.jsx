import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Remplacez ces valeurs par vos propres clés EmailJS
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',        // À remplacer
        'YOUR_TEMPLATE_ID',       // À remplacer
        form.current,
        'YOUR_PUBLIC_KEY'         // À remplacer
      );

      console.log('Email envoyé:', result.text);
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
        error: 'Une erreur est survenue. Veuillez réessayer.' 
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
              required
              placeholder="Votre nom"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="votre@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Votre message..."
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={status.submitting}
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
