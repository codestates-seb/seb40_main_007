import { TiPencil } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";
import { userId, accessToken } from "../../../atoms/loginTest";
import { detailData } from "../../../atoms/detailPageData";
import { useRecoilValue, useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import axios from "axios";

const Comment = ({ props }) => {
  const { id } = useParams();
  const memberId = useRecoilValue(userId);
  const TOKEN = useRecoilValue(accessToken);
  const [, setDetailInfo] = useRecoilState(detailData);

  const commentInfo = props;
  const handleDelete = () => {
    const config = {
      headers: { Authorization: TOKEN },
    };
    axios
      .delete(
        `${process.env.REACT_APP_URL}/comments/${commentInfo.commentId}`,
        config
      )
      .then(function (response) {
        console.log(response);
        axios
          .get(`${process.env.REACT_APP_URL}/boards/${id}`)
          .then((response) => {
            setDetailInfo(response.data);
          });
      })
      .catch((error) => console.log(error));
  };
  console.log(commentInfo.commentId);
  return (
    <>
      <li className="flex flex-row items-center space-x-3">
        <div className="w-12 h-12">
          <img src={commentInfo?.writer?.avatar} alt="profile" />
        </div>
        <div>
          <div className="flex flex-row items-center py-2 space-x-1">
            <span className="text-sm">{commentInfo?.writer?.name}</span>
            {memberId === commentInfo?.writer?.memberId ? (
              <>
                <button>
                  <TiPencil size={"12"} color={"#52C7F1"} />
                </button>
                <button onClick={handleDelete}>
                  <FaRegTrashAlt size={"10"} color={"#52C7F1"} />
                </button>
              </>
            ) : null}
          </div>
          <p className="text-xs text-gray-500 py-2">{commentInfo?.comment}</p>
        </div>
      </li>
    </>
  );
};

export default Comment;
