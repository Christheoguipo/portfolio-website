import PropTypes from "prop-types";

import "swiper/css";
import "swiper/css/pagination";

function About({ aboutRef }) {
  return (
    <section
      ref={aboutRef}
      id="about"
      className="bg-[var(--background)]"
    >
      <div className="xl:w-6/12 lg:w-8/12 w-10/12 m-[0_auto] pt-20 pb-4">
        <div>
          <div className=" text-2xl md:text-3xl font-bold text-black pb-4">
          About Me
          </div>
          <p className="text-black text-lg">
            Hey, I'm <span className="text-[var(--accent)] font-semibold">THEO</span>. I’m a software developer and I’ve always enjoyed figuring out how technology can make things easier. 
            <span className="block pt-4">
              I started out working mainly with C#, VB and MSSQL, where I built internal systems that helped automate everyday business processes. 
              These days, I’m also focusing more on web development, especially React and TypeScript, and I’ve been building projects and improving my skills 
              through <a className="hover:bg-[var(--highlight)] !no-underline !text-[var(--accent)] font-semibold"
                          href="https://www.redi-school.org/" target="_blank" rel="noopener noreferrer">ReDI School</a> and soon 
              through <a className="hover:bg-[var(--highlight)] !no-underline !text-[var(--accent)] font-semibold"
                          href="https://www.42berlin.de/" target="_blank" rel="noopener noreferrer">42Berlin</a>. 
              <span className="block pt-4">
                I like keeping things simple and building software that is actually useful and easy to maintain. I’m also someone who enjoys learning, so I’m always looking 
                for something new to improve or work on. 
              </span>
              <span className="block pt-4">
                Did I pique your interest? Download my <a className="hover:bg-[var(--highlight)] !no-underline !text-[var(--accent)] font-semibold"
                                                        target="_blank"
                                                        href="./downloads/resume.pdf"
                                                        rel="noopener noreferrer"
                                                        title="resume.pdf" >resume →
                                                      </a>
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  aboutRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default About;


