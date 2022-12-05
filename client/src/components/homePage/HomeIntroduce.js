import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
/* eslint-disable */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function HomeIntroduce() {
  const scrollHandler = () => {
    window.scrollTo({
      top: 900,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        loop={true}
        slidesPerView={1}
        pagination={true}
        navigation={true}
        className="w-full lg:h-screen h-[300px] border"
      >
        {/* 첫번째 소개 페이지 */}
        <SwiperSlide>
          <div className="lg:w-full lg:h-screen h-[300px] bg-[rgb(83,199,240)] lg:pt-20 overflow-y border-2 lg:text:base text-[8px]">
            <div className="lg:max-w-[1400px] h-full flex lg:justify-between justify-center font-bold m-auto items-center lg:mt-0 mt-5">
              <div className="text-white lg:ml-10 ml-2 lg:mr-0 mr-5">
                <div className="text-[rgb(83,199,240)] lg:text-lg lg:font-semibold font-light mb-5">
                  <span className="bg-white lg:px-5 lg:py-1 lg:rounded-2xl m-[2px] p-[2px] rounded-md">
                    식당
                  </span>
                  <span className="bg-white lg:px-5 lg:py-1 lg:rounded-2xl m-[2px] p-[2px] rounded-md">
                    숙소
                  </span>
                  <span className="bg-white lg:px-5 lg:py-1 lg:rounded-2xl m-[2px] p-[2px] rounded-md">
                    볼거리
                  </span>
                </div>

                <div className="lg:text-6xl text-xs font-light">
                  <div>대한민국 기차역</div>
                  <div className="lg:mt-4">
                    <span className="relative">
                      주변 정보가
                      <span className="w-full lg:text-7xl text-xs italic font-[Tenada] lg:ml-2 ml-[1px] lg:mt-1 mt-[2px] absolute ">
                        역이요
                      </span>
                    </span>
                  </div>
                </div>
                <div className="lg:mt-10 mt-5 lg:ml-2 font-light lg:text-xl text-xs">
                  <div>기차역 주변의 식당부터 숙소,볼거리까지</div>
                  <div>당신의 즐거운 여행을 도와줄게요</div>
                </div>
              </div>

              <img
                src="/images/역이요소개/phone2.png"
                alt="phone"
                className="lg:mr-40 lg:w-72 mr-1 w-20"
              />
              <div
                onClick={scrollHandler}
                className="fixed w-22 lg:bottom-10 bottom-6 left-1/2 lg:-ml-[18px] -ml-[14px] text-[rgba(256,256,256,0.7)] hover:scale-125 hover:text-[rgba(256,256,256,0.7)]"
              >
                <HiOutlineChevronDoubleDown className="lg:animate-bounce m-auto lg:w-10 lg:h-10 w-3 h-3" />
                <div className="lg:text-sm text-[5px]">Scroll!</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 두번째 소개 페이지 */}
        <SwiperSlide>
          <div className="w-full lg:h-screen h-[300px] relative pt-5">
            <div className="lg:max-w-6xl lg:h-screen h-[300px] flex lg:justify-between justify-center items-center font-bold lg:m-auto z-10 mx-2">
              <img
                src="/images/logo.png"
                alt="logo"
                className="absolute left-0 ml-0 w-1/3 lg:top-7 top-16"
              />

              <img
                src="/images/역이요소개/phone1.png"
                alt="phone"
                className="z-10 lg:w-80 w-20"
              />
              <div className="text-[rgb(83,199,240)] mr-2 lg:ml-0 ml-5">
                <div className="lg:text-7xl text-lg font-semibold italic font-[Tenada] lg:ml-0 ml-3">
                  역이요와 함께해요!
                </div>
                <div className="lg:mt-12 lg:ml-5 ml-3 lg:font-semibold font-light lg:text-xl text-xs">
                  <div className="lg:text-2xl lg:py-2">
                    숨겨진 맛집을 찾나요?
                  </div>
                  <div className="lg:text-2xl lg:py-2">
                    나의 여행 기록을 간편히 남기고 싶나요?
                  </div>
                  <div className="lg:text-2xl lg:py-1">
                    역이요는 정확한 장소와 후기를 제공해드려요!
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={scrollHandler}
              className="fixed w-22 lg:bottom-10 bottom-6 left-1/2 lg:-ml-[18px] -ml-[14px] text-[rgba(83,199,240,0.7)] hover:scale-125 hover:text-[rgba(83,199,240,0.8)]"
            >
              <HiOutlineChevronDoubleDown className="lg:animate-bounce m-auto lg:w-10 lg:h-10 w-3 h-3" />
              <div className="lg:text-sm text-[5px]">Scroll!</div>
            </div>
          </div>
        </SwiperSlide>
        {/* 세번째 소개 페이지 */}
        <SwiperSlide>
          <div className="w-full lg:h-screen h-[300px] lg:mt-0 mt-5 bg-gradient-to-br from-[rgb(83,199,240)] ">
            <div className="w-fit lg:h-screen h-[300px] flex items-center justify-center font-bold m-auto -500">
              <img
                src="/images/역이요소개/phone3.png"
                alt="phone"
                className="lg:w-[270px] w-[75px]"
              />
              <img
                src="/images/역이요소개/phone6.png"
                alt="phone"
                className="lg:w-72 w-20 absoulte lg:-ml-24 -ml-5"
              />
              <div className="text-white lg:text-6xl text-lg font-semibold lg:ml-16 ml-5">
                <div className="">
                  대한민국
                  <span className="text-[rgb(65,152,224)] italic font-[Tenada]">
                    No.1
                  </span>
                </div>
                <div className="mt-1">
                  <span>기차여행 커뮤니티</span>
                  <span className="w-full lg:text-7xl text-lg italic font-[Tenada] lg:ml-2 ml-1 lg:mt-1 mt-[1.5px] text-[rgb(65,152,224)]">
                    역이요
                  </span>
                </div>
              </div>
            </div>
            <div
              onClick={scrollHandler}
              className="fixed w-22 lg:bottom-10 bottom-6 left-1/2 lg:-ml-[18px] -ml-[14px] text-[rgba(65,152,224,0.7)] hover:scale-125 hover:text-[rgba(65,152,224,0.8)]"
            >
              <HiOutlineChevronDoubleDown className="lg:animate-bounce m-auto lg:w-10 lg:h-10 w-3 h-3" />
              <div className="lg:text-sm text-[5px]">Scroll!</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
