import PropTypes from "prop-types";
import "./About.css";

import "swiper/css";
import "swiper/css/pagination";
import Carousel from "../common/Carousel/Carousel";
import Logo from "../common/Logo/Logo";

function About({ aboutRef }) {
  return (
    <section
      ref={aboutRef}
      id="about"
      className="flex flex-col items-center h-full gap-y-4 py-20 bg-[var(--background)]"
    >
      {/* <div className="flex w-[80%] p-8 gap-16"> */}
      <div className="w-[80%] p-8">
        <p className="italic font-bold text-3xl">Why me?</p>
        <p>
          I'm a dedicated software developer who values simplicity and
          performance. I build solutions with long-term maintainability in mind,
          always aiming to make both people and systems work better together.
          <span className="block pt-4">
            Whether on a team or working independently, I bring a thoughtful,
            detail-oriented approach to every project I take on.
          </span>
        </p>
      </div>

      <div className="w-[80%] h-[1px] bg-[var(--white40)] mt-4 mb-16"></div>

      <div className="grid grid-cols-3 bg-[var(--white10)] justify-items-center items-center h-28 w-[80%]">
        <a
          className="!no-underline content-center text-center w-48 h-12 bg-[var(--background)] !text-[var(--text)] shadow-[0px_0px_25px_rgba(0,0,0,0.5)] rounded-[10px] transition-all duration-200 hover:cursor-pointer hover:translate-y-[-5px] hover:shadow-[0px_0px_25px_var(--text-accent)]"
          target="_blank"
          href="/downloads/CV.pdf"
          rel="noopener noreferrer"
          title="CV.pdf"
        >
          Download CV
        </a>
        <Logo size="md" />
        <Carousel />
      </div>
    </section>
  );
}

About.propTypes = {
  aboutRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default About;
