import { TiPencil } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";

const Comment = () => {
  return (
    <>
      <li className="flex flex-row items-center space-x-3">
        <div className="w-12 h-12">
          <img src="/images/profile.png" alt="사진" />
        </div>
        <div>
          <div className="flex flex-row items-center py-2 space-x-1">
            <span className="text-sm">답변 작성자</span>
            <button>
              <TiPencil size={"12"} color={"#52C7F1"} />
            </button>
            <button>
              <FaRegTrashAlt size={"10"} color={"#52C7F1"} />
            </button>
          </div>
          <p className="text-xs text-gray-500 py-2">코멘트</p>
        </div>
      </li>
    </>
  );
};

export default Comment;
