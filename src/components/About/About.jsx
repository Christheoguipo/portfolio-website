import PropTypes from "prop-types";

import "swiper/css";
import "swiper/css/pagination";
import Carousel from "../common/Carousel/Carousel";
import Logo from "../common/Logo/Logo";

function About({ aboutRef }) {
  return (
    <section
      ref={aboutRef}
      id="about"
      className="flex flex-col group items-center h-full md:gap-y-4 md:py-20 bg-[var(--background)] scroll-mt-[var(--navbar-height)]"
    >
      {/* <div className="flex w-[80%] p-8 gap-16"> */}
      <div className="md:w-10/12 px-8 md:p-8">
        <p className="relative inline-block italic font-bold text-2xl md:text-3xl z-1">
          Why me?
          <span className="group-hover:h-4/12 h-4/12 md:h-1 group-hover:bg-[var(--accent)] bg-[var(--accent)] md:bg-[var(--text-accent)] group-hover:opacity-100 absolute -z-1 bottom-0 left-0 opacity-80 w-[calc(100%)] transition-all duration-300"></span>
        </p>
        <p className="text-xs md:text-base">
          I'm a dedicated software developer who values simplicity and
          performance. I build solutions with long-term maintainability in mind,
          always aiming to make both people and systems work better together.
          <span className="block pt-4">
            Whether on a team or working independently, I bring a thoughtful,
            detail-oriented approach to every project I take on.
          </span>
        </p>
      </div>

      <div className="invisible md:!visible w-10/12 h-[1px] bg-[var(--white40)] md:!mt-4 mb-8 md:!mb-16"></div>

      <div className="grid grid-rows-3 grid-cols-none pb-4 md:!pb-0 md:grid-rows-none gap-10 md:gap-0 md:grid-cols-3 bg-[var(--white10)] justify-items-center items-center md:h-28 md:w-10/12">
        <a
          className="!no-underline content-center text-center text-xs md:text-base w-30 md:w-48 h-8 md:h-12 bg-[var(--accent)] md:bg-[var(--background)] !text-[var(--text)] shadow-[0px_0px_25px_rgba(0,0,0,0.5)] 
          md:rounded-[10px] transition-all duration-200 hover:cursor-pointer hover:translate-y-[-5px] hover:shadow-[0px_0px_25px_var(--text-accent)]"
          target="_blank"
          href="./downloads/CV.pdf"
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
