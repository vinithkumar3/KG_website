import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./home.css";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import Logo from "../../assets/logofull.jpeg";
import Quotes1 from "../../assets/quotes-1.jpeg";
import Quotes3 from "../../assets/quotes-3.jpg";
import Quotes5 from "../../assets/quotes-5.jpg";
import Quotes4 from "../../assets/quotes-6.webp";
const data = [
  {
    id: 1,
    image: Logo,
  },
  {
    id: 2,
    image: Quotes1,
  },
  {
    id: 3,
    image: Quotes3,
  },
  {
    id: 4,
    image: Quotes4,
  },
  {
    id: 5,
    image: Quotes5,
  },
];

const Home = () => {
  return (
    <section id="home" className="home container section">
      <Swiper
        className="home___container grid"
        modules={[Pagination, Autoplay]} // Add Autoplay module
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }} // Set autoplay delay (in milliseconds)
      >
        {data.map(({ id, image }) => {
          return (
            <SwiperSlide className="home___item" key={id}>
              <div className="thumb1">
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Home;
