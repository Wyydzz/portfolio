import React from 'react';
import BarCodeImg from '../../assets/assets/barcode-bw.jpg';
import OpenInNewTwoToneIcon from '@mui/icons-material/OpenInNewTwoTone';

const Items = () => {
    return (
        <div className="projects__container container grid">
            {/* Project 1 */}
            <div className="projects__item">
                <img src={BarCodeImg} alt="Project 1" className="projects__img" />
                <div className="projects__overlay">
                    <h3 className="projects__title">Project 1</h3>
                    <p className="projects__description">Barcode reader</p>
                    <a href="/project1-details" className="projects__see-more">
                    <OpenInNewTwoToneIcon className="icon"/></a>
                </div>
            </div>

            {/* Project 2 */}
            <div className="projects__item">
                <img src={BarCodeImg} alt="Project 2" className="projects__img" />
                <div className="projects__overlay">
                    <h3 className="projects__title">Project 2</h3>
                    <p className="projects__description">Color sorter device with a mobile app that allows remote control</p>
                    <a href="/project2-details" className="projects__see-more">
                    <OpenInNewTwoToneIcon className="icon"/></a>
                </div>
            </div>

            {/* Project 3 */}
            <div className="projects__item">
                <img src={BarCodeImg} alt="Project 3" className="projects__img" />
                <div className="projects__overlay">
                    <h3 className="projects__title">Project 3</h3>
                    <p className="projects__description">Cloud-server management application</p>
                    <a href="/project3-details" className="projects__see-more">
                    <OpenInNewTwoToneIcon className="icon"/></a>
                    
                </div>
            </div>
        </div>
    )
}

export default Items