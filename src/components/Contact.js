import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xxpjmc6', // Replace with your EmailJS service ID
      'template_zcmj6gp', // Replace with your EmailJS template ID
      form.current,
      'E11RfgqBs9gD9EhzY' // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.log(error.text);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>I'd love to hear from you! Feel free to reach out below or connect with me on LinkedIn.</p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="from_name" placeholder="Your Name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="reply_to" placeholder="Your Email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message" required></textarea>

        <button type="submit">Send</button>
      </form>
      <div className="contact-links">
        <p>Or connect with me:</p>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
