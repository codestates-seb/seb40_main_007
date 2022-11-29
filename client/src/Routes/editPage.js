/* eslint-disable */
import Header from "../components/Header";
import EditTrainStationSelect from "../components/EditPage/EditTrainStationSelect";
import EditStarRating from "../components/EditPage/EditStarRating";
import OnlineInput from "../components/OneLineInput";
import EditMap from "../components/EditPage/EditMap";
import EditImageUpload from "../components/EditPage/EditImageUpload";
import EditCategoryTabs from "../components/EditPage/EditCategoryTabs";
import EditRelatedTab from "../components/EditPage/EditRelatedTab";
import EditRelatedAtmasTab from "../components/EditPage/EditRelatedAtmasTab";
import Footer from "../components/Footer";
import EditListTag from "../components/EditPage/EditListTag";
import { useRecoilValue, useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { accessToken } from "../atoms/loginTest";
import swal from "sweetalert";
import {
  editTrainStationState,
  editpositionState,
  editAdressState,
  editTitleState,
  editImageState,
  editCategoryState,
  editRelatedState,
  editRelatedAtmasState,
  editRelatedPriceState,
  editStarState,
  editCommentState,
} from "../atoms/editPageData";

export default function EditPage() {
  const navigatge = useNavigate();
  const { id } = useParams();
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
  const [editTrainStation, setEditTrainStation] = useRecoilState(
    editTrainStationState
  );
  const [postionState, setPositionState] = useRecoilState(editpositionState);
  const [editAdress, setEditAdress] = useRecoilState(editAdressState);
  const [editTitle, setEditTitle] = useRecoilState(editTitleState);
  const [editImageList, setEditImageList] = useRecoilState(editImageState);
  const [editCategory, setEditCategory] = useRecoilState(editCategoryState);
  const [editRelated, setEditRelated] = useRecoilState(editRelatedState);
  const [editRelatedAtmas, setEditRelatedAtmas] = useRecoilState(
    editRelatedAtmasState
  );
  const [editRelatedPrice, setEditRelatedPrice] = useRecoilState(
    editRelatedPriceState
  );
  const [editStar, setEditStar] = useRecoilState(editStarState);
  const [editComment, setEditComment] = useRecoilState(editCommentState); //한줄평

  const [uploadFormData, setUpLoadFormData] = useState(""); //form데이터 파일
  const [center, setCenter] = useState(""); //맵 초기 위치
  const [initialImage, setInitialImage] = useState(""); // 초기 이미지
  const [initialAtmas, setInitialAtmas] = useState([]); // 초기 분위기
  const [disable, setDisable] = useState(false); //제출 버튼 비활성화

  let atmasTagId = [...editRelatedAtmas].map((el) => tagList[el]);

  useEffect(() => {
    const config = {
      headers: { Authorization: TOKEN },
    };
    axios
      .get(`${process.env.REACT_APP_URL}/boards/${id}`, config)
      .then((response) => {
        console.log(response.data);
        setEditTitle(response.data.title);
        setEditComment(response.data.review);
        setEditStar(response.data.star);
        setPositionState({
          lat: response.data.latitude,
          lng: response.data.longitude,
        });
        setCenter({
          lat: response.data.latitude,
          lng: response.data.longitude,
        });
        setEditTrainStation(response.data.stationId);
        setEditCategory(response.data.categoryId);
        setEditRelated(response.data.tags.detailTag);
        setEditRelatedAtmas(response.data.tags.moodTag);
        setInitialAtmas(response.data.tags.moodTag);
        setEditRelatedPrice(response.data.tags.priceTag);
        setEditAdress(response.data.address);
        setEditImageList(response.data.imageUrls);
        setInitialImage(response.data.imageUrls);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log("editImageList", editImageList);
  const onSubmit = () => {
    setDisable(true);
    const editUrl = []; // s3 url
    const editPriority = []; // priority
    const formData = new FormData();
    for (const file of editImageList) {
      if (file.slice(0, 5) === "https") {
        editUrl.push(file);
        editPriority.push("u");
      } else {
        console.log("새 업로드 부분입니다.");
        formData.append("files", file);
        console.log(file);
        editPriority.push("i");
      }
      console.log(editUrl, editPriority);
    }

    if (!editPriority.includes("i")) {
      formData.append("files", new Blob([JSON.stringify({})]));
    }
    console.log("!editPriority.includes", !editPriority.includes("i"));

    let finalUpLoadJson = {
      title: editTitle,
      review: editComment,
      star: editStar,
      latitude: postionState.lat,
      longitude: postionState.lng,
      stationId: editTrainStation,
      categoryId: categoryList[editCategory],
      address: editAdress,
      tags: [tagList[editRelated], ...atmasTagId, tagList[editRelatedPrice]],
      priority: editPriority,
      urls: editUrl,
    };
    formData.append(
      "data",
      new Blob([JSON.stringify(finalUpLoadJson)], {
        type: "application/json",
      })
    );
    setUpLoadFormData(formData); // 폼데이터 useState로 저장
    console.log("finalUpLoad!!!!!!!!!!!!", finalUpLoadJson);
  };

  useEffect(() => {
    if (uploadFormData !== "") {
      const config = {
        headers: {
          Authorization: TOKEN,
          contentType: "multipart/form-data",
        },
      };
      axios
        .patch(
          `${process.env.REACT_APP_URL}/boards/${id}`,
          uploadFormData,
          config
        )
        .then(function (response) {
          // -- 이 200일 경우
          console.log(response);
          swal("Thank you", "수정 완료되었습니다", "success");
          setEditTitle("");
          setEditAdress("");
          setEditCategory("");
          setEditRelated("");
          setEditRelatedAtmas("");
          setEditRelatedPrice("");
          setEditStar("");
          setEditComment("");
          setEditImageList("");
          setDisable(false);
          navigatge(`/main/${editTrainStation}`);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [uploadFormData]);

  return (
    <>
      <Header />
      <div className="pb-30 max-w-5xl m-auto">
        <EditTrainStationSelect />
        <EditMap
          trainId={editTrainStation}
          position={postionState}
          center={center}
          address={editAdress}
          title={editTitle}
        />

        <EditImageUpload initialImage={initialImage} />
        <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 pt-2 text-18 text-[rgb(83,199,240)] mt-16">
          별점
        </div>
        <div className="flex justify-center m-auto">
          <EditStarRating />
        </div>
        <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 my-16 text-18 text-[rgb(83,199,240)] ">
          관련태그
        </div>
        <div className="mb-5 w-fit m-auto sm:ml-56">
          <EditCategoryTabs />
          <EditRelatedTab />
          <EditRelatedAtmasTab initialAtmas={initialAtmas} />
          <EditListTag />
        </div>
        <OnlineInput />
      </div>
      <div className="flex justify-center">
        <button
          disabled={disable}
          className="bg-gray-400 w-fit m-auto text-white py-3 px-5 rounded-lg hover:bg-[rgb(83,199,240)] my-32"
          onClick={onSubmit}
        >
          작성완료
        </button>
      </div>
      <Footer />
    </>
  );
}
