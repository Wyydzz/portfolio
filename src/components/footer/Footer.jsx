import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Composant pour les icônes
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Icône LinkedIn
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">
                    Grégory
                </h1>
                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer_link">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer_link">Projects</a>
                    </li>
                </ul>
                <div className="footer_social">
                    <a href="https://www.linkedin.com/in/gregory-henry/" className="footer_social-link" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="nav__icon" />
                    </a>
                </div>
                
                <span className="footer_copy">
                    &#169; GregHenry. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer