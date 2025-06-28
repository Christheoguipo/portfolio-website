import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import "./Carousel.css";

const data = [
  { years: "9", text: "Years in Software Development" },
  { years: "5", text: "Years in C# and MSSQL" },
  { years: "2", text: "Years in VB .Net and MSSQL" },
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
          <span className="years">
            {data.years}
            <span className="plus">+</span>
          </span>
          <span className="slide-text">{data.text}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
