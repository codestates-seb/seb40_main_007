import { TiPencil } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";

const Comment = () => {
  return (
    <>
      <li className="flex flex-row items-center space-x-3 min-w-[450px]">
        <div className="w-12 h-12">
          <img src="/images/profile.png" alt="사진" />
        </div>
        <div>
          <div className="flex flex-row items-center py-2 space-x-1">
            <span className="text-sm">리제훈동지</span>
            <button>
              <TiPencil size={"12"} color={"#52C7F1"} />
            </button>
            <button>
              <FaRegTrashAlt size={"10"} color={"#52C7F1"} />
            </button>
          </div>
          <p className="text-xs text-gray-500 py-2">
            내래...혁명적으로 맛 없었다
          </p>
        </div>
      </li>
    </>
  );
};

export default Comment;
