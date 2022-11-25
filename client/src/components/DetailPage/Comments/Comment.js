import { TiPencil } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";
import { userId } from "../../../atoms/loginTest";
import { useRecoilValue } from "recoil";

const Comment = ({ props }) => {
  const memberId = useRecoilValue(userId);

  const commentInfo = props;
  console.log(props);
  console.log(memberId, commentInfo.commentId);
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
                <button>
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
