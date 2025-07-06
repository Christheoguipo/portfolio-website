import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";

import PropTypes from "prop-types";
import {
  faBriefcase,
  faGraduationCap,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Experience() {
  return (
    <section id="experience-section">
      <div className="experience-container">
        <span className="text-3xl font-bold text-black my-4 block">
          My Work Experience and Education
        </span>
        <VerticalTimeline lineColor="var(--secondary)">
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{
              backgroundColor: "var(--blue10)",
              color: "#000",
            }}
            contentArrowStyle={{ borderRight: "7px solid  var(--blue10)" }}
            date="January 2025 - present"
            iconStyle={{
              background: "var(--accent)",
              color: "var(--text)",
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <span className="vertical-timeline-element-title">
              Software Developer
            </span>
            <span className="vertical-timeline-element-subtitle">
              FuturePoint IT Solutions (Unpaid collaboration)
            </span>
            <span className="timeline-text">
              Working on an internal employee portal with Next.js, where staff
              can track dashboards, apply for leave and manage their records.
            </span>
            <div>
              <div className="tech-skill">Next.js</div>
              <div className="tech-skill">MSSQL</div>
              <div className="tech-skill">React</div>
              <div className="tech-skill">HTML</div>
              <div className="tech-skill">TailwindCSS</div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{
              backgroundColor: "var(--blue10)",
              color: "#000",
            }}
            contentArrowStyle={{ borderRight: "7px solid  var(--blue10)" }}
            date="Sep 2024 - Dec 2024"
            iconStyle={{
              background: "var(--blue)",
              color: "var(--text)",
            }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <span className="vertical-timeline-element-title">
              Building Apps with .NET Core and React
            </span>
            <span className="vertical-timeline-element-subtitle">
              Udemy, Neil Cummings
            </span>
            <span className="timeline-text">
              Completed a full-stack project course on building a web app with
              ASP.NET Core and React. Gained more hands-on experience with API
              development, Entity Framework and modern React features.
            </span>
            <div>
              <div className="tech-skill">C#</div>
              <div className="tech-skill">ASP.Net Core</div>
              <div className="tech-skill">Entity Framework</div>
              <div className="tech-skill">SQLite</div>
              <div className="tech-skill">React</div>
              <div className="tech-skill">HTML</div>
              <div className="tech-skill">TailwindCSS</div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{
              backgroundColor: "var(--blue10)",
              color: "#000",
            }}
            contentArrowStyle={{ borderRight: "7px solid  var(--blue10)" }}
            date="Jul 2023 - Dec 2023"
            iconStyle={{
              background: "var(--blue)",
              color: "var(--text)",
            }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <span className="vertical-timeline-element-title">
              Full-Stack Web Development Program
            </span>
            <span className="vertical-timeline-element-subtitle">
              CareerFoundry
            </span>
            <span className="timeline-text">
              Completed a full-stack web development program at CareerFoundry,
              covering JavaScript, React, Node.js and MongoDB. Built multiple
              projects from scratch, focusing on clean architecture, REST APIs
              and responsive design.
            </span>
            <div>
              <div className="tech-skill">JavaScript</div>
              <div className="tech-skill">React</div>
              <div className="tech-skill">Node.js</div>
              <div className="tech-skill">MongoDB</div>
              <div className="tech-skill">HTML</div>
              <div className="tech-skill">CSS</div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{
              background: "var(--secondary)",
              color: "#fff",
            }}
            icon={<FontAwesomeIcon icon={faRocket} />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}

Experience.propTypes = {
  experienceRef: PropTypes.func,
};

export default Experience;
