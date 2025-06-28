import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

import PropTypes from "prop-types";

function Home({ homeRef }) {
  return (
    <section ref={homeRef} id="home-section">
      <div className="centered-section container">
        <div className="profile">
          <img
            src="images/profile-portrait.jpg"
            className="profile-portrait"
            alt="A photograph of me"
          />
          <div className="profile-text">
            <div className="profile-intro">
              <span className="mask-hover">I am Christheo Guipo.</span>
              {/* I am <span className="highlight name">Christheo Guipo</span>. */}
              {/* <br />
              I'm a full-stack web developer. */}
              <div className="icon-container">
                <img className="icons" src="images/github-white.png" />
                <img className="icons" src="images/linkedin-white.png" />
                <img className="icons" src="images/gmail-white.png" />
              </div>
            </div>
            <a className="moving-line">
              <span>Read more</span>
            </a>
            <a href="#projects-section" className="button btn-to-projects">
              Check out some of my Projects
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

Home.propTypes = {
  homeRef: PropTypes.func,
};

export default Home;
