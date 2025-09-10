import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import linkedinLogo from '../assets/linkedin-logo.png';
import githubLogo from '../assets/github-logo.png';


function ContactForm() {
  const [state, handleSubmit] = useForm('manbplvq');

  if (state.succeeded) {
    alert("Form submitted successfully!");
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        required
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email" 
        name="email"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

function Contact() {
  // Move page to the top
  const location = useLocation();
    useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <header class="header">
        <div>
          <a href="/" class="logo"> Chaehyeon Kim 👩🏻‍💻 </a>  
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Feel free to leave me a message here 💬📧</h2>
        <div className="container">
          <h2>Contact Me</h2>
          <ContactForm />
          <br/>
          <br/>
        </div>
      </main>
      <footer>
        <p>© 2025 Chaehyeon Kim</p>
        <a href="https://www.linkedin.com/in/chkim888/" target="_blank" rel="noopener noreferrer">
          <div className="link-button">
            <img src={linkedinLogo} alt="LinkedIn Icon" />
          </div>
        </a>
        <a href="https://github.com/chkim888" target="_blank" rel="noopener noreferrer">
          <div className="link-button">
            <img src={githubLogo} alt="GitHub Icon" />
          </div>
        </a>
      </footer>
    </div>
  );
}

export default Contact;
