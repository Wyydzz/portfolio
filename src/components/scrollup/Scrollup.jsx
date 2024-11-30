import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import './scrollup.css';

const Scrollup = () => {
    const location = useLocation(); // Récupère l'URL actuelle
    // Vérifier si l'utilisateur est sur une page de détails
    const isDetailsPage = location.pathname.startsWith('/project1-details') ||
        location.pathname.startsWith('/project2-details') ||
        location.pathname.startsWith('/project3-details');

    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector(".scrollup");

            // Si l'élément n'existe pas, ne rien faire
            if (!scrollUp) return;

            if (window.scrollY >= 560) {
                scrollUp.classList.add("show-scroll");
            } else {
                scrollUp.classList.remove("show-scroll");
            }
        };

        // Ajoute l'écouteur de scroll
        window.addEventListener("scroll", handleScroll);

        // Nettoie l'écouteur au démontage du composant
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Exécuté une fois au montage du composant

    // Si l'URL actuelle est "/project1-details", ne pas afficher le bouton
    if (isDetailsPage) {
        return null;
    }

    return (
        <a href="#home" className="scrollup">
            <FontAwesomeIcon icon={faArrowUp} className="scrollup_icon" />
        </a>
    );
};

export default Scrollup;
