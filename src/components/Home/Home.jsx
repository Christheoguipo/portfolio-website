import "./Home.css";

import PropTypes from "prop-types";
import ContactIcons from "../common/ContactIcons/ContactIcons";

function Home({ homeRef }) {
  return (
    <section ref={homeRef} id="home">
      <div className="overflow-hidden relative w-full h-[calc(90dvh-7rem)]">
        <div className="absolute w-full h-full top-0 left-0 bg-linear-to-r from-[rgba(0,0,0,0.8)] from-0% via-[rgba(0,0,0,0.5)] via-30% to-[rgba(0,0,0,0)] to-100%"></div>
        <img
          src="images/theo-landscape.jpg"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute flex flex-col content-center left-[15%] top-[20%]">
          <span className="text-[var(--white80)] text-3xl">Hello, I am</span>
          <span className="text-[clamp(3rem,4rem,5rem)] leading-18 font-semibold py-4 text-[var(--white80)]">
            <span className="block">CHRISTHEO</span>
            <span className="inline-block text-transparent font-medium bg-linear-to-r from-[rgb(27,49,121)] from-0% to-[rgb(47,249,107)] to-100% bg-clip-text">
              GUIPO
            </span>
          </span>
          <span className="text-[var(--white80)] text-3xl">
            Software Developer
          </span>
          <ContactIcons />
        </div>
      </div>
    </section>
  );
}

Home.propTypes = {
  homeRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default Home;
