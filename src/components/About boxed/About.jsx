import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faC,
  faHashtag,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import "./About.css";

function About({ aboutRef }) {
  return (
    <section ref={aboutRef} id="about">
      <div className="about-me-text-container">
        <p className="about-me-text">
          I'm a passionate software developer with a focus on building clean,
          efficient and scalable code.
        </p>
      </div>

      <div className="carousel">9+ Years in Software Development</div>
      <div className="about-me-logo-container">
        <div className="button">Portfolio</div>
        <div className="about-me-logo">
          <img src="images/logo.jpg" className="logo" />
        </div>
        <div className="button">Download CV</div>
      </div>
    </section>
  );
}

About.propTypes = {
  aboutRef: PropTypes.func,
};

export default About;
