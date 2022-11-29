// import Header from "../components/Header";
// import TrainStationSelect from "../components/TrainStationSelect";
// import StartRating from "../components/StarRating";
// import PostOneLineInput from "../components/PostPage/PostOneLineInput";
// import PostMap from "../components/PostPage/PostMap";
// import ImageUpload from "../components/ImageUpload";
// import PostCategoryTabs from "../components/PostPage/PostCategoryTabs";
// import PostRelatedTab from "../components/PostPage/PostRelatedTab";
// // import PostRelatedAtmasTab from "../components/PostPage/postRelatedAtmasTab";
// // import PostRelatedPriceTab from "../components/PostPage/postRelatedPriceTab";
// import Footer from "../components/Footer";
// import ListTag from "../components/tag/ListTag";

// export default function PostEditPage() {
//   return (
//     <>
//       <Header />
//       <div className="pb-32 max-w-5xl m-auto">
//         <div className="pt-24">
//           <TrainStationSelect />
//         </div>
//         <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 text-18 text-[rgb(83,199,240)] mt-16">
//           위치 등록
//         </div>
//         <PostMap />
//         <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 text-18 text-[rgb(83,199,240)] my-16">
//           사진 등록
//         </div>
//         <div className="flex justify-center items-center m-auto">
//           <ImageUpload />
//         </div>
//         <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 text-18 text-[rgb(83,199,240)] my-16">
//           별점
//         </div>
//         <div className="flex justify-center m-auto">
//           <StartRating />
//         </div>
//         <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 mb-7 text-18 text-[rgb(83,199,240)] ">
//           관련태그
//         </div>
//         <div className="mb-5 w-fit m-auto">
//           <div className="font-bold flex items-center">
//             <span className="mr-12">카테고리</span> <PostCategoryTabs />
//           </div>
//           <div className="font-bold flex items-center ">
//             <span className="mr-9">관련 태그</span>
//             <PostRelatedTab />
//           </div>
//           <div className="font-bold flex items-center">
//             <span className="mr-14">분위기</span>
//             <ListTag
//               tagList={["아늑한", "활기찬", "정겨운", "깔끔한", "뷰가좋은"]}
//             />
//             {/* <PostRelatedAtmasTab /> */}
//           </div>
//           <div className="font-bold flex items-center">
//             <span className="mr-14">가격대</span>
//             <ListTag
//               tagList={["값싼", "가성비", "적절한", "조금비싼", "매우비싼"]}
//             />
//             {/* <PostRelatedPriceTab /> */}
//           </div>
//         </div>

//         {/* 한줄평 */}
//         <PostOneLineInput />
//       </div>
//       <div className="bg-gray-400 w-fit m-auto text-white py-3 px-5 rounded-lg hover:bg-[rgb(83,199,240)] mb-20">
//         작성완료
//       </div>
//       <Footer />
//     </>
//   );
// }
