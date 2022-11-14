import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

/* eslint-disable */
import "swiper/css";
import "swiper/css/pagination";

const NeighborhoodPlace = () => {
  const places = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
  ];

  return (
    <>
      <div className="xs:w-[480px] sm:w-[640px] md:w-[768px] lg:w-[1024px]">
        <div className="mb-5 py-5">
          <span className="text-lg text-[rgb(83,199,240)] border-b-2 border-b-[rgb(83,199,240)] px-3 py-1">
            주변정보
          </span>
        </div>
        <Swiper
          modules={[Pagination]}
          slidesPerView={5}
          spaceBetween={8}
          pagination={{ clickable: true }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {places.map((place) => {
            return (
              <SwiperSlide key={place.id}>
                <div className="group pb-10">
                  <div className="rounded-md group-hover:opacity-60">
                    <img
                      src="/images/oyster.png"
                      alt="alt"
                      className="object-fit"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default NeighborhoodPlace;
