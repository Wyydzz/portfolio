import React, { useState } from "react";
import "./projectdetails.css";
import BarCodeImg1 from '../../assets/assets/barcode.jpg';
import BarCodeImg2 from '../../assets/assets/barcode2.jpg';
import BarCodeImg3 from '../../assets/assets/barcode3.jpg';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';


const Project1Details = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [currentImage, setCurrentImage] = useState("0") // Etat pour suivre l'image active

    const images = [BarCodeImg1, BarCodeImg2, BarCodeImg3]; // Liste des images à afficher

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length); // affiche l'image suivante
    }

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length); // affiche l'image précédente
    }

    return (


        <section className="test__section">
            <div className="project-details__header">
                    <h1 className="project-details__title">Projet 1</h1>
                    <p className="project-details__subtitle">
                        A C-based dice game project focusing on planning and logic circuits.
                    </p>
                </div>
            <div className="projectdetails__container container grid">
                

                {/* Image Section avec carrousel*/}
                <div className="project-details__image">
                    <button className="arrow prev" onClick={prevImage}>
                        <ArrowBackTwoToneIcon className="arrow__button-icon" />
                    </button>
                    <img src={images[currentImage]} alt="Project" className="carousel-image" />
                    <button className="arrow next" onClick={nextImage}>
                        <ArrowForwardTwoToneIcon className="arrow__button-icon" />
                    </button>
                </div>





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
                        <button
                            className={`tab-links ${activeTab === "electronics" ? "active" : ""}`}
                            onClick={() => setActiveTab("electronics")}
                        >
                            Electronics
                        </button>
                    </div>

                    <div className="tab-content">
                        {activeTab === "overview" && (
                            <div className="tab-panel">
                                <p>
                                    The Pig Game is a simple dice game designed in the C programming language.
                                    This project allowed me to implement planning techniques and improve my coding skills.
                                </p>
                            </div>
                        )}
                        {activeTab === "skills" && (
                            <div className="tab-panel">
                                <ul>
                                    <li>
                                        <strong>Mind Mapping:</strong> Organized project tasks visually.
                                    </li>
                                    <li>
                                        <strong>PERT Chart:</strong> Detailed task breakdown and prioritization.
                                    </li>
                                    <li>
                                        <strong>Gantt Chart:</strong> Improved visualization of deadlines and timelines.
                                    </li>
                                </ul>
                            </div>
                        )}
                        {activeTab === "electronics" && (
                            <div className="tab-panel">
                                <ul>
                                    <li>
                                        <strong>Logic Circuits:</strong> Worked with inverters, counters, and multiplexers.
                                    </li>
                                    <li>
                                        <strong>PCB Design:</strong> Created printed circuit boards using Proteus and ARES.
                                    </li>
                                    <li>
                                        <strong>Communication Card:</strong> Used VELLEMAN VM110N to interface with the computer.
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
