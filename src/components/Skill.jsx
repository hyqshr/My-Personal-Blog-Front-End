import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./styles/skill.css";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import skills from "./data/skill.js";
import ScrollAnimation from "react-animate-on-scroll";

function Skill() {
  return (
    <section className="section skill" id="skill">
      <div>
        <h1>Skills</h1>
      </div>
      <div>
        <Row>
          {skills.map((skillCategory, index) => (
            <Col key={index} lg="3">
              <ScrollAnimation animateIn="animate__slideInDown">
                <Card className="skill-card">
                  <CardContent>
                    <Avatar style={{ ...skillCategory.style }}>
                      {skillCategory.icon}
                    </Avatar>
                    <h3
                      dangerouslySetInnerHTML={{ __html: skillCategory.name }}
                    />
                    <ul className="list-group list-group-flush">
                      {skillCategory.detail.map((detail, index) => (
                        <li key={index} className="list-group-item">
                          {detail.title}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default Skill;
