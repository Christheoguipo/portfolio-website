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
import Logo from "../common/Logo/Logo";
import NavListItem from "./NavListItem";


function NavBar({ sections }) {

  const { homeRef, aboutRef, skillsRef, experienceRef, portfolioRef } = sections;

  const [showMenu, setShowMenu] = useState(false);

  const navItemData = [
    {
      icon: faHouse,
      ref: homeRef
    },
    {
      icon: faAddressCard,
      ref: aboutRef
    },
    {
      icon: faWandMagicSparkles,
      ref: skillsRef
    },
    {
      icon: faBusinessTime,
      ref: experienceRef
    },
    {
      icon: faFolderOpen,
      ref: portfolioRef
    },

  ];

  const handleHamburgerMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = (ref) => {
    setShowMenu(false);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[var(--background)] sticky w-full top-0 z-100">
      <div className="grid grid-cols-[auto_1fr_1fr] min-h-[var(--navbar-height)] w-full">
        <Logo size="sm" />
        <div className="flex flex-col text-[clamp(1rem,1.3rem,1.5rem)]">
          <span>Christheo Guipo</span>
          <span className="text-[var(--text-accent)] text-[clamp(0.6rem,0.8rem,1rem)]">Software Developer</span>
        </div>

        <div
          className={`h-full ${showMenu ? "left-0 translate-x-0" : ""}`}
        >

          <div className="flex items-center justify-end h-full">

            {navItemData && navItemData.map((item, index) => (
              <NavListItem key={index} icon={item.icon} handleClick={() => handleLinkClick(item.ref)} />
            )
            )}

            {/* <div className="navigation-list-item" onClick={() => handleLinkClick(homeRef)}>
              <FontAwesomeIcon
                className="navigation-list-link-icon"
                icon={faHouse}
              />
            </div>

            <div className="navigation-list-item" onClick={() => handleLinkClick(aboutRef)}>
              <FontAwesomeIcon
                className="navigation-list-link-icon"
                icon={faAddressCard}
              />
            </div> */}
            {/* 
            <div className="navigation-list-item" onClick={() => handleLinkClick(skillsRef)}>
              <FontAwesomeIcon
                className="navigation-list-link-icon"
                icon={faWandMagicSparkles}
              />
            </div>

            <div className="navigation-list-item" onClick={() => handleLinkClick(experienceRef)}>
              <FontAwesomeIcon
                className="navigation-list-link-icon"
                icon={faBusinessTime}
              />
            </div>

            <div className="navigation-list-item" onClick={() => handleLinkClick(portfolioRef)}>
              <FontAwesomeIcon
                className="navigation-list-link-icon"
                icon={faFolderOpen}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;