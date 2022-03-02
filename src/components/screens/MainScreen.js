import React from 'react'
import Home from "../Home";
import About from "../About";
import Education from "../Education";
import Experience from "../Experience";
import Skill from "../Skill";
import Project from "../Project";
import Contact from "../Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function MainPage() {
  return (
    <div>



        <Home />
        <About />
        <Education />
        <Experience />
        <Skill />
        <Project />
        <Contact />


    </div>
  )
}

export default MainPage