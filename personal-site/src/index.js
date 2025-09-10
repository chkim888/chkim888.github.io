import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
// Subpages
import App from './App';
import Resume from './components/resume.js';
import Contact from './components/contact.js';
import Projects from './components/projects.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
