import { HiOutlineTrash } from "react-icons/hi";
// import { TiPencil } from "react-icons/ti";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import { Link } from "react-router-dom";

const ListModal = ({ offModal }) => {
  const dummyList = ["기본 목록", "부산역 여행", "부산역 여행", "부산역 여행"];
  return (
    <div className="p-1 w-40 mt-8 bg-white text-[rgb(83,199,240)] text-sm rounded-2xl border-2 flex flex-col align-middle absolute">
      <div className="flex justify-between border-b-2">
        <div className="ml-5 font-semibold">내 여행 목록</div>
        <AiOutlineCloseCircle
          onClick={offModal}
          className="items-end cursor-pointer p-0 m-0"
          size="18"
          color="#bab9b2"
        />
      </div>
      <ul className="px-5 pt-2 gap-2">
        {dummyList.map((listName, index) => (
          <li key={index} className="mb-2 flex flex-row justify-between">
            {/* 아래 listName에 목록 Link 달기 */}
            {/* <Link to="/mypage/editmyinfo"> */}
            {listName}
            {/* </Link> */}
            {/* 아래 버튼에 삭제 동의 모달 연결 */}
            <button className="w-5 h-5 rounded-full bg-[rgb(83,199,240)] flex justify-center items-center">
              <HiOutlineTrash color="white" size="18" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListModal;
