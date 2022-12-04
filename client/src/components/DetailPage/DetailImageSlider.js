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
    <div className="max-w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={true}
        slidesPerView={1}
      >
        {detailInfo?.imageUrls?.map((el) => {
          return (
            <SwiperSlide key={el}>
              <div className="flex justify-center items-center max-w-full lg:mb-0 mb-1  sm:mx-4 mx-2">
                <img
                  className="object-cover lg:w-[500px] lg:h-[400px] lg:mx-0 mx-2 w-full h-[250px] block border-2 border-[#59AEEC] rounded-xl"
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
