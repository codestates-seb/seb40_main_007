import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Heart from "../../components/Heart";
import PostStarScore from "../MainPage/Posts/PostStarScore";

/* eslint-disable */
import "swiper/css";
import "swiper/css/pagination";

const NeighborhoodPlace = () => {
  const score = 4;
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
                  <div className="group">
                    <div className="rounded-md group-hover:opacity-60 relative pb-10">
                      <div className="absolute right-2">
                        <Heart />
                      </div>
                      <img
                        src="/images/oyster.png"
                        alt="alt"
                        className="object-fit static"
                      />
                      <PostStarScore score={score} />
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
