import React from 'react';
import "../Css/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-text">Have questions about our watch? Reach out to us!</p>
      <form className="contact-form">
        <label className="contact-label">
          Name:
          <input type="text" name="name" className="contact-input" />
        </label>
        <label className="contact-label">
          Email:
          <input type="email" name="email" className="contact-input" />
        </label>
        <label className="contact-label">
          Message:
          <textarea name="message" className="contact-textarea" />
        </label>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
