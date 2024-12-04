import React, { useState } from "react";
import "./projectdetails.css";
import BarCodeImg1 from '../../assets/assets/barcode.jpg';
import BarCodeImg2 from '../../assets/assets/barcode2.jpg';
import BarCodeImg3 from '../../assets/assets/barcode3.jpg';
import sorter1 from '../../assets/assets/sorter1.jpg';
import sorter2 from '../../assets/assets/sorter2.jpg';
import sorterHistory from '../../assets/assets/sorter-history.png';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';


const Project2Details = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [currentImage, setCurrentImage] = useState("0") // Etat pour suivre l'image active

    const images = [sorter1, sorter2, BarCodeImg1, BarCodeImg2, BarCodeImg3, sorterHistory]; // Liste des images à afficher

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
                <h1 className="project-details__title">Project 2</h1>
                <p className="project-details__subtitle">
                Color Sorter Device with a Mobile App that Allows Remote Control.
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
                                    This project involved an <strong>automated sorting system</strong> designed for potential large-scale industrial applications. The device efficiently sorted items based on their <strong>respective colors.</strong><br />

                                    Items placed on the conveyor belt were transported to a <strong>color sensor</strong>, which detected their color and triggered <strong>servo motors</strong> to direct them into the appropriate bins.<br /> The system was configured to handle <strong>three color categories </strong>: two correct colors and one incorrect. Items with an incorrect color were directed to a designated bin at the end of the conveyor belt.

                                    The system also featured <strong>three distinct push buttons</strong> for user interaction: a "start" button to initiate the sorting process, a "stop" button to halt operations, and a "change" button that allowed users to <strong>modify the color-sorting criteria.</strong>
                                    <br/>Moreover, a mobile application was developed to <strong>remotely control the system, display the items being sorted, and keep track of sorting records.</strong>   

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
                                        <strong>C++</strong>
                                    </li>
                                    <li>
                                        <VerifiedTwoToneIcon className="badge-check" />
                                        <strong>Electronics and Embedded Systems</strong>
                                    </li>
                                    <li>
                                        <VerifiedTwoToneIcon className="badge-check" />
                                        <strong>Microcontroller Programming</strong>
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

export default Project2Details;
