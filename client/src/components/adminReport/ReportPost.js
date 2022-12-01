import axios from "axios";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import swal from "sweetalert";
import { accessToken } from "../../atoms/loginData";

const ReportPost = ({ index, data, setDeleteIndex, setDeleteUserId }) => {
  const [TOKEN] = useRecoilState(accessToken);
  const postData = [
    index + 1,
    data.writer,
    data.title,
    data.totalReport,
    data.reportCount.reason1,
    data.reportCount.reason2,
    data.reportCount.reason3,
    data.reportCount.reason4,
    data.reportCount.reason5,
  ];

  const handlePostDelete = () => {
    swal({
      text: "해당 게시글을 삭제하시겠습니까?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setDeleteIndex(index);
        const config = {
          headers: { Authorization: TOKEN },
        };
        axios
          .delete(`${process.env.REACT_APP_URL}/boards/${data.boardId}`, config)
          .then(() => {
            swal("삭제되었습니다");
          })
          .catch(() => {
            swal("게시글 삭제 실패");
          });
      } else {
        swal("삭제를 취소하셨습니다");
      }
    });
  };

  const handleDropMember = () => {
    swal({
      text: "해당 유저를 탈퇴 시키시겠습니까?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setDeleteUserId(data.writerId);
        const config = {
          headers: { Authorization: TOKEN },
        };
        axios
          .delete(
            `${process.env.REACT_APP_URL}/drop-member/${data.writerId}`,
            config
          )
          .then((response) => {
            console.log(response);
            swal("삭제되었습니다");
          })
          .catch(() => {
            swal("유저 탈퇴 실패");
          });
      } else {
        swal("탈퇴를 취소하셨습니다");
      }
    });
  };
  return (
    <div className="flex flex-row justify-between items-center py-1.5 text-sm font-semibold border-b-2">
      {postData.length !== 0
        ? postData.map((el, index) => (
            <p
              key={index}
              className={`basis-1/12 h-5 px-0.5 flex  truncate overflow-y-hidden
                ${index === 2 ? "justify-start bas" : "justify-center"}
              `}
            >
              {el}
            </p>
          ))
        : null}
      <div className="basis-2/12 flex justify-around text-white">
        {/* 해당 게시글 페이지 */}
        <Link
          to={`/detail/${data.boardId}`}
          className="w-2/5 rounded-sm bg-[rgb(83,199,240)] text-center"
        >
          게시글 방문
        </Link>
        {/* 삭제 */}
        <button
          className="w-1/5 rounded-sm bg-red-400"
          onClick={() => handlePostDelete(index)}
        >
          삭제
        </button>
        {/* 회원 강제 탈퇴 */}
        <button
          className="w-1/5 rounded-sm bg-gray-500"
          onClick={handleDropMember}
        >
          탈퇴
        </button>
      </div>
    </div>
  );
};

export default ReportPost;
