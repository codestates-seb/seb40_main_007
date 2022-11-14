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
      <div className="flex justify-center py-10">
        <div className="max-w-5xl">
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={5}
            scrollbar={{ draggable: true }}
            pagination={{ clickable: true }}
          >
            {places.map((place) => {
              return (
                <SwiperSlide key={place.id}>
                  <div className="group pb-10">
                    <div className="rounded-md group-hover:opacity-60">
                      <img
                        src="/images/oyster.png"
                        alt="alt"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default NeighborhoodPlace;
