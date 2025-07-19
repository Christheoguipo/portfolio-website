import "./Home.css";

import PropTypes from "prop-types";
import ContactIcons from "../common/ContactIcons/ContactIcons";

function Home({ homeRef }) {
  return (


    // .info {
    //   position: absolute;
    //   display: flex;
    //   left: 15%;
    //   top: 20%;
    //   flex-direction: column;
    //   justify-content: center;
    // }

  //   color: var(--white80);
  // font-weight: 400;


//   .meta {
//   font-size: 2rem;
// }

// .name {
//   font-size: clamp(3rem, 4rem, 5rem);
//   font-weight: bold;
//   line-height: 1.3;
//   inline-size: min-content;
//   padding: 1rem 0;
// }

// .name>span {
//   background: linear-gradient(to right,
//       rgb(27, 49, 121) 0%,
//       rgb(47, 249, 107) 100%);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   color: transparent;
// }

    <section ref={homeRef} id="home" >
      <div className="overflow-hidden relative w-full h-[calc(90dvh-7rem)]">
        <div className="absolute w-full h-full top-0 left-0 bg-linear-to-r from-[rgba(0,0,0,0.8)] from-0% via-[rgba(0,0,0,0.4)] via-30% to-[rgba(0,0,0,0)] to-100%"></div>
        <img src="images/theo-landscape.jpg" className="w-full h-full object-cover object-center" />
        <div className="absolute flex flex-col content-center left-[15%] top-[20%]">
          <span className="text-[var(--white80)] font-medium">Hello, I am</span>
          <span className="name text-[var(--white80)] font-medium">
            CHRISTHEO <span className="text-[var(--white80)] font-medium">GUIPO</span>
          </span>
          <span className="meta text-[var(--white80)] font-medium">Software Developer</span>
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
