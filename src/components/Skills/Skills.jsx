import { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import PropTypes from "prop-types";
import "./Skills.css";
import ProgressBarItem from "../common/ProgressBarItem/ProgressBarItem";

const codingSkills = [
  { text: "C#", percent: 80 },
  { text: "Vb.Net", percent: 80 },
  { text: "React", percent: 65 },
  { text: "NextJs", percent: 70 },
  { text: "JavaScript", percent: 65 },
  { text: "Asp.Net Core", percent: 70 },
];

const dbSkills = [
  { text: "MSSQL", percent: 80 },
  { text: "PostgreSQL", percent: 60 },
  { text: "MongoDB", percent: 65 },
  { text: "Penpot", percent: 80 },
  { text: "HTML/CSS", percent: 80 },
  { text: "TailwindCSS", percent: 70 },
];

function Skills({ skillsRef }) {
  return (
    <section ref={skillsRef} id="skill-section">
      <div className="img-cover"></div>
      <img className="bg-img" src="./images/laptop.jpg" />
      <div className="skills-grid">
        <div className="skills-title">
          <span className="text-3xl font-bold">My Skills</span>
          <div className="line-skills"></div>
        </div>
        <div className="skills-coding">
          <span className="block font-bold mb-4">Coding</span>
          {codingSkills.map((skill, index) => (
            <ProgressBarItem key={index} skill={skill} />
          ))}
        </div>
        <div className="skills-database">
          <span className="block font-bold mb-4">Database & Design</span>
          {dbSkills.map((skill, index) => (
            <ProgressBarItem key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

Skills.propTypes = {
  skillsRef: PropTypes.func,
};

export default Skills;
