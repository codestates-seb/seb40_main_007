import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Heart from "../../components/Heart";
import PostStarScore from "../MainPage/Posts/PostStarScore";
import { useRecoilValue } from "recoil";
import { detailData } from "../../atoms/detailPageData";
/* eslint-disable */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NeighborhoodPlace = () => {
  const detailInfo = useRecoilValue(detailData);
  const places = detailInfo.around;

  return (
    <>
      <div className="flex justify-center py-10 mb-20">
        <div className="max-w-5xl">
          <Swiper
            key="swiper"
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={false}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {places?.length !== 0 &&
              places?.map((place) => {
                return (
                  <SwiperSlide key={place.boardId}>
                    <div className="group border-2 h-[300px]">
                      <div className="rounded-md group-hover:opacity-60 relative">
                        <div className="absolute right-2">
                          <Heart />
                        </div>
                        <img
                          src={place.thumbnail}
                          alt="alt"
                          className="object-fit static w-full h-[200px]"
                        />
                        <div className=" bottom-0 right-0">
                          <PostStarScore score={place.star} />
                        </div>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="font-bold text-xl">{place.title}</div>
                        <div className="font-light text-sm text-gray-500"></div>
                      </div>
                      <div className="text-base">{place.review}</div>
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
