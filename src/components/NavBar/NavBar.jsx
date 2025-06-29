import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBars,
  faBusinessTime,
  faFolderOpen,
  faHouse,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleHamburgerMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="page-header-logo">
          <img src="images/logo.jpg" className="logo" />
        </div>
        <div className="page-header-name">
          <span>Christheo Guipo</span>
          <span className="subtext">Software Developer</span>
        </div>

        <div
          className={`navigation-list-wrapper ${showMenu ? "navbar-show" : ""}`}
        >
          <div className="navigation-list">
            <a
              href="#home-section"
              role="menuitem"
              className="navigation-list-link"
              onClick={handleLinkClick}
            >
              <div className="navigation-list-item">
                <FontAwesomeIcon
                  className="navigation-list-link-icon"
                  icon={faHouse}
                />
              </div>
            </a>

            <a
              href="#about-section"
              role="menuitem"
              className="navigation-list-link"
              onClick={handleLinkClick}
            >
              <div className="navigation-list-item">
                <FontAwesomeIcon
                  className="navigation-list-link-icon"
                  icon={faAddressCard}
                />
                {/* <img
                  src="images/info-icon.svg"
                  className="navigation-list-link-icon"
                /> */}
              </div>
            </a>

            <a
              href="#projects-section"
              role="menuitem"
              className="navigation-list-link"
              onClick={handleLinkClick}
            >
              <div className="navigation-list-item">
                <FontAwesomeIcon
                  className="navigation-list-link-icon"
                  icon={faWandMagicSparkles}
                />
                {/* <img
                  src="images/skills-icon.svg"
                  className="navigation-list-link-icon"
                /> */}
              </div>
            </a>

            <a
              href="#projects-section"
              role="menuitem"
              className="navigation-list-link"
              onClick={handleLinkClick}
            >
              <div className="navigation-list-item">
                <FontAwesomeIcon
                  className="navigation-list-link-icon"
                  icon={faBusinessTime}
                />
                {/* <img
                  src="images/portfolio-icon.svg"
                  className="navigation-list-link-icon"
                /> */}
              </div>
            </a>

            <a
              href="#contact-section"
              role="menuitem"
              className="navigation-list-link"
              onClick={handleLinkClick}
            >
              <div className="navigation-list-item">
                <FontAwesomeIcon
                  className="navigation-list-link-icon"
                  icon={faFolderOpen}
                />
                {/* <img
                  src="images/work-history-icon.svg"
                  className="navigation-list-link-icon"
                /> */}
              </div>
            </a>
          </div>
          {/* <ul role="menubar" className="navigation-list">
            <li role="presentation" className="navigation-list-item">
              <a
                href="#home-section"
                role="menuitem"
                className="navigation-list-link"
                onClick={handleLinkClick}
              > 
                <img src="images/home-icon.png" className='navigation-list-link-icon' />
              </a>
            </li>
            <li role="presentation" className="navigation-list-item">
              <a
                href="#about-section"
                role="menuitem"
                className="navigation-list-link"
                onClick={handleLinkClick}
              >
                About
              </a>
            </li>
            <li role="presentation" className="navigation-list-item">
              <a
                href="#projects-section"
                role="menuitem"
                className="navigation-list-link"
                onClick={handleLinkClick}
              >
                Projects
              </a>
            </li>
            <li role="presentation" className="navigation-list-item">
              <a
                href="#contact-section"
                role="menuitem"
                className="navigation-list-link"
                onClick={handleLinkClick}
              >
                Contact
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
