import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// import Heart from "../../components/Heart";
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

  const [viewStyle, setViewStyle] = useState(3);

  return (
    <>
      <div className="flex justify-center py-10 mb-20">
        <div className="max-w-5xl">
          <Swiper
            key="swiper"
            slidesPerView={1}
            spaceBetween={10}
            slidesPerGroup={3}
            loop={false}
            // loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            // className="mySwiper"
          >
            {places?.length !== 0 &&
              places?.map((place) => (
                <SwiperSlide key={place.boardId}>
                  <div className="group border-2 h-[300px] w-fit">
                    <div className="rounded-md group-hover:opacity-60 relative w-fit">
                      <img
                        src={place.thumbnail}
                        alt="alt"
                        className="object-fit static h-[200px] w-fit"
                      />
                      <div className=" bottom-0 right-0 w-fit">
                        <PostStarScore score={place.star} />
                      </div>
                    </div>
                    <div className="flex justify-between items-end w-fit">
                      <div className="font-bold text-xl w-fit ">
                        {place.title}
                      </div>
                      <div className="font-light text-sm text-gray-500 w-fit"></div>
                    </div>
                    <div className="text-base w-fit">{place.review}</div>
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
