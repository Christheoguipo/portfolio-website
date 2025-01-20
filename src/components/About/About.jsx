import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faC,
  faHashtag,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

function About({ aboutRef }) {
  return (
    <section ref={aboutRef} id="about-section">
      <div className="about-me-body container">
        <div className="about-me">
          <div className="about-me-wrapper">
            <h1 className="section-title">About Me</h1>
            <p className="about-description">
              I'm passionate about learning new technologies and expanding my
              skill set to build impactful and innovative solutions on the web.
              Turning ideas into awesome creations is what drives me!
            </p>
            <div className="work-exp-grid">
              <div className="work-exp-grid-item">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
                </div>
                <div className="work-exp-details">
                  <p>1.5+ years exploring various web technologies.</p>
                </div>
                <p className="highlight">Such as these:</p>
                <div>React</div>
                <div>Angular</div>
                <div>Python</div>
                <div>Node.js</div>
                <div>MongoDB</div>
              </div>
              <div className="work-exp-grid-item">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faC} size="2xl" />
                  <FontAwesomeIcon icon={faHashtag} size="xl" />
                </div>
                <div className="work-exp-details">
                  <p className="work-exp-description">
                    5 years in C# desktop app development.
                  </p>
                </div>
                <p className="highlight">Along with these tools:</p>
                <div>MS SQL</div>
                <div>Crystal Report</div>
                <div>MS Visual Studio</div>
                <div>Team Foundation Server</div>
              </div>
              <div className="work-exp-grid-item">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faWindows} size="2x" />
                </div>
                <div className="work-exp-details">
                  <p className="work-exp-description">
                    2 years in VB.NET desktop app development.
                  </p>
                </div>
                <p className="highlight">Along with these tools:</p>
                <div>MS SQL</div>
                <div>DevExpress</div>
                <div>MS Visual Studio</div>
              </div>
            </div>
          </div>

          <div className="centered-content">
            <p>Download my Curriculum Vitae for more details.</p>
            <a href="downloads/CV.pdf" className="button btn-download" download>
              CV.pdf
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  aboutRef: PropTypes.func,
};

export default About;
