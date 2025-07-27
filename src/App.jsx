import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";

import {
  faAddressCard,
  faBusinessTime,
  faFolderOpen,
  faHouse,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import { useRef } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);

  const navItemData = [
    {
      ref: homeRef,
      icon: faHouse,
      title: "Home",
    },
    {
      ref: aboutRef,
      icon: faAddressCard,
      title: "About",
    },
    {
      ref: skillsRef,
      icon: faWandMagicSparkles,
      title: "Skills",
    },
    {
      ref: experienceRef,
      icon: faBusinessTime,
      title: "Experience",
    },
    {
      ref: portfolioRef,
      icon: faFolderOpen,
      title: "Portfolio",
    },
  ];

  return (
    <main className="relative w-full max-w-full lg:max-w-10/12 mx-auto">
      <NavBar navItemData={navItemData} />
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Experience experienceRef={experienceRef} />
      <Portfolio portfolioRef={portfolioRef} />
      <Footer />
    </main>
  );
}

export default App;
