// src/components/Contact.js

import React from 'react';
import '../styles/Contact.css';
import {BroweserRouter, Router, Route} from 'react-router-dom'

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>If you'd like to get in touch, please fill out the form below or reach out via email or social media.</p>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
