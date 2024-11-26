import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <FontAwesomeIcon icon={faSuitcase} className="about__icon"/>
            <h3 className="about__title">
            
                Experience
            </h3>
            <span className="about__subtitle">Freshly gratuated</span>
        </div>
        <div className="about__box">
        <FontAwesomeIcon icon={faSuitcase} className="about__icon"/>
            <h3 className="about__title">
                Availability
            </h3>
            <span className="about__subtitle">48 projets</span>
        </div>
        <div className="about__box">
        <FontAwesomeIcon icon={faSuitcase} className="about__icon"/>
            <h3 className="about__title">
                    Why IT? 
            </h3>
            <span className="about__subtitle">Well, why not?</span>
        </div>
    </div>
  )
}

export default Info