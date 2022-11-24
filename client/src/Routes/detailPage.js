import CommentEditor from "../components/DetailPage/CommentEditor";
import CommentList from "../components/DetailPage/Comments/CommentList";
import DetailHeader from "../components/DetailPage/DetailHeader/DetailHeader";
import DetailImageSlider from "../components/DetailPage/DetailImageSlider";
import DetailMap from "../components/DetailPage/DetailMap";
import NeighborhoodPlace from "../components/DetailPage/NeighborhoodPlace";
import Header from "../components/Header";
import Like from "../components/DetailPage/Review/Like";
import Dislike from "../components/DetailPage/Review/Dislike";
import OneLineComment from "../components/OneLineComment";
import Footer from "../components/Footer";
import KakaoShareButton from "../components/DetailPage/KakaoShareButton";
import EveryShareButton from "../components/DetailPage/EveryShareButton";
import { AiOutlineShareAlt } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { detailData } from "../atoms/detailPageData";
import { accessToken } from "../atoms/loginTest";
import axios from "axios";

const DetailPage = () => {
  const { id } = useParams();
  const [detailInfo, setDetailInfo] = useRecoilState(detailData);
  const TOKEN = useRecoilValue(accessToken);
  useEffect(() => {
    const config = {
      headers: { Authorization: TOKEN },
    };

    axios
      .get(`${process.env.REACT_APP_URL}/boards/${id}`, config)
      .then((response) => {
        setDetailInfo(response.data);
        console.log("detail 페이지 get");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(detailInfo);

  //   {
  //     "boardId": 43,
  //     "title": "배고파서",
  //     "review": "몽쉘하나먹음",
  //     "star": 3.5,
  //     "thumbnail": "https://pre-032-bucket.s3.ap-northeast-2.amazonaws.com/board_thumbnail/185877815015521thumbnail_of_43",
  //     "stationId": 3,
  //     "categoryId": 1,
  //     "address": "우리",
  //     "timeFromStation": 6474,
  //     "dibs": false,
  //     "upScore": 0,
  //     "downScore": 0,
  //     "scoreStatus": 0,
  //     "createdAt": "2022-11-24T03:06:39.991538",
  //     "writer": {
  //         "memberId": 2,
  //         "name": "김코딩",
  //         "avatar": "https://pre-032-bucket.s3.ap-northeast-2.amazonaws.com/member_avatar/63521595888381avatar_of_2"
  //     },
  //     "imageUrls": [
  //         "https://pre-032-bucket.s3.ap-northeast-2.amazonaws.com/board_images/43board_0"
  //     ],
  //     "tags": {
  //         "detailTag": 2,
  //         "moodTag": [
  //             41,
  //             43,
  //             44,
  //             45
  //         ],
  //         "priceTag": 24
  //     },
  //     "comments": [],
  //     "around": [
  //         {
  //             "boardId": 42,
  //             "title": "배고파서",
  //             "review": "몽쉘하나먹음",
  //             "thumbnail": "https://pre-032-bucket.s3.ap-northeast-2.amazonaws.com/board_thumbnail/184658175771343thumbnail_of_42",
  //             "star": 3.5,
  //             "timeFromStation": 6474,
  //             "dibs": false
  //         },
  //         {
  //             "boardId": 44,
  //             "title": "배고파서",
  //             "review": "몽쉘하나먹음",
  //             "thumbnail": null,
  //             "star": 3.5,
  //             "timeFromStation": 6474,
  //             "dibs": false
  //         },
  //         {
  //             "boardId": 45,
  //             "title": "배고파서",
  //             "review": "몽쉘하나먹음",
  //             "thumbnail": "https://pre-032-bucket.s3.ap-northeast-2.amazonaws.com/board_thumbnail/186435790765261thumbnail_of_45",
  //             "star": 3.5,
  //             "timeFromStation": 6474,
  //             "dibs": false
  //         }
  //     ]
  // }
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <div className="lg:w-[1024px]">
          <DetailHeader />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <DetailImageSlider />
            <DetailMap />
          </div>
          <div className="flex items-center justify-end">
            <AiOutlineShareAlt className="mr-1" />
            <KakaoShareButton />
            <EveryShareButton />
          </div>
          <div className="flex flex-row mt-10 justify-end">
            <Like />
            <Dislike />
          </div>
          <OneLineComment review={detailInfo.review} />
          <CommentList />
          <CommentEditor />
        </div>
      </div>
      <NeighborhoodPlace />
      <Footer />
    </>
  );
};

export default DetailPage;
