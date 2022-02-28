import React from "react";
import Trans from "./Trans";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Trans />
      <Header />
      <Home />
      <About />
      <Education />
      <Experience />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
