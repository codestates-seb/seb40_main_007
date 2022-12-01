import { HiOutlineTrash } from "react-icons/hi";
// import { TiPencil } from "react-icons/ti";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRecoilState } from "recoil";
import {
  myTravelIdSelect,
  myTravelListData,
  myTravelNameSelect,
} from "../../atoms/mypage/myTravelData";
import { accessToken } from "../../atoms/loginData";
import axios from "axios";
import swal from "sweetalert";
// import { Link } from "react-router-dom";

const ListModal = ({ setOnListModal }) => {
  const [TOKEN] = useRecoilState(accessToken);

  const [myTravelList, setMyTravelList] = useRecoilState(myTravelListData);
  const [myTravelId, setMyTravelId] = useRecoilState(myTravelIdSelect);
  const [, setMyTravelName] = useRecoilState(myTravelNameSelect);
  console.log(myTravelList);

  const deleteMyTravel = (plannerId) => {
    const deleteURL = `${process.env.REACT_APP_URL}/planners/${plannerId}`;
    // const getURL = `${process.env.REACT_APP_URL}/planners`;

    const config = {
      headers: { Authorization: TOKEN },
    };
    swal({
      text: "삭제하시겠습니까?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(deleteURL, config)
          .then((response) => {
            console.log(response);
            setMyTravelList(response.data.items);
            swal("삭제되었습니다");
            plannerId === myTravelId
              ? (setMyTravelId(myTravelList[0].plannerId),
                setMyTravelName(myTravelList[0].plannerName))
              : null;
          })
          .catch(() => {
            swal("게시글 삭제 실패");
          });
      } else {
        swal("삭제를 취소하셨습니다");
      }
    });
  };
  // 데이터 불러오는 axios 필요

  const selectTravelList = (data) => {
    setOnListModal(false);
    setMyTravelId(data.plannerId);
    setMyTravelName(data.plannerName);
  };
  return (
    <div className="p-1 w-48 mt-8 bg-white text-[rgb(83,199,240)] text-sm rounded-2xl border-2 flex flex-col align-middle absolute z-10">
      <div className="flex justify-between border-b-2">
        <div className="ml-5 font-semibold">내 여행 목록</div>
        <AiOutlineCloseCircle
          onClick={() => setOnListModal(false)}
          className="items-end cursor-pointer p-0 m-0"
          size="18"
          color="#bab9b2"
        />
      </div>
      <ul className="px-5 pt-2 gap-2">
        {myTravelList.length !== 0 ? (
          myTravelList.map((data) => (
            <li
              key={data.plannerId}
              className="w-full mb-2 flex flex-row justify-between"
            >
              {/* 아래 listName에 목록 Link 달기 */}
              <button
                className="w-11/12 mr-2 text-start truncate font-medium hover:bg-slate-100 hover:"
                onClick={() => selectTravelList(data)}
              >
                {data.plannerName}
              </button>
              {/* </Link> */}
              {/* 아래 버튼에 삭제 동의 모달 연결 */}
              <button
                className="w-5 h-5 rounded-full bg-[rgb(83,199,240)] flex justify-center items-center hover:scale-110 active:scale-95"
                onClick={() => deleteMyTravel(data.plannerId)}
              >
                <HiOutlineTrash color="white" size="18" />
              </button>
            </li>
          ))
        ) : (
          <li className="mb-2 flex flex-row justify-between">비어있습니다</li>
        )}
      </ul>
    </div>
  );
};

export default ListModal;
