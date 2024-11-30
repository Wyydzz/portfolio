import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <FontAwesomeIcon icon={faSuitcase} className="about__icon"/>
            <h3 className="about__title">
                Education
            </h3>
            <span className="about__subtitle">Bachelor in Computer Science and Systems</span>
        </div>
        <div className="about__box">
        <FontAwesomeIcon icon={faCogs} className="about__icon"/>
            <h3 className="about__title">
                Interests
            </h3>
            <span className="about__subtitle">Sotware Engineering & System Integration</span>
        </div>
        <div className="about__box">
        <FontAwesomeIcon icon={faMusic} className="about__icon" />
            <h3 className="about__title">
                    Hobbies 
            </h3>
            <span className="about__subtitle">Practicing Guitar, Piano, Lindy Hop and Solo Jazz</span>
        </div>
    </div>
  )
}

export default Info