import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
/* eslint-disable */
import "swiper/css";
import "swiper/css/navigation";

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
    >
      <SwiperSlide>
        <img
          className="object-fill"
          src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
          alt="image slide 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-fill"
          src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
          alt="image slide 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-fill"
          src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
          alt="image slide 3"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
