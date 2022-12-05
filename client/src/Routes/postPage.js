/* eslint-disable */
import Header from "../components/Header";
import PostTrainStationSelect from "../components/PostPage/PostTrainStationSelect";
import StartRating from "../components/StarRating";
import PostOneLineInput from "../components/PostPage/PostOneLineInput";
import PostMap from "../components/PostPage/PostMap";
import ImageUpload from "../components/ImageUpload";
import PostCategoryTabs from "../components/PostPage/PostCategoryTabs";
import PostRelatedTab from "../components/PostPage/PostRelatedTab";
import PostRelatedAtmasTab from "../components/PostPage/postRelatedAtmasTab";
import Footer from "../components/Footer";
import ListTag from "../components/tag/ListTag";
import { useRecoilValue, useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { accessToken } from "../atoms/loginData";
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
  postImageState,
} from "../atoms/postInfo";
import TrainLoading from "../components/TrainLoading";

export default function PostPage() {
  //로딩창
  const [loading, setLoading] = useState(false);

  const navigatge = useNavigate();
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
    "3만원 이하": 24,
    "4만원 이하": 25,
    "5만원 이하": 26,
    "5만원 초과": 27,
    "10만원 이하": 28,
    "15만원 이하": 29,
    "20만원 이하": 30,
    "20만원 초과": 31,
    아늑한: 41,
    활기찬: 42,
    정겨운: 43,
    깔끔한: 44,
    "뷰가 좋은": 45,
  };
  const categoryList = { 식당: 1, 볼거리: 2, 숙소: 3 };

  const TOKEN = useRecoilValue(accessToken);
  const [postTrainStation, setPostTrainStation] = useRecoilState(
    postTrainStationState
  );
  const postionState = useRecoilValue(postpostionState);
  const [postAdress, setPostAdress] = useRecoilState(postAdressState);
  const [postTitle, setPostTitle] = useRecoilState(postTitleState);
  const [postCategory, setPostCategory] = useRecoilState(postCategoryState);
  const [postRelated, setPostRelated] = useRecoilState(postRelatedState);
  const [postRelatedAtmas, setPostRelatedAtmas] = useRecoilState(
    postRelatedAtmasState
  );
  const [postRelatedPrice, setPostRelatedPrice] = useRecoilState(
    postRelatedPriceState
  );
  const [postStar, setPostStar] = useRecoilState(postStarState);
  const [postComment, setPostComment] = useRecoilState(postCommentState);
  const [postImageList, setPostImageList] = useRecoilState(postImageState);
  let atmasTagId = [...postRelatedAtmas].map((el) => tagList[el]);

  const [uploadFormData, setUpLoadFormData] = useState(""); //form데이터 파일
  const [disable, setDisable] = useState(false); //제출 버튼 비활성화

  const onSubmit = () => {
    setDisable(true);
    setLoading(true);
    let finalUpLoadJson = {
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
    console.log("완료시점", finalUpLoadJson);

    const formData = new FormData();
    for (const file of postImageList) {
      formData.append("files", file);
    }

    formData.append(
      "data",
      new Blob([JSON.stringify(finalUpLoadJson)], {
        type: "application/json",
      })
    );
    if (postTrainStation === "") {
      swal("Please Check!", "기차역을 선택해 주세요", "info");
      setDisable(false);
      setLoading(false);
      return;
    } else if (postAdress === "") {
      swal("Please Check!", "주소를 선택해 주세요", "info");
      setDisable(false);
      setLoading(false);
      return;
    } else if (postTitle === "") {
      swal("Please Check!", "제목 입력해 주세요", "info");
      setDisable(false);
      setLoading(false);
      return;
    } else if (postStar === 0) {
      swal("Please Check!", "별점을 입력해 주세요", "info");
      setDisable(false);
      setLoading(false);
      return;
    } else if (postImageList.length === 0) {
      swal("Please Check!", "사진을 업로드해 주세요", "info");
      setDisable(false);
      setLoading(false);
      return;
    } else if (postCategory === "") {
      swal("Please Check!", "카테고리를 입력해 주세요", "info");
      setDisable(false);
      setLoading(false);
      return;
    } else if (postRelated === "") {
      swal("Please Check!", "관련태그를 입력해 주세요", "info");
      setDisable(false);
      setLoading(false);
      return;
    } else if (postComment === "") {
      swal("Please Check!", "한줄평을 입력해 주세요", "info");
      setDisable(false);
      setLoading(false);
      return;
    } else {
      setUpLoadFormData(formData);
    }
    // 폼데이터 useState로 저장
  };

  useEffect(() => {
    if (uploadFormData !== "") {
      const config = {
        headers: {
          Authorization: TOKEN,
          "content-type": "multipart/form-data",
        },
      };
      axios
        .post(`${process.env.REACT_APP_URL}/boards/`, uploadFormData, config)
        .then(() => {
          // -- 이 200일 경우
          swal("Thank you", "작성 완료되었습니다", "success");
          setPostAdress("");
          setPostTitle("");
          setPostCategory("");
          setPostRelated("");
          setPostRelatedAtmas([]);
          setPostRelatedPrice("");
          setPostStar("");
          setPostComment("");
          setPostImageList([]);
          navigatge(`/main/${postTrainStation}`);
          setDisable(false);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          if (error.code === "ERR_BAD_RESPONSE") {
            swal("Please Check!", "지원하지 않는 마커 위치입니다!", "error");
            setDisable(false);
            setLoading(false);
          }
        });
    }
  }, [uploadFormData]);

  return (
    <>
      <Header />
      <div className="pb-30 lg:max-w-5xl lg:m-auto mx-2">
        <PostTrainStationSelect />
        <PostMap />
        <ImageUpload />

        <div className="lg:pt-20 pt-10 font-semibold border-b-2 border-[rgb(83,199,240)] w-fit lg:px-5 px-3 pb-2 mb-5 lg:text-base text-sm text-[rgb(83,199,240)]">
          별점
        </div>
        <div className="flex justify-center m-auto">
          <StartRating />
        </div>
        <div className="lg:pt-20 pt-10 font-semibold border-b-2 border-[rgb(83,199,240)] w-fit lg:px-5 px-3 pb-2 mb-5 lg:text-base text-sm text-[rgb(83,199,240)]">
          관련태그
        </div>
        <div className="mb-5 w-fit m-auto lg:ml-56">
          <PostCategoryTabs />
          <PostRelatedTab />
          <PostRelatedAtmasTab />
          <ListTag />
        </div>

        <PostOneLineInput />
      </div>
      <div className="flex justify-center">
        <button
          disabled={disable}
          className="bg-gray-400 w-fit m-auto text-white lg:py-3 lg:px-5 py-2 px-2 rounded-lg hover:bg-[rgb(83,199,240)] lg:my-32 my-16"
          onClick={onSubmit}
        >
          작성완료
        </button>
      </div>
      <Footer />
      {loading ? <TrainLoading props={"업로드 중입니다..."} /> : null}
    </>
  );
}
