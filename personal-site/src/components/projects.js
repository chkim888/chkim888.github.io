import { React, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import linkedinLogo from '../assets/linkedin-logo.png';
import githubLogo from '../assets/github-logo.png';

function Projects() {
    // Move page to the top
      const location = useLocation();
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);
    return (
    <>
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
            <h1>Projects</h1>
            <h4 style={{color: '#7276ba'}}><em>A highlight of the few of the projects I have worked on over the years.</em></h4>
            <div class="grid-container">
                <div class="grid-item project1">
                    <h3 class="project-name">chkim888.github.io</h3>
                    <p class="description">This website</p>
                    <a href="https://github.com/chkim888/chkim888.github.io" class="project-link" target="_blank">Source</a>
                </div>
                <div class="grid-item project2">
                    <h3 class="project-name">Language Interpreter</h3>
                    <p class="description">Racket interpreter for a Java/C-like language</p>
                    <a href="https://github.com/chkim888/Programming_Language_Concepts/tree/main/Interpreters" class="project-link" target="_blank">Source</a>
                </div>
                <div class="grid-item project3">
                    <h3 class="project-name">Maritime AIS Predictor</h3>
                    <p class="description">ML clustering algorithm to predict vessel movement</p>
                    <a href="https://github.com/chkim888/Intro_to_ML/tree/main/Case_Study_2" class="project-link" target="_blank">Source</a>
                </div>
                <div class="grid-item project4">
                    <h3 class="project-name">Artifacts of the Past</h3>
                    <p class="description">A 2D platformer where you navigate obstacles</p>
                    <a href="https://github.com/chkim888/Artifacts-of-the-Past" class="project-link" target="_blank">Source</a>
                </div>
                {/* <div class="grid-item">
                    <h3 class="project-name">AI Agent Hostility Simulator</h3>
                    <p class="description">Multi-agent simulation to violence depending on resource availability</p>
                    <a href="https://example.com/project1" class="project-link" target="_blank">Source</a>
                </div> */}
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
    </>
  );
}

export default Projects;