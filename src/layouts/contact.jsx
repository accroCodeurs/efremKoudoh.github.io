import React, { useState } from "react";
import emailjs from 'emailjs-com';

export function ContactScreen() {
  // États pour gérer l'affichage du message de confirmation et les données du formulaire
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Gestionnaire de soumission du formulaire
  async function handleSubmit(e) {
    e.preventDefault();
    
    try {

      // Récupérer les données du formulaire
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };

      const params = {
        to_name: formData.name,
        to_email: formData.email,
        to_subject: formData.subject,
        message: formData.message,
      };

      // Envoyer le formulaire à votre adresse e-mail
      const result = await emailjs.send('service_l0307ps', 'template_k8m4zc7', params , 'RpzEnjLXfBAiV8Vzc');
      console.log(result.text);

      // Envoyer un e-mail à l'utilisateur
      await sendUserEmail(formData);

      // Marquer le formulaire comme envoyé avec succès
      setSent(true);
    } catch (error) {
      console.error(error.text);
      // Gérer les erreurs ici (affichage d'un message d'erreur, etc.).
    }
  };

  // Fonction pour envoyer un e-mail à l'utilisateur
  const sendUserEmail = async (formData) => {
    try {
      const templateParams = {
        to_email: formData.email, // Adresse e-mail de l'utilisateur
        to_name: formData.name, // Adresse e-mail de l'utilisateur
        from_name: 'Efrem KOUDOH', // Votre nom ou nom de votre entreprise
        message: 'Merci pour votre message ! Nous avons reçu votre demande et nous vous répondrons sous peu.',
      };
  
      const userResult = await emailjs.send('service_l0307ps', 'template_osk1vvu', templateParams, 'RpzEnjLXfBAiV8Vzc');
      console.log(userResult.text);
      // Gérer la confirmation de l'e-mail envoyé à l'utilisateur (peut-être afficher un message à l'utilisateur).
    } catch (error) {
      console.error(error.text);
      // Gérer les erreurs ici (affichage d'un message d'erreur, etc.).
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.</p>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Adresse:</h4>
                <p>4 rue gustave mareau, 49000 Angers, France</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>koudoh.efrem.selinam@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+33 7 58 64 85 34</p>
              </div>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Votre Nom</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Votre Mail</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Object</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="10"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Chargement</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  {sent && <p>Votre message a été bien envoyé. Merci à vous!</p>}
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Envoyer le Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
