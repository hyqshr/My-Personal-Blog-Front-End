import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./styles/about.css";
import ScrollAnimation from "react-animate-on-scroll";
import aboutImage from "./images/about/myself.jpg";

function About() {
  return (
    <div className="section about" id="about">
      <h1 style={{color:"#FFFFFF"}}>About</h1>
      <Row className="about-row">
        <Col lg={4} className="about-col text-center">
          <ScrollAnimation
            animateIn="animate__bounceInLeft"
            // animateOut="animate__bounceOutLeft"
          >
            <Image
              className="about-image"
              src={aboutImage}
              thumbnail
              alt="aboutImage"
            />
          </ScrollAnimation>
        </Col>
        <Col lg={8} className="about-row">
          <ScrollAnimation
            animateIn="animate__bounceInRight"
            // animateOut="animate__bounceOutRight"
          >
            <h2 className="py-3">Yiqiu Huang</h2>
            <h3>
              I'am a M.S. in Data Science student from Northeastern University. 
              My focus is on full stack web development, NLP, Machine Learning, and big data tools like spark.
            </h3>
          </ScrollAnimation>
        </Col>
      </Row>
    </div>
  );
}

export default About;
