import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Composant pour les icônes
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Icône LinkedIn


const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.linkedin.com/in/gregory-henry/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faLinkedin} className="nav__icon" /> 
        </a>
     
    </div>
  )
}

export default Social