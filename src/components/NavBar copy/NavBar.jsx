import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleHamburgerMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <a href="#home-section">
          {/* <img
            src="images/christheo-guipo-logo.png"
            className="page-header-logo"
            alt="My personal logo, a text logo in uppercase letters of my full name"
          /> */}
          <div className="page-header-logo">
            <span>Cg</span>
          </div>
        </a>
        <div>
          <FontAwesomeIcon
            onClick={handleHamburgerMenuClick}
            icon={faBars}
            className="fa-xl hamburger"
          />
        </div>

        <div
          className={`navigation-list-wrapper ${showMenu ? "navbar-show" : ""}`}
        >
          <ul role="menubar" className="navigation-list">
            <li role="presentation" className="navigation-list-item">
              <a
                href="#home-section"
                role="menuitem"
                className="navigation-list-link"
                onClick={handleLinkClick}
              >
                Home
              </a>
            </li>
            <li role="presentation" className="navigation-list-item">
              <a
                href="#about-section"
                role="menuitem"
                className="navigation-list-link"
                onClick={handleLinkClick}
              >
                About Me
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
