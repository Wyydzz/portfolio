import React, { useState } from "react";
import "./projectdetails.css";
import apiz1 from '../../assets/assets/apiz1.png';
import apizsso from '../../assets/assets/apiz-sso.png';
import apizConnected from '../../assets/assets/apiz-connected.png';
import apizScheduler from '../../assets/assets/apiz-scheduler.png';
import apizKeyApi from '../../assets/assets/apiz-keyAPi.png';
import apizPOC from '../../assets/assets/apiz-POC.png';
import apizGetInstance from '../../assets/assets/apiz-getInstance.png';
import apizAWS from '../../assets/assets/apizAWS.png';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';


const Project3Details = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [currentImage, setCurrentImage] = useState("0") // Etat pour suivre l'image active

    const images = [apiz1, apizsso, apizConnected, apizScheduler, apizKeyApi, apizPOC, apizGetInstance, apizAWS]; // Liste des images à afficher

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length); // affiche l'image suivante
    }

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length); // affiche l'image précédente
    }


    /** Modal */
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const openModal = (imgSrc) => {
        setModalImage(imgSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (


        <section className="test__section">
            <div className="project-details__header">
                <h1 className="project-details__title">Project 3</h1>
                <p className="project-details__subtitle">
                Integration of an Application for Managing Server Instances with Multicloud Compatibility.
                </p>
            </div>
            <div className="projectdetails__container container grid">


                {/* Image Section avec carrousel*/}
                <div className="project-details__image">
                    <button className="arrow prev" onClick={prevImage}>
                        <ArrowBackTwoToneIcon className="arrow__button-icon" />
                    </button>
                    <img src={images[currentImage]} alt="Project" className="carousel-image" onClick={() => openModal(images[currentImage])} />
                    <button className="arrow next" onClick={nextImage}>
                        <ArrowForwardTwoToneIcon className="arrow__button-icon" />
                    </button>
                </div>

                {isModalOpen && (
                    <div className="modal active" onClick={closeModal}>
                        <img src={modalImage} alt="Zoomed Project" />
                    </div>
                )}



                {/* Info Section */}
                <div className="project-details__info">
                    <div className="tabs">
                        <button
                            className={`tab-links ${activeTab === "overview" ? "active" : ""}`}
                            onClick={() => setActiveTab("overview")}
                        >
                            Overview
                        </button>
                        <button
                            className={`tab-links ${activeTab === "skills" ? "active" : ""}`}
                            onClick={() => setActiveTab("skills")}
                        >
                            Skills
                        </button>
                        
                    </div>

                    <div className="tab-content">
                        {activeTab === "overview" && (
                            <div className="tab-panel">
                                <p>
                                    This project involved the integration of an application for <strong> managing server instances. </strong>
                                    The goal was to make server management more transparent and accessible for users, especially when dealing with servers hosted by <strong>different cloud providers.</strong> <br/>Key features included simplifying tasks such as <strong>starting, stopping, and scheduling servers to operate at specific times.</strong><br/>
                                     Additionally, a <strong>Single Sign-On</strong> (SSO) system was implemented to ensure secure and seamless user authentication.
                                </p>
                            </div>
                        )}
                        {activeTab === "skills" && (
                            <div className="tab-panel">
                                <ul>
                                    <li>
                                    <VerifiedTwoToneIcon className="badge-check"/>
                                       <strong>Typescript</strong> 
                                    </li>
                                    <li><VerifiedTwoToneIcon className="badge-check"/>
                                        <strong>React</strong> 
                                    </li>
                                    <li>
                                    <VerifiedTwoToneIcon className="badge-check"/>
                                        <strong>Node.js</strong> 
                                    </li>
                                </ul>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>

        </section>



    );
};

export default Project3Details;
