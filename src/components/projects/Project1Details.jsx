import React, { useState } from "react";
import "./projectdetails.css";
import techno1 from '../../assets/assets/techno1.png';
import techno2 from '../../assets/assets/techno2.png';
import techno3 from '../../assets/assets/techno3.png';
import techno4 from '../../assets/assets/techno4.png';
import techno6 from '../../assets/assets/techno5.png';
import techno5 from '../../assets/assets/techno6.png';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';


const Project1Details = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [currentImage, setCurrentImage] = useState("0") // Etat pour suivre l'image active

    const images = [techno1, techno2, techno3, techno4, techno5, techno6]; // Liste des images à afficher

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
                <h1 className="project-details__title">Project 1</h1>
                <p className="project-details__subtitle">
                    Secure Remote Control and Data Management of a PLC Using MQTT and VPN Integration.
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
                                    The objective of this project was to <strong>ensure the security and controlled access to the data</strong> of an automated system while making it accessible to authorized users through a web interface.<br /> The automated system itself was responsible for <strong>sorting tubes of beads</strong> of different colors into their designated locations, ensuring efficient organization.<br /> Another key goal of the project was to <strong>enable remote control of the automated system via VPN</strong>, specifically to force values on the system to activate colored lamps.

                                    To achieve this, an <strong>MQTT broker</strong> was implemented, allowing MQTT clients to read or publish data.<br /> The system relied on an <strong>Ewon device</strong> connected to the automated system, which published the system’s data to the MQTT broker. Authorized users were able to connect to the Ewon via a <strong>secure VPN</strong>, ensuring controlled and secure access to the system. <br /> Additionally, a <strong>website </strong>was registered with the MQTT broker, providing a user-friendly platform for <strong>monitoring, controlling, and visualizing</strong> the system’s data and functionality.
                                </p>
                            </div>
                        )}
                        {activeTab === "skills" && (
                            <div className="tab-panel">
                                <ul>
                                    <li>
                                        <VerifiedTwoToneIcon className="badge-check" />
                                        <strong>Javascript</strong>
                                    </li>
                                    <li><VerifiedTwoToneIcon className="badge-check" />
                                        <strong>Typescript</strong>
                                    </li>
                                    <li>
                                        <VerifiedTwoToneIcon className="badge-check" />
                                        <strong>MQTT</strong>
                                    </li>
                                    <li>
                                        <VerifiedTwoToneIcon className="badge-check" />
                                        <strong>PLC configuration</strong>
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

export default Project1Details;
