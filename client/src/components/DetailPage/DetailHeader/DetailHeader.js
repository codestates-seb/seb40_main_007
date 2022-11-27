/*eslint-disable*/
import DetailStarScore from "./DetailStarScore";
import { TiPencil } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";
import DetailHeart from "./detailHeart";
import { useRecoilValue } from "recoil";
import { trainInfo } from "../../../atoms/trainInfo";
import { categoryInfoList, tagsInfoList } from "../../../atoms/tagsInfo";
import { userId, accessToken } from "../../../atoms/loginTest";
import { detailData } from "../../../atoms/detailPageData";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const DetailHeader = () => {
  const { id } = useParams();
  const memberId = useRecoilValue(userId);
  const TOKEN = useRecoilValue(accessToken);
  const navigate = useNavigate();

  const trainInformation = useRecoilValue(trainInfo);
  const categoryInfo = useRecoilValue(categoryInfoList);
  const tagsInfo = useRecoilValue(tagsInfoList);
  const detailInfo = useRecoilValue(detailData);

  const moodTags = [detailInfo?.tags?.moodTag?.map((el) => tagsInfo[el])];
  const allTags = [
    categoryInfo[detailInfo?.categoryId],
    tagsInfo[detailInfo?.tags?.detailTag],
    ...moodTags,
    tagsInfo[detailInfo?.tags?.priceTag],
  ];

  const DateTime = new Date(detailInfo.createdAt);

  const handleDelete = () => {
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
  };

  return (
    <div className="flex flex-col mt-20">
      <div className="mb-5 flex flex-row justify-between">
        <span className="font-semibold text-lg text-[rgb(83,199,240)] border-b-2 border-b-[rgb(83,199,240)] px-3 py-2">
          {trainInformation[detailInfo?.stationId - 1]?.train}
        </span>
        {memberId === detailInfo?.writer?.memberId ? (
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
              <DetailHeart
                boardId={detailInfo?.boardId}
                heartState={detailInfo?.dibs}
              />
            ) : null}
          </div>
        )}
      </div>
      <div className="flex flex-row">
        <div className="flex space-x-2">
          <span className="text-2xl font-bold">{detailInfo?.title}</span>
          <DetailStarScore props={detailInfo.star} />
          <span className="flex justify-center items-end text-xs text-gray-500">
            {DateTime?.toLocaleString("ko-KR")}
          </span>
        </div>
      </div>
      <div className="flex space-x-2 mt-2">
        {/* 배열안의 배열을 찾을때,, 갓희찬 */}
        {allTags.map((el, idx) =>
          Array.isArray(el) ? (
            el.map((element, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)] rounded-full py-0.5 px-2"
              >
                {element}
              </span>
            ))
          ) : (
            <span
              key={idx}
              className="text-xs font-semibold text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)] rounded-full py-0.5 px-2"
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
