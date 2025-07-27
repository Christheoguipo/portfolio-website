import PropTypes from "prop-types";
import ContactIcons from "../common/ContactIcons/ContactIcons";

function Home({ homeRef }) {
  return (
    <section ref={homeRef} id="home" className="scroll-mt-20">
      <div className="overflow-hidden relative w-full h-svh">
        <picture>
          <source srcSet="/images/mobile.jpg" media="(max-width: 640px)" />
          <img
            src="/images/theo-landscape.jpg"
            className="w-full h-full object-cover md:object-center"
          />
        </picture>
        <div className="flex flex-col w-10/12 md:w-full sm:w-auto content-center sm:items-baseline absolute top-[5%] left-[50%] translate-x-[-50%] sm:translate-x-0 sm:left-[15%] sm:top-[20%]">
          <span className="text-[var(--white80)] text-base md:text-2xl xl:text-2xl">
            Hello, I am
          </span>
          <span className="text-center sm:!text-left text-[1.6rem] md:text-[3rem] xl:text-[4rem] leading-9 md:leading-13 xl:leading-18 font-semibold my-2 text-[var(--white80)]">
            <span className="inline sm:block">CHRISTHEO </span>
            <span className="text-transparent font-semibold bg-linear-to-r from-[rgb(27,49,121)] from-0% to-[rgb(47,249,107)] to-100% bg-clip-text">
              GUIPO
            </span>
          </span>
          <span className="text-[var(--white80)] text-right text-base md:text-2xl xl:text-2xl">
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
