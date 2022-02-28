import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./styles/education.css";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import education from "./data/education.js";

function Education() {
  return (
    <section className="section education" id="education">
      <div>
        <h1>Education</h1>
        <VerticalTimeline>
          {education.map((education, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: "#17b978", color: "#fff" }}
              contentArrowStyle={{ borderLeft: "7px solid  #086972" }}
              date={education.date}
              dateClassName="education-date"
              iconStyle={{ background: "#071a52", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 dangerouslySetInnerHTML={{ __html: education.event }} />
              <h5 dangerouslySetInnerHTML={{ __html: education.detail }} />
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconStyle={{
              background: "#17b978",
              color: "#071a52"
            }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Education;
