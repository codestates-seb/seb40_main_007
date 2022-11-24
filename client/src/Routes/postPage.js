/* eslint-disable */
import Header from "../components/Header";
import PostTrainStationSelect from "../components/PostPage/PostTrainStationSelect";
import StartRating from "../components/StarRating";
import OnlineInput from "../components/OneLineInput";
import PostMap from "../components/PostPage/PostMap";
import ImageUpload from "../components/ImageUpload";
import PostCategoryTabs from "../components/PostPage/PostCategoriTabs";
import PostRelatedTab from "../components/PostPage/PostRelatedTab";
import PostRelatedAtmasTab from "../components/PostPage/postRelatedAtmasTab";
import Footer from "../components/Footer";
import ListTag from "../components/tag/ListTag";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import axios from "axios";
import { accessToken } from "../atoms/loginTest";
import {
  postTrainStationState,
  postpostionState,
  postAdressState,
  postTitleState,
  postCategoryState,
  postRelatedState,
  postRelatedAtmasState,
  postRelatedPriceState,
  postStarState,
  postCommentState,
} from "../atoms/postInfo";

//이미지 테스트
import ImageTest from "../components/ImageTest";

export default function PostPage() {
  const postTrainStation = useRecoilValue(postTrainStationState);
  const postionState = useRecoilValue(postpostionState);
  const postAdress = useRecoilValue(postAdressState);
  const postTitle = useRecoilValue(postTitleState);
  const postCategory = useRecoilValue(postCategoryState);
  const postRelated = useRecoilValue(postRelatedState);
  const postRelatedAtmas = useRecoilValue(postRelatedAtmasState);
  const postRelatedPrice = useRecoilValue(postRelatedPriceState);
  const postStar = useRecoilValue(postStarState);
  const postComment = useRecoilValue(postCommentState);
  const TOKEN = useRecoilValue(accessToken);

  const atmasTagId = postRelatedAtmas.map((el) => tagList[el]);
  console.log(atmasTagId);
  const finalUpLoadJson = {
    //application/json
    title: postTitle,
    review: postComment,
    star: postStar,
    latitude: postionState.lat,
    longitude: postionState.lng,
    stationId: postTrainStation,
    categoryId: categoryList[postCategory],
    address: postAdress,
    tags: [tagList[postRelated], ...atmasTagId, tagList[postRelatedPrice]],
  };

  const categoryList = { 식당: 1, 볼거리: 2, 숙소: 3 };
  const tagList = {
    한식: 1,
    중식: 2,
    양식: 3,
    일식: 4,
    분식: 5,
    디저트: 6,
    호텔: 7,
    모텔: 8,
    펜션: 9,
    캠핑: 10,
    게하: 11,
    자연: 12,
    문화: 13,
    유적: 14,
    공연: 15,
    놀거리: 16,
    무료: 21,
    "만원 이하": 22,
    "2만원 이하": 23,
    "3만원 이하": 25,
    "4만원 이하": 26,
    "5만원 이하": 29,
    "5만원 초과": 30,
    "10만원 이하": 31,
    "15만원 이하": 33,
    "20만원 이하": 34,
    "20만원 초과": 35,
    아늑한: 41,
    활기찬: 42,
    정겨운: 43,
    깔끔한: 44,
    "뷰가 좋은": 45,
  };

  const [preveiwUrl, setPreviewUrl] = useState(); //미리보기 이미지
  const jsonData = {
    title: "배고파서",
    review: "몽쉘하나먹음",
    star: 3.5,
    latitude: 37.55345694428185,
    longitude: 126.97383501554378,
    stationId: 3,
    categoryId: 1,
    address: "우리",
    tags: [2, 24, 41, 43, 44, 45],
  };

  const [file, setFile] = useState(); //form데이터 파일

  const insertImg = (e) => {
    let fileImage = e.target.files[0];
    console.log("e.target.files[0]", fileImage);
    let reader = new FileReader(); // 파일 읽기
    if (fileImage) {
      reader.readAsDataURL(fileImage);
    }
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };

    const data = new FormData();
    data.append("files", fileImage);
    data.append("files", fileImage);
    data.append("files", fileImage);
    data.append("files", fileImage);

    data.append(
      "data",
      new Blob([JSON.stringify(jsonData)], {
        type: "application/json",
      })
    ); // { contentType: "application/json" }
    for (var value of data.values()) {
      console.log(value);
    }
    setFile(data); // 폼데이터 useState로 저장
  };

  const onPostSubmitTWO = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: TOKEN,
        // "content-type": "multipart/form-data",
      },
    };
    axios
      .post(
        `http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/boards/`,
        file,
        config
      )
      .then(function (response) {
        // -- 이 200일 경우
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <div className="pb-30 max-w-5xl m-auto">
        <PostTrainStationSelect />
        <PostMap />

        <ImageUpload />
        {/* 이미지 테스트 */}
        <div className="mb-10">
          단일테스트용
          <form>
            <label htmlFor="file">이미지업로드</label>
            <input
              type="file"
              id="file"
              accept="image/jpg, image/png, image/jpeg, image/png, image/heif, image/heic"
              onChange={(e) => insertImg(e)}
            />
          </form>
          {preveiwUrl && <img src={preveiwUrl} alt="img" />}
        </div>
        <div>여러개 테스트용</div>
        <ImageTest />

        <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 pt-2 text-18 text-[rgb(83,199,240)] mt-16">
          별점
        </div>
        <div className="flex justify-center m-auto">
          <StartRating />
        </div>
        <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 my-16 text-18 text-[rgb(83,199,240)] ">
          관련태그
        </div>
        <div className="mb-5 w-fit m-auto sm:ml-56">
          <PostCategoryTabs />
          <PostRelatedTab />
          <PostRelatedAtmasTab />
          <ListTag />
        </div>

        <OnlineInput />
      </div>
      <div className="flex justify-center">
        <button
          className="bg-gray-400 w-fit m-auto text-white py-3 px-5 rounded-lg hover:bg-[rgb(83,199,240)] my-32"
          onClick={(e) => onPostSubmitTWO(e)}
        >
          작성완료
        </button>
      </div>
      <Footer />
    </>
  );
}
// data: {
//   title: postTitle,
//   review: postComment,
//   star: postStar,
//   latitude: postionState.lat,
//   longitude: postionState.lng,
//   stationId: 1,
//   // 위 번호로 줘야 함..
//   categoryId: 2,
//   tags: tagsList,
//   //카테고리 아이디도 번호로 줘야함
//   address: postAdress,
// },
