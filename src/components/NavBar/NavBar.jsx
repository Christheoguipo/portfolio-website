import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
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
              </div>
            </a>

            <a
              href="#skill-section"
              role="menuitem"
              className="navigation-list-link"
              onClick={handleLinkClick}
            >
              <div className="navigation-list-item">
                <FontAwesomeIcon
                  className="navigation-list-link-icon"
                  icon={faWandMagicSparkles}
                />
              </div>
            </a>

            <a
              href="#experience-section"
              role="menuitem"
              className="navigation-list-link"
              onClick={handleLinkClick}
            >
              <div className="navigation-list-item">
                <FontAwesomeIcon
                  className="navigation-list-link-icon"
                  icon={faBusinessTime}
                />
              </div>
            </a>

            <a
              href="#portfolio-section"
              role="menuitem"
              className="navigation-list-link"
              onClick={handleLinkClick}
            >
              <div className="navigation-list-item">
                <FontAwesomeIcon
                  className="navigation-list-link-icon"
                  icon={faFolderOpen}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
