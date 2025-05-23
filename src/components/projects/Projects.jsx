import React from 'react';
import Items from './Items';
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
        <h2 className="section__title">My Projects</h2>
        <span className="section__subtitle">Most recent work</span>
        <div className="projects__container container grid">

          <Items/>
            
        </div>
    </section>
  )
}

export default Projects