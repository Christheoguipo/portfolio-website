import NavBarContainer from "./components/NavBar/NavBarContainer";
import About from "./components/About/About";

import {
  faBusinessTime,
  faFolderOpen,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import { useRef, useState } from "react";

function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);

  const navItemData = [
    {
      ref: aboutRef,
      icon: faHouse,
      title: "About Me",
    }, 
    {
      ref: experienceRef,
      icon: faBusinessTime,
      title: "Timeline",
    },
    {
      ref: portfolioRef,
      icon: faFolderOpen,
      title: "Portfolio",
    },
  ];

  
  const [showMenu, setShowMenu] = useState(false);

  return (
  <main className="relative md:flex bg-[#222] h-screen">
      <div className={`flex flex-col md:relative fixed bg-[#222] md:w-auto w-full md:top-auto top-0 z-100 md:h-full h-screen"} `}>
        <NavBarContainer navItemData={navItemData} showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <div className="md:flex-1 overflow-y-auto">
        <About aboutRef={aboutRef} />
        <Experience experienceRef={experienceRef} />
        <Portfolio portfolioRef={portfolioRef} />
      </div>
    </main>
  );
}

export default App;
