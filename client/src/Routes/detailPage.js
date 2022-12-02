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
import { useRecoilState } from "recoil";
import { detailData } from "../atoms/detailPageData"; // detailCommentData
import { accessToken } from "../atoms/loginData";
import axios from "axios";

const DetailPage = () => {
  const { id } = useParams();
  const [detailInfo, setDetailInfo] = useRecoilState(detailData);
  const [TOKEN] = useRecoilState(accessToken);

  useEffect(() => {
    if (TOKEN === "") {
      axios
        .get(`${process.env.REACT_APP_URL}/boards/${id}`)
        .then((response) => {
          setDetailInfo(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const config = {
        headers: { Authorization: TOKEN },
      };
      axios
        .get(`${process.env.REACT_APP_URL}/boards/${id}`, config)
        .then((response) => {
          setDetailInfo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const handleLikeClicked = () => {
    const config = {
      headers: { Authorization: TOKEN },
    };
    axios
      .post(
        `${process.env.REACT_APP_URL}/boards/${detailInfo.boardId}/up-vote`,
        {},
        config
      )
      .then(() => {
        const config = {
          headers: { Authorization: TOKEN },
        };
        axios
          .get(`${process.env.REACT_APP_URL}/boards/${id}`, config)
          .then((response) => {
            setDetailInfo(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => console.log(error));
  };
  const handleDislikeClicked = () => {
    const config = {
      headers: { Authorization: TOKEN },
    };
    axios
      .post(
        `${process.env.REACT_APP_URL}/boards/${detailInfo.boardId}/down-vote`,
        {},
        config
      )
      .then(() => {
        const config = {
          headers: { Authorization: TOKEN },
        };
        axios
          .get(`${process.env.REACT_APP_URL}/boards/${id}`, config)
          .then((response) => {
            setDetailInfo(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <div className="lg:w-[1024px] w-full">
          <DetailHeader />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <DetailImageSlider />
            <DetailMap />
          </div>
          <div className="flex items-center justify-end mt-1 mr-2">
            <AiOutlineShareAlt className="mr-1" />
            <KakaoShareButton />
            <EveryShareButton />
          </div>
          {TOKEN === "" ? null : (
            <div className="flex flex-row lg:mt-10 mt-5 lg:mr-0 mr-2 justify-end">
              <button type="button" onClick={handleLikeClicked}>
                <Like props={detailInfo?.upScore} />
              </button>
              <button type="button" onClick={handleDislikeClicked}>
                <Dislike props={detailInfo?.downScore} />
              </button>
            </div>
          )}
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
