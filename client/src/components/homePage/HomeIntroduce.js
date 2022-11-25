import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
/* eslint-disable */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function HomeIntroduce() {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        loop={true}
        slidesPerView={1}
        pagination={true}
        navigation={true}
      >
        {/* 첫번째 소개 페이지 */}
        <SwiperSlide>
          <div className="w-full lg:h-screen h-1/4 bg-[rgb(83,199,240)] pt-20 overflow-y: hidden; border-2">
            <div className="max-w-[1400px] h-full flex justify-between font-bold m-auto items-center">
              <div className="text-white ml-10">
                <div className="text-[rgb(83,199,240)] text-lg font-normal mb-5">
                  <span className="bg-white px-5 py-1 m-1 rounded-2xl">
                    맛집
                  </span>
                  <span className="bg-white px-5 py-1 m-1 rounded-2xl">
                    식당
                  </span>
                  <span className="bg-white px-5 py-1 m-1 rounded-2xl">
                    볼거리
                  </span>
                </div>

                <div className="lg:text-7xl font-light">
                  <div>대한민국 기차역</div>
                  <div>주변 정보가 역이요</div>
                </div>
                <div className="mt-10 font-light lg:text-xl text-xs">
                  <div>기차역 주변의 식당부터 숙소,볼거리까지</div>
                  <div> 당신의 즐거운 여행을 도와줄게요</div>
                </div>
              </div>

              <img
                src="/images/역이요소개/phone.png"
                alt="phone"
                className="lg:mr-24 lg:w-72 mr-1 w-10"
              />
            </div>
          </div>
        </SwiperSlide>
        {/* 두번째 소개 페이지 */}
        <SwiperSlide>
          <div className="w-full h-screen relative pt-14">
            <div className="max-w-6xl h-screen flex justify-between items-center font-bold m-auto z-10">
              <img
                src="/images/logo.png"
                alt="logo"
                className="absolute left-0 ml-0 w-1/3 top-7"
              />

              <img
                src="/images/역이요소개/phone.png"
                alt="phone"
                className="z-10 w-80"
              />
              <div className="text-[rgb(83,199,240)]">
                <div className="text-7xl font-semibold">역이요와 함께해요!</div>
                <div className="mt-14 ml-5 font-light text-xl">
                  <div className="text-2xl py-2">숨겨진 맛집을 찾나요?</div>
                  <div className="text-2xl py-2">
                    나의 여행 기록을 간편히 남기고 싶나요?
                  </div>
                  <div className="text-2xl py-1">
                    역이요는 정확한 장소와 후기를 제공해드려요!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 세번째 소개 페이지 */}
        <SwiperSlide>
          <div className="w-full h-screen bg-gradient-to-br from-[rgb(83,199,240)] ">
            <div className="max-w-6xl h-screen flex items-center justify-end font-bold m-auto">
              <img
                src="/images/역이요소개/phone.png"
                alt="phone"
                className="w-72"
              />

              <div className="text-white text-6xl font-semibold ml-10">
                <div className="">
                  대한민국 <span className="text-[rgb(65,152,224)]">No.1</span>
                </div>
                <div className="mt-1">위치기반 기차여행 커뮤니티</div>
              </div>
            </div>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </>
    // <>
    //   <ScrollContainer>
    //     {/* 첫번째 소개 페이지 */}
    //     <ScrollPage>
    //       <div className="w-full h-screen bg-[rgb(83,199,240)] pt-20 overflow-y: hidden; border-2">
    //         <div className="max-w-[1400px] h-full flex justify-between font-bold m-auto items-center">
    //           <div className="text-white ml-10">
    //             <div className="text-[rgb(83,199,240)] text-lg font-normal mb-5">
    //               <span className="bg-white px-5 py-1 m-1 rounded-2xl">
    //                 맛집
    //               </span>
    //               <span className="bg-white px-5 py-1 m-1 rounded-2xl">
    //                 식당
    //               </span>
    //               <span className="bg-white px-5 py-1 m-1 rounded-2xl">
    //                 볼거리
    //               </span>
    //             </div>

    //             <div className="text-7xl font-light">
    //               <div>대한민국 기차역</div>
    //               <div>주변 정보가 역이요</div>
    //             </div>
    //             <div className="mt-10 font-light text-xl">
    //               <div>기차역 주변의 식당부터 숙소,볼거리까지</div>
    //               <div> 당신의 즐거운 여행을 도와줄게요</div>
    //             </div>
    //           </div>
    //           <Animator animation={Fade()}>
    //             <img
    //               src="/images/역이요소개/phone.png"
    //               alt="phone"
    //               className="mr-24 w-72"
    //             />
    //           </Animator>
    //         </div>
    //       </div>
    //     </ScrollPage>
    //     {/* 두번째 소개 페이지 */}
    //     <ScrollPage>
    //       <div className="w-full h-screen relative pt-10">
    //         <div className="max-w-6xl h-screen flex justify-between items-center font-bold m-auto z-10">
    //           <img
    //             src="/images/logo.png"
    //             alt="logo"
    //             className="absolute left-0 ml-0 w-1/3 top-4"
    //           />

    //           <img
    //             src="/images/역이요소개/phone.png"
    //             alt="phone"
    //             className="z-10 w-80"
    //           />
    //           <div className="text-[rgb(83,199,240)]">
    //             <Animator animation={(Fade(), MoveIn(-300, 0))}>
    //               <div className="text-7xl font-semibold">
    //                 역이요와 함께해요!
    //               </div>
    //               <div className="mt-14 ml-5 font-light text-xl">
    //                 <div className="text-2xl py-2">숨겨진 맛집을 찾나요?</div>
    //                 <div className="text-2xl py-2">
    //                   나의 여행 기록을 간편히 남기고 싶나요?
    //                 </div>
    //                 <div className="text-2xl py-1">
    //                   역이요는 정확한 장소와 후기를 제공해드려요!
    //                 </div>
    //               </div>
    //             </Animator>
    //           </div>
    //         </div>
    //       </div>
    //     </ScrollPage>
    //     {/* 세번째 소개 페이지 */}
    //     <ScrollPage>
    //       <div className="w-full h-screen bg-gradient-to-br from-[rgb(83,199,240)] ">
    //         <div className="max-w-6xl h-screen flex items-center justify-end font-bold m-auto">
    //           <Animator animation={(Fade(), MoveIn(0, 360))}>
    //             <img
    //               src="/images/역이요소개/phone.png"
    //               alt="phone"
    //               className="w-72"
    //             />
    //           </Animator>
    //           <div className="text-white text-6xl font-semibold ml-10">
    //             <Animator animation={(Fade(), MoveIn(0, -360))}>
    //               <div className="">
    //                 대한민국{" "}
    //                 <span className="text-[rgb(65,152,224)]">No.1</span>
    //               </div>
    //               <div className="mt-1">위치기반 기차여행 커뮤니티</div>
    //             </Animator>
    //           </div>
    //         </div>
    //       </div>
    //     </ScrollPage>
    //   </ScrollContainer>
    // </>
  );
}
