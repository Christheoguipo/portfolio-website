import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import PropTypes from "prop-types";

function Home({ homeRef }) {

  return (

    <section ref={homeRef} id="home-section">
      <div className="centered-section container">
        <div className="profile">
          <img src="images/profile-portrait.jpg" className="profile-portrait" alt="A photograph of me" />
          <div className="profile-text">
            <h1>Hello, I'm <span className="highlight">Christheo Guipo</span>.
              <br />
              I'm a full-stack web developer.
            </h1>
            <a href="#projects-section" className="button btn-to-projects">Check out some of my Projects<FontAwesomeIcon icon={faArrowRight} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

Home.propTypes = {
  homeRef: PropTypes.func
}

export default Home;