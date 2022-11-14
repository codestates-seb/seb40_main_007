import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

/* eslint-disable */
import "swiper/css";
import "swiper/css/pagination";

const DetailImageSlider = () => {
  return (
    <div className="flex justify-center items-center my-10">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <img
              className="object-cover block w-[420px] h-[475px] py-10"
              src="/images/oyster.png"
              alt="image slide 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <img
              className="object-cover block w-[420px] h-[475px] py-10"
              src="/images/oyster.png"
              alt="image slide 1"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DetailImageSlider;
