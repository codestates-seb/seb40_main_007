import { TiPencil } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";
import { userId, accessToken, isAdmin } from "../../../atoms/loginData";
import { detailData } from "../../../atoms/detailPageData";
import { useRecoilValue, useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import { useState } from "react";

const Comment = ({ props, createdAt }) => {
  const { id } = useParams();
  const memberId = useRecoilValue(userId);
  const [TOKEN] = useRecoilState(accessToken);
  const admin = useRecoilValue(isAdmin);
  const [, setDetailInfo] = useRecoilState(detailData);
  const [disable, setDisable] = useState(true);
  const [commentText, setCommentText] = useState("");
  const [char, setChar] = useState(0);
  const detailTime = new Date(createdAt);
  const dateTime = detailTime?.toLocaleString("ko-KR");

  const commentInfo = props;
  const handleTextChange = (e) => {
    setCommentText(e.target.value);
    setChar(e.target.value.length);
  };

  const handleModify = () => {
    const config = {
      headers: { Authorization: TOKEN },
    };
    axios
      .patch(
        `${process.env.REACT_APP_URL}/comments/${commentInfo.commentId}`,
        {
          comment: commentText,
        },
        config
      )
      .then(function (response) {
        console.log(response);
        axios
          .get(`${process.env.REACT_APP_URL}/boards/${id}`)
          .then((response) => {
            setDisable(true);
            setDetailInfo(response.data);
            swal("수정 되었습니다");
          });
      })
      .catch((error) => console.log(error));
  };
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
            swal("삭제 되었습니다");
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <li className="flex my-3 flex-row justify-start space-x-3">
        <div className="w-12 h-12">
          <img
            src={commentInfo?.writer?.avatar}
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div className="w-5/6 border-b border-gray-100">
          <div className="flex flex-row items-center space-x-1">
            <span className="text-sm">{commentInfo?.writer?.name}</span>
            {admin || memberId === commentInfo?.writer?.memberId ? (
              <>
                <button
                  onClick={() => {
                    setDisable(false);
                    setCommentText(commentInfo?.comment);
                    setChar(commentInfo?.comment.length);
                  }}
                >
                  <TiPencil size={"12"} color={"#52C7F1"} />
                </button>
                <button onClick={handleDelete}>
                  <FaRegTrashAlt size={"10"} color={"#52C7F1"} />
                </button>
              </>
            ) : null}
          </div>
          {disable ? (
            <div className="relative">
              <div className="text-sm text-gray-500 py-2 lg:pb-2 pb-4">
                {commentInfo?.comment}
              </div>
              <span className="absolute right-0 lg:bottom-1 bottom-2 text-end lg:-mt-2 text-[8px] w-fit text-gray-400">
                {dateTime}
              </span>
            </div>
          ) : (
            <>
              <div className="border">
                <textarea
                  disabled={disable}
                  type="textarea"
                  value={commentText}
                  placeholder="댓글을 수정해보세요."
                  cols="72"
                  rows="2"
                  maxLength="99"
                  className="text-sm first-letter:text-xs w-full outline-none mt-1 break-normal resize-none p-1"
                  onChange={handleTextChange}
                />
                <div className="text-gray-300 group-focus-within:text-[rgb(83,199,240)] text-xs relative p-1">
                  {`${char} / 100`}
                </div>
              </div>
              <div className="text-end">
                <button
                  onClick={handleModify}
                  className="text-end font-bold mt-2 rounded-lg px-7 py-1 bg-[rgb(83,199,240)] text-white"
                >
                  수정
                </button>
              </div>
            </>
          )}
        </div>
      </li>
    </>
  );
};

export default Comment;
