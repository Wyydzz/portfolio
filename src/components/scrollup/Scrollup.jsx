import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './scrollup.css';

const Scrollup = () => {
    window.addEventListener("scroll", function () {
            const scrollUp = document.querySelector(".scrollup");
            if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
            else scrollUp.classList.remove("show-scroll")
    })
  return (
    <a href="#home" className="scrollup">
        <FontAwesomeIcon icon={faArrowUp} className="scrollup_icon" />
    </a>
  )
}

export default Scrollup