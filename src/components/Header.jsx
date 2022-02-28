import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./styles/header.css";

function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const hanndleScroll = () => {
    if (window.scrollY >= 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  window.addEventListener("scroll", hanndleScroll);

  function handleClick(event) {
    // event.preventDefault();
    // console.log("clicked.");
  }

  return (
    <header>
      <Navbar
        className={isScroll ? "colorChange" : "navbar"}
        collapseOnSelect
        expand="xl"
        variant={isScroll ? "dark" : "light"}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#">
            <h1>Yiqiu's portfolio</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#home" onClick={handleClick}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" onClick={handleClick}>
                About
              </Nav.Link>
              <Nav.Link href="#education" onClick={handleClick}>
                Education
              </Nav.Link>
              <Nav.Link href="#experience" onClick={handleClick}>
                Experience
              </Nav.Link>
              <Nav.Link href="#skill" onClick={handleClick}>
                Skills
              </Nav.Link>
              <Nav.Link href="#project" onClick={handleClick}>
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" onClick={handleClick}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
