import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";

import PropTypes from "prop-types";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons/faGithubAlt";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";

function Home({ homeRef }) {
  return (
    <div ref={homeRef} id="home-section">
      <div className="profile">
        <div className="box name-box">
          <img src="images/blue-lines.jpg" className="bg-name-box" />
          {/* <img src="images/orange-bg.jpg" className="bg-name-box" /> */}
          {/* <img src="images/multi-colored-bg.png" className="bg-name-box" /> */}
          {/* <img src="images/bg-sky.png" className="bg-name-box" /> */}
          {/* <img src="images/bg-yellow.jpg" className="bg-name-box" />
          <img src="images/red-black-bg.png" className="bg-name-box" /> */}
          {/* <img src="images/bg-gradient.jpg" className="bg-name-box" /> */}
          <div className="info">
            <span className="meta">Hello, I am</span>
            <span className="name">CHRISTHEO GUIPO</span>
            <span className="meta">Software Developer</span>
          </div>
        </div>
        <div className="box profile-box">
          <img
            src="images/profile-portrait.jpg"
            className="image"
            alt="A photograph of me"
          />
        </div>
        <div className="box about-box">
          {/* <img src="images/laptop.jpg" className="carousel-item-img" /> */}
          {/* <img src="images/bg-yellow.jpg" className="carousel-item-img" /> */}
          {/* <img src="images/multi-colored-bg.png" className="carousel-item-img" /> */}
          {/* <div className="cover"></div> */}
          <div className="carousel">
            <div className="carousel-item">
              <p className="highlight">
                7<span>+</span>
              </p>
              <p>
                Years of .Net
                <br />
                Experience
              </p>
            </div>

            <div className="carousel-item">
              <p className="highlight">
                1<span>+</span>
              </p>
              <p>
                Years in Web
                <br />
                Development
              </p>
            </div>
            {/* <div className="tech-stack-icons-container">
              <img
                alt="C#"
                className="tech-stack-icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
              />

              <img
                className="tech-stack-icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg"
              />
              <img
                className="tech-stack-icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg"
              />
             
              <i className="devicon-azuresqldatabase-plain colored tech-stack-icons" />

              <img
                className="tech-stack-icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
              />
            </div> */}

            {/*
            <div className="carousel-item">
            
              <p className="highlight">
                5<span>+</span>
              </p>
              <p>
                Years of C#
                <br /> Desktop App Development
              </p>
            </div>
            <div className="carousel-item">
              <p className="highlight">
                2<span>+</span>
              </p>
              <p>
                Years of VB.Net
                <br /> Desktop App Development
              </p>
            </div>
            <div className="carousel-item">
              <p className="highlight">
                1<span>+</span>
              </p>
              <p>Years in Web Development</p>
            </div>
            */}
          </div>
          <div className="about-box-content-container">
            {/* <img src="images/bg-sky.png" className="bg-sky" /> */}
            <div className="about-box-content">
              <span className="about">
                I'm a passionate software developer with a focus on building
                clean, efficient and scalable code.
              </span>
              <div className="icon-container">
                <FontAwesomeIcon className="icons" icon={faGithubAlt} />
                <FontAwesomeIcon className="icons" icon={faLinkedinIn} />
                <FontAwesomeIcon className="icons" icon={faEnvelope} />
                <FontAwesomeIcon className="icons" icon={faWhatsapp} />
                {/* <img className="icons" src="images/github-brands.svg" />
                <img className="icons" src="images/linkedin-white.png" />
                <img className="icons" src="images/gmail-white.png" /> */}
              </div>
            </div>
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
