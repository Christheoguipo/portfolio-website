import PropTypes from "prop-types";
import "./About.css";

import "swiper/css";
import "swiper/css/pagination";
import Carousel from "../common/Carousel/Carousel";

function About({ aboutRef }) {
  return (
    <section ref={aboutRef} id="about-section">
      <div className="about-me-text-container">
        <p className="about-me-text-title">
          Turning ideas into code that matters.
        </p>
        <p className="about-me-text-body">
          I'm a dedicated software developer who values simplicity and
          performance. I build solutions with long-term maintainability in mind,
          always aiming to make both people and systems work better together.
          {/* <span>
            With a background in full-stack development, I’ve worked on
            everything from responsive user interfaces to robust backend APIs. I
            enjoy learning new tools and frameworks, but I’m most passionate
            about writing clean, understandable code that solves real problems.
          </span> */}
          <span>
            Whether collaborating in a team or working independently, I bring a
            thoughtful, detail-oriented approach to every project I take on.
          </span>
        </p>
      </div>

      <div className="line"></div>

      <div className="about-me-logo-container">
        <div className="button">Download CV</div>
        <div className="about-me-logo">
          <img src="images/logo.jpg" className="logo" />
        </div>
        <Carousel />
      </div>
    </section>
  );
}

About.propTypes = {
  aboutRef: PropTypes.func,
};

export default About;
