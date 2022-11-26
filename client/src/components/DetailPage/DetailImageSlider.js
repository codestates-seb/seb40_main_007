import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
/* eslint-disable */
import "swiper/css";
import "swiper/css/navigation";
import { useRecoilValue } from "recoil";
import { detailData } from "../../atoms/detailPageData";

const DetailImageSlider = () => {
  const detailInfo = useRecoilValue(detailData);

  return (
    <div className="flex justify-center items-center">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={true}
        slidesPerView={1}
      >
        {detailInfo?.imageUrls?.map((el) => {
          return (
            <SwiperSlide key={el}>
              <div className="flex justify-center items-center">
                <img
                  className="object-cover w-[500px] h-[480px] block py-10"
                  src={el}
                  alt={el}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default DetailImageSlider;
