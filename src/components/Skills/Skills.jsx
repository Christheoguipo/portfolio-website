import PropTypes from "prop-types";
import "./Skills.css";

function Skills({ skillsRef }) {
  return (
    <section ref={skillsRef} id="skill-section">
      <img className="bg-img" src="./images/laptop.jpg" />
    </section>
  );
}

Skills.propTypes = {
  skillsRef: PropTypes.func,
};

export default Skills;
