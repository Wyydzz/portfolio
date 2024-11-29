import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Project1Details from './components/projects/Project1Details';
import Project2Details from './components/projects/Project2Details';
import Project3Details from './components/projects/Project3Details';
import Contact from './components/contact/Contact';



const App = () => {
  return (
    <Router>
      {/* Header rester visible sur toutes les pages*/}
      <Header />
      <main className='main'>
        <Routes>
          {/* Route principale contenant toutes les sections */}
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/project1-details" element={<Project1Details />} />
          <Route path="/project2-details" element={<Project2Details />} />
          <Route path="/project3-details" element={<Project3Details />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App