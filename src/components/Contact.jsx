import React from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  Badge,
  ProgressBar
} from "react-bootstrap";
import "./styles/contact.css";
import interest from "./data/interest.js";
import language from "./data/language.js";

// 4个社交媒体图标
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

function Contact() {
  return (
    <section className="section contact" id="contact">
      <Container>
        <h1>Interests & Languages</h1>
        <Row className="contact-row">
          <Col lg="8">
            <Carousel>
              {interest.map((interestCarousel, index) => (
                <Carousel.Item
                  key={index}
                  interval={3000}
                  className="contact-img"
                >
                  <img
                    className="d-block w-100"
                    src={interestCarousel.src}
                    alt={interestCarousel.alt}
                  />
                  {/* <Carousel.Caption>
                    <h3>
                      <Badge variant="dark">
                        {interestCarousel.icon}
                        {"  "}
                        {interestCarousel.title}
                      </Badge>
                    </h3>
                    <p>
                      <Badge variant="dark">{interestCarousel.detail}</Badge>
                    </p>
                  </Carousel.Caption> */}
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col lg="4">
            {language.map((languages, index) => (
              <div key={index}>
                <h3>{languages.title}</h3>
                <h6>{languages.detail}</h6>
                <ProgressBar
                  striped
                  variant="success"
                  now={languages.percentage}
                />
              </div>
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Contact</h1>
            <FacebookIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
            <WhatsAppIcon fontSize="large" />
            <EmailIcon fontSize="large" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
