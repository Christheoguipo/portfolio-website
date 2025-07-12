import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";

import PropTypes from "prop-types";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Home({ homeRef }) {
  return (
    <div ref={homeRef} id="home-section">
      <div className="profile">
        <div className="profile-image-cover"></div>
        {/* <img src="images/profile-portrait.jpg" className="profile-image" /> */}
        <img src="images/theo-landscape.jpg" className="profile-image" />
        <div className="info">
          <span className="meta">Hello, I am</span>
          <span className="name">
            CHRISTHEO <span>GUIPO</span>
          </span>
          <span className="meta">Software Developer</span>
          <div className="icon-container">
            <FontAwesomeIcon className="icons" icon={faGithub} />
            <FontAwesomeIcon className="icons" icon={faLinkedinIn} />
            <FontAwesomeIcon className="icons" icon={faEnvelope} />
            <FontAwesomeIcon className="icons" icon={faWhatsapp} />
          </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  homeRef: PropTypes.func,
};

export default Home;
