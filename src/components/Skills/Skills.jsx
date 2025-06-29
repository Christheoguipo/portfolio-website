import { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import PropTypes from "prop-types";
import "./Skills.css";

function Skills({ skillsRef }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => {
        if (prev >= 80) {
          clearInterval(timer);
          return 80;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={skillsRef} id="skill-section">
      <div className="img-cover"></div>
      <img className="bg-img" src="./images/laptop.jpg" />
      <div className="skills-grid">
        <div className="skills-title">
          <span className="text-3xl font-bold">My Skills</span>
          <div className="line"></div>
        </div>
        <div className="skills-coding">
          <span className="text-xl font-bold">Coding</span>
          <div style={{ width: "100%" }}>
            <ProgressBar
              now={value}
              label={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    padding: "0 8px",
                    color: "white",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                  }}
                >
                  <span>Web Design</span>
                  <span>{value}%</span>
                </div>
              }
            ></ProgressBar>
          </div>
        </div>
        <div className="skills-database">
          <span className="text-xl font-bold">Database & Design</span>
        </div>
      </div>
    </section>
  );
}

Skills.propTypes = {
  skillsRef: PropTypes.func,
};

export default Skills;
