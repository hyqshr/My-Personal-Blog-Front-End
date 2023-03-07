import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./styles/home.css";
import useTypewriter from "react-typewriter-hook";
import ScrollAnimation from "react-animate-on-scroll";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import pdf1 from "./images/file/Resume.pdf";

//Update wordsDisplay data
const wordsDisplay = [
  "What can I do ??? don't you see that???",
  "Fine, I' ll show you again.",
  "Full stack web development",
  "NLP",
  "and Machine Learning!!!",
  "Salute，bye."
];
let index = 0;

function Home() {
  const [displayName, setDisplayName] = useState("Welcome to my page!!");
  const intervalRef = useRef({});
  const name = useTypewriter(displayName);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // index = Math.floor(Math.random() * wordsDisplay.length);
      // index = index > 2 ? 0 : ++index;
      index = index > wordsDisplay.length ? 0 : ++index;
      setDisplayName(wordsDisplay[index]);
    }, 5000);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [displayName]);

  return (
    <section 
      className="section home" 
      id="home" 
    >
      <Row>
        <Col lg={10} className="home-col" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <ScrollAnimation animateIn="animate__backInLeft">
            <h1 className="py-3">嗨呀~ 欢迎来到黄逸秋的主页</h1>
            <h4>Hi!!! my name is</h4>
            <h1 className="py-3">Yiqiu Huang</h1>
            <p>
              <h3 style={{color:"#e5f2ff"}}>{name}</h3>
            </p>
            {/* <p  style={{color:"#e5f2ff"}}>
              <span img="Pick Me" /> 👇👇👇 Pick me! 👇👇👇
            </p> */}
            <Button
              className="button-home"
              variant="light"
              size="lg"
              target="_blank"
              href={pdf1}
              download
            >
              <PictureAsPdfIcon fontSize="large" />
              Resume
            </Button>
            <p>Photo at Cancun in 2021</p>
          </ScrollAnimation>
        </Col>
      </Row>
    </section>
  );
}

export default Home;
