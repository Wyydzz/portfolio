import React from 'react';
import sorter1 from '../../assets/assets/sorter1.jpg';
import techno1 from '../../assets/assets/techno1.png';
import apizsso from '../../assets/assets/apiz-sso.png';

import OpenInNewTwoToneIcon from '@mui/icons-material/OpenInNewTwoTone';

const Items = () => {
    return (
        <div className="projects__container container grid">
            {/* Project 1 */}
            <div className="projects__item">
                <img src={techno1} alt="Project 1" className="projects__img" />
                <div className="projects__overlay">
                    <h3 className="projects__title">Project 1</h3>
                    <p className="projects__description">Secure Remote Control and Data Management of a PLC Using MQTT and VPN Integration</p>
                    <a href="/project1-details" className="projects__see-more">
                    <OpenInNewTwoToneIcon className="icon"/></a>
                </div>
            </div>

            {/* Project 2 */}
            <div className="projects__item">
                <img src={sorter1} alt="Project 2" className="projects__img" />
                <div className="projects__overlay">
                    <h3 className="projects__title">Project 2</h3>
                    <p className="projects__description">Color Sorter Device with a Mobile App that Allows Remote Control</p>
                    <a href="/project2-details" className="projects__see-more">
                    <OpenInNewTwoToneIcon className="icon"/></a>
                </div>
            </div>

            {/* Project 3 */}
            <div className="projects__item">
                <img src={apizsso} alt="Project 3" className="projects__img" />
                <div className="projects__overlay">
                    <h3 className="projects__title">Project 3</h3>
                    <p className="projects__description">Integration of an Application for Managing Server Instances with Multicloud Compatibility</p>
                    <a href="/project3-details" className="projects__see-more">
                    <OpenInNewTwoToneIcon className="icon"/></a>
                    
                </div>
            </div>
        </div>
    )
}

export default Items