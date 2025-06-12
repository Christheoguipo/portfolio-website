import "./Home.css";

import PropTypes from "prop-types";

function Home({ homeRef }) {
  return (
    <div ref={homeRef} id="home-section">
      <div className="profile">
        <div className="box name-box">
          <img src="images/multi-colored-bg.png" className="bg-name-box" />
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
          <div className="carousel">
            <div className="carousel-item">
              {/* <img src="images/laptop.jpg" className="carousel-item-img" /> */}
              <img src="images/bg-yellow.jpg" className="carousel-item-img" />
              {/* <img src="images/multi-colored-bg.png" className="carousel-item-img" /> */}
              {/* <div className="cover"></div> */}
              <div className="carousel-item-content-container">
                <span className="carousel-item-content">5+</span>
              </div>
            </div>
          </div>
          <div className="about-box-content-container">
            {/* <img src="images/bg-sky.png" className="bg-sky" /> */}
            <div className="about-box-content">
              <span className="about">
                I'm a passionate software developer with a focus on building
                clean, efficient and scalable code.
              </span>
              <div className="icon-container">
                <img className="icons" src="images/github-brands.svg" />
                <img className="icons" src="images/linkedin-white.png" />
                <img className="icons" src="images/gmail-white.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
}

Home.propTypes = {
  homeRef: PropTypes.func,
};

export default Home;
