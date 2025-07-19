import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";

import { useInView } from "react-intersection-observer";
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


  // const navLinkElements = document.querySelectorAll(".navigation-list-link");

  // const handleActiveNavLink = (currentSection) => {
  //   navLinkElements.forEach((navLinkElement) => {
  //     if (navLinkElement.href.includes(currentSection)) {
  //       if (document.querySelector(".active")) {
  //         document.querySelector(".active").classList.remove("active");
  //       }

  //       navLinkElement.classList.add("active");
  //     }
  //   });
  // };

  // const { ref: homeRef } = useInView({
  //   threshold: 0.5,
  //   onChange: (inView, entry) => {
  //     if (inView) {
  //       handleActiveNavLink(entry.target.id);
  //     }
  //   },
  // });

  // const { ref: aboutRef } = useInView({
  //   threshold: 0.4,
  //   onChange: (inView, entry) => {
  //     if (inView) {
  //       handleActiveNavLink(entry.target.id);
  //     }
  //   },
  // });

  // const { ref: skillsRef } = useInView({
  //   threshold: 0.4,
  //   onChange: (inView, entry) => {
  //     if (inView) {
  //       handleActiveNavLink(entry.target.id);
  //     }
  //   },
  // });

  // const { ref: experienceRef } = useInView({
  //   threshold: 0.5,
  //   onChange: (inView, entry) => {
  //     if (inView) {
  //       handleActiveNavLink(entry.target.id);
  //     }
  //   },
  // });

  // const { ref: portfolioRef } = useInView({
  //   threshold: 0.25,
  //   onChange: (inView, entry) => {
  //     if (inView) {
  //       handleActiveNavLink(entry.target.id);
  //     }
  //   },
  // });

  return (
    <main className="w-full max-w-full md:max-w-10/12 mx-auto">
      <NavBar sections={{ homeRef, aboutRef, skillsRef, experienceRef, portfolioRef }} />
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
