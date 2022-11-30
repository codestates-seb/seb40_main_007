/*eslint-disable*/
import DetailStarScore from "./DetailStarScore";
import { TiPencil } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";
import DetailHeart from "./detailHeart";
import Complain from "../Complain";
import { useRecoilValue, useRecoilState } from "recoil";
import { trainInfo } from "../../../atoms/trainInfo";
import { categoryInfoList, tagsInfoList } from "../../../atoms/tagsInfo";
import { userId, accessToken, isAdmin } from "../../../atoms/loginData";
import { detailData } from "../../../atoms/detailPageData";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { detailPageTime } from "../../../utils/timeFunc";

const DetailHeader = () => {
  const { id } = useParams();
  const memberId = useRecoilValue(userId);
  const [TOKEN] = useRecoilState(accessToken);
  const navigate = useNavigate();
  const trainInformation = useRecoilValue(trainInfo);
  const categoryInfo = useRecoilValue(categoryInfoList);
  const tagsInfo = useRecoilValue(tagsInfoList);
  const detailInfo = useRecoilValue(detailData);
  const [admin] = useRecoilState(isAdmin);

  const moodTags = [detailInfo?.tags?.moodTag?.map((el) => tagsInfo[el])];
  const allTags = [
    categoryInfo[detailInfo?.categoryId],
    tagsInfo[detailInfo?.tags?.detailTag],
    ...moodTags,
    tagsInfo[detailInfo?.tags?.priceTag],
  ];

  const detailDate = detailPageTime(detailInfo.createdAt);

  const handleDelete = () => {
    swal({
      text: "삭제하시겠습니까?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const config = {
          headers: { Authorization: TOKEN },
        };
        axios
          .delete(
            `${process.env.REACT_APP_URL}/boards/${detailInfo.boardId}`,
            config
          )
          .then((response) => {
            console.log(response);
            swal("삭제되었습니다");
            navigate(`/main/${detailInfo.stationId}`);
          })
          .catch((error) => {
            swal("게시글 삭제 실패");
          });
      } else {
        swal("삭제를 취소하셨습니다");
      }
    });
  };

  return (
    <div className="flex flex-col mt-20 lg:px-0 px-2">
      <div className="mb-5 flex flex-row justify-between">
        <span className="font-semibold lg:text-lg text-base text-[rgb(83,199,240)] border-b-2 border-b-[rgb(83,199,240)] px-3 py-2">
          {trainInformation[detailInfo?.stationId - 1]?.train}
        </span>
        {admin || memberId === detailInfo?.writer?.memberId ? (
          <div className="flex flex-row space-x-1 place-items-end">
            <Link to={`/edit/${id}`}>
              <div className="w-[30px] h-[30px] bg-white border-2 border-[rgb(83,199,240)] rounded-3xl p-0.5 flex justify-center items-center">
                <TiPencil size={"30"} color={"#52C7F1"} />
              </div>
            </Link>
            <button
              className="w-[30px] h-[30px] bg-[rgb(83,199,240)] rounded-3xl p-0.5 flex justify-center items-center"
              onClick={handleDelete}
            >
              <FaRegTrashAlt size={"20"} color={"#fff"} />
            </button>
            <DetailHeart
              boardId={detailInfo?.boardId}
              heartState={detailInfo?.dibs}
            />
          </div>
        ) : (
          <div className="flex flex-row space-x-1 place-items-end">
            {TOKEN !== "" ? (
              <>
                <Complain boardId={detailInfo?.boardId} />
                <DetailHeart
                  boardId={detailInfo?.boardId}
                  heartState={detailInfo?.dibs}
                />
              </>
            ) : null}
          </div>
        )}
      </div>
      <div className="flex flex-row">
        <div className="flex space-x-2">
          <span className="lg:text-2xl text-lg font-bold">
            {detailInfo?.title}
          </span>
          <DetailStarScore props={detailInfo.star} />
          <span className="flex justify-center items-end lg:text-xs text-[10px] text-gray-500">
            {detailDate}
          </span>
        </div>
      </div>
      <div className="flex lg:space-x-2 space-x-1 mt-2">
        {allTags.length !== 0 &&
          allTags.map((el, idx) =>
            Array.isArray(el) ? (
              el.map((element, idx) => (
                <span
                  key={idx}
                  className="lg:text-xs text-[10px] font-semibold text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)] rounded-full py-0.5 px-2"
                >
                  {element}
                </span>
              ))
            ) : (
              <span
                key={idx}
                className="lg:text-xs text-[10px] font-semibold text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)] rounded-full py-0.5 px-2"
              >
                {el}
              </span>
            )
          )}
      </div>
      <div className="flex flex-row items-center space-x-2">
        <div className="w-6 h-6 my-3">
          <img
            src={detailInfo?.writer?.avatar}
            alt="avatar"
            className="rounded-full"
          />
        </div>
        <span className="text-xs">{detailInfo?.writer?.name}</span>
      </div>
    </div>
  );
};

export default DetailHeader;
