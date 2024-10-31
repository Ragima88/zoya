import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./slider.scss";
import Image from "../Image/Image";
import BlogIn from "../BlogIn/BlogIn";

const Slider = ({ slider }) => {
  return (
    <Swiper
      className={"slider"}
      modules={[Navigation, Autoplay]}
      navigation
      centeredSlides={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={10}
      breakpoints={{
        1440: { slidesPerView: 3 },
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        320: { slidesPerView: 1 },
      }}
    >
      {slider.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="slider-item">
            <Image src={item.src} />
            <div className="overlay"></div>
            <BlogIn
              className={"slider-blog"}
              name={item.name}
              title={item.title}
              date={item.date}
              author={item.author}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
