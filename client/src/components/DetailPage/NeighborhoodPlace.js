import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// import { Link } from "react-router-dom";
import PostStarScore from "../MainPage/Posts/PostStarScore";
import { useRecoilValue } from "recoil";
import { detailData } from "../../atoms/detailPageData";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
/* eslint-disable */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NeighborhoodPlace = () => {
  const navigate = useNavigate();
  const detailInfo = useRecoilValue(detailData);
  const places = detailInfo.around;
  const [style, setStyle] = useState("20");

  const windowResize = () => {
    // 맵 스타일 변경
    if (window.innerWidth >= 1024) {
      setStyle("20");
    } else {
      setStyle("14");
    }
  };
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setStyle("20");
    } else {
      setStyle("14");
    }
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

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
            className="lg:w-[1024px] w-500px"
          >
            {places?.length !== 0 &&
              places?.map((place) => (
                <SwiperSlide key={place.boardId}>
                  <div className="group border-2 lg:h-[300px] h-[180px] w-fit rounded-lg">
                    <div className="rounded-md group-hover:opacity-60 w-fit">
                      <img
                        onClick={() => navigate(`/detail/${place.boardId}`)}
                        src={place.thumbnail}
                        alt="alt"
                        className="object-fit static lg:h-[200px] lg:w-[280px] h-[100px] w-[180px] rounded-t-md"
                      />
                      <div className=" pl-1 pt-1">
                        <PostStarScore score={place?.star} style={style} />
                      </div>
                    </div>
                    <div className="font-bold lg:text-xl text-xs pl-1">
                      {place.title}
                    </div>
                    <div className="lg:text-base text-[10px] pl-1">
                      {place.review}
                    </div>
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
