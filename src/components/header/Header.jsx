import React, { useState } from 'react';
import "./header.css";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import HandymanTwoToneIcon from '@mui/icons-material/HandymanTwoTone';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import BedtimeTwoToneIcon from '@mui/icons-material/BedtimeTwoTone';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    /* Hook pour obtenir la route actuelle */
    const location = useLocation();

    /* Toggle Menu */
    const [Toggle, showMenu] = useState(false);

    /* Dark Mode */
    const [DarkMode, setDarkMode] = useState(false);

    /* Toggle Dark Mode */
    const toggleDarkMode = () => {
        setDarkMode(!DarkMode);
        document.body.classList.toggle('dark-mode');
    };

    // Vérifier si l'utilisateur est sur une page de détails
    const isDetailsPage = location.pathname.startsWith('/project1-details');

    return (
        <header className="header">
            <nav className="nav container">
                <a href="/" className="nav__logo">Grégory.</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {/* Affiche un menu simplifié si on est sur une page de détails */}
                        {isDetailsPage ? (
                            <li className="nav__item">
                                <Link to="/" className="nav__link">
                                    <HomeTwoToneIcon className="nav__icon active-link" /> Home
                                </Link>
                            </li>
                        ) : (
                            // Menu complet pour les autres pages
                            <>
                                <li className="nav__item">
                                    <a href="/#home" className="nav__link">
                                        <HomeTwoToneIcon className="nav__icon active-link" /> Home
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="/#about" className="nav__link">
                                        <PersonOutlineTwoToneIcon className="person nav__icon" /> About
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="/#skills" className="nav__link">
                                        <HandymanTwoToneIcon className="skills nav__icon" /> Skills
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="/#projects" className="nav__link">
                                        <FolderOpenTwoToneIcon className="projects nav__icon" /> Projects
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="#contact" className="nav__link">
                                        <SendTwoToneIcon className="contact nav__icon" /> Contact
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>

                    <CloseTwoToneIcon className="nav__close" onClick={() => showMenu(!Toggle)} />
                </div>

                {/* Nav Toggle for small screens */}
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <GridViewTwoToneIcon className="app nav__icon" />
                </div>

                {/* Dark mode button */}
                <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                    {DarkMode ? <WbSunnyTwoToneIcon /> : <BedtimeTwoToneIcon />}
                </button>
            </nav>
        </header>
    );
};

export default Header;
