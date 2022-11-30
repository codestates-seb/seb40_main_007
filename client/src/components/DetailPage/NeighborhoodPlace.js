import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// import { Link } from "react-router-dom";
import PostStarScore from "../MainPage/Posts/PostStarScore";
import { useRecoilValue } from "recoil";
import { detailData } from "../../atoms/detailPageData";
import { useState } from "react";
/* eslint-disable */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NeighborhoodPlace = () => {
  const detailInfo = useRecoilValue(detailData);
  const places = detailInfo.around;
  // console.log("places", places.boardId);
  const [viewStyle, setViewStyle] = useState(3);

  return (
    <>
      <div className="flex justify-center py-10 lg:mb-20 mb-10">
        <div className="lg:max-w-5xl w-full lg:px-0 px-2">
          <div className="lg:pt-3 pt-3 lg:mb-10 mb-5 font-semibold border-b-2 border-[rgb(83,199,240)] w-fit lg:px-5 px-3 pb-2 lg:ml-0 ml-2 lg:text-lg text-sm text-[rgb(83,199,240)]">
            동상이몽
          </div>
          <Swiper
            key="swiper"
            slidesPerView={3}
            spaceBetween={10}
            slidesPerGroup={3}
            loop={false}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="w-[1024px]"
          >
            {places?.length !== 0 &&
              places?.map((place) => (
                <SwiperSlide key={place.boardId}>
                  <div className="group border-2 lg:h-[300px] h-[180px] w-fit rounded-lg">
                    <a href={`/detail/${place.boardId}`}>
                      <div className="rounded-md group-hover:opacity-60 relative w-fit">
                        <img
                          src={place.thumbnail}
                          alt="alt"
                          className="object-fit static lg:h-[200px] lg:w-[280px] h-[100px] w-[180px] rounded-t-md"
                        />
                        <div className=" bottom-0 right-0 w-fit">
                          <PostStarScore score={place.star} />
                        </div>
                      </div>
                      <div className="font-bold lg:text-xl text-sm">
                        {place.title}
                      </div>
                      <div className="lg:text-base text-xs">{place.review}</div>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default NeighborhoodPlace;
