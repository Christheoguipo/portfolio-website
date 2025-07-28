import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import "./Carousel.css";

const data = [
  { years: "9", text: "Years in Software Development" },
  { years: "5", text: "Years in C# with MSSQL" },
  { years: "2", text: "Years in VB .Net with MSSQL" },
  { years: "1", text: "Years in Web Development" },
];

function Carousel() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {data.map((data, index) => (
        <SwiperSlide key={index}>
          <span className="text-3xl md:text-5xl font-semibold md:ml-4 leading-8 md:text-right">
            {data.years}
            <span className="md:font-normal md:text-4xl text-[var(--text-accent)]">
              +
            </span>
          </span>
          <span className="max-w-30 md:max-w-38 inline-block text-xs md:text-base text-left">
            {data.text}
          </span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
