import React from "react";
import { Button } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./styles/project.css";
import projects from "./data/project.js";

function Project() {
  return (
    <section className="section project" id="project">
      <div>
        <h1>Projects</h1>
        <VerticalTimeline>
          {projects.map((project, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ ...project.contentStyle }}
              contentArrowStyle={{ ...project.contentArrowStyle }}
              iconStyle={{ ...project.iconStyle }}
              icon={project.icon}
            >
              <p dangerouslySetInnerHTML={{ __html: project.label }} />
              <h3 dangerouslySetInnerHTML={{ __html: project.title }} />
              <h6 dangerouslySetInnerHTML={{ __html: project.subtitle }} />
              <p dangerouslySetInnerHTML={{ __html: project.detail }} />
              <div>
                {project.links.map((link, index) => (
                  <Button
                    key={index}
                    className="project-button"
                    variant="dark"
                    color="default"
                    target="_blank"
                    href={link.url}
                  >
                    {link.text}
                  </Button>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Project;
