import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

import { useInView } from 'react-intersection-observer';

function App() {

  const navLinkElements = document.querySelectorAll('.navigation-list-link');

  const handleActiveNavLink = (currentSection) => {

    navLinkElements.forEach(navLinkElement => {
      if (navLinkElement.href.includes(currentSection)) {
        if (document.querySelector('.active')) {
          document.querySelector('.active').classList.remove('active');
        }

        navLinkElement.classList.add('active');
      }
    });
  }

  const { ref: homeRef } = useInView({
    threshold: 0.30,
    onChange: (inView, entry) => {
      if (inView) {
        handleActiveNavLink(entry.target.id);
      }
    }
  });

  const { ref: aboutRef } = useInView({
    threshold: 0.30,
    onChange: (inView, entry) => {
      if (inView) {
        handleActiveNavLink(entry.target.id);
      }
    }
  });

  const { ref: projectsRef } = useInView({
    threshold: 0.30,
    onChange: (inView, entry) => {
      if (inView) {
        handleActiveNavLink(entry.target.id);
      }
    }
  });

  const { ref: contactRef } = useInView({
    threshold: 0.30,
    onChange: (inView, entry) => {
      if (inView) {
        handleActiveNavLink(entry.target.id);
      }
    }
  });

  return (
    <main>
      <NavBar />

      <Home homeRef={homeRef} />

      <About aboutRef={aboutRef} />

      <Projects projectsRef={projectsRef} />

      <Contact contactRef={contactRef} />

    </main>
  )
}

export default App
