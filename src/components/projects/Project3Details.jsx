import React, { useState } from "react";
import "./projectdetails.css";
import BarCodeImg from '../../assets/assets/barcode-bw.jpg';

const Project3Details = () => {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="project-details">
            <div className="project-details__header">
                <h1 className="project-details__title">Projet 3</h1>
                <p className="project-details__subtitle">
                    A C-based dice game project focusing on planning and logic circuits.
                </p>
            </div>

            <div className="project-details__content container">
                {/* Image Section */}
                <div className="project-details__image">
                    <img src={BarCodeImg} alt="Pig Game Project" />
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
        </div>
    );
};

export default Project3Details;
