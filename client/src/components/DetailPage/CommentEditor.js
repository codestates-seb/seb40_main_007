import { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { detailData } from "../../atoms/detailPageData";
import { accessToken, userName, userAvatar } from "../../atoms/loginTest";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

const CommentEditor = () => {
  const { id } = useParams();
  const [commentText, setCommentText] = useState("");
  const [char, setChar] = useState(0);
  const [detailInfo, setDetailInfo] = useRecoilState(detailData);

  const TOKEN = useRecoilValue(accessToken);
  const userNameInfo = useRecoilValue(userName);
  const userAvatarInfo = useRecoilValue(userAvatar);

  const handleTextChange = (e) => {
    setCommentText(e.target.value);
    setChar(e.target.value.length);
  };

  const handleSubmit = () => {
    const config = {
      headers: { Authorization: TOKEN },
    };
    if (commentText === "") {
      swal("댓글은 한 글자 이상 작성해주세요");
    } else {
      axios
        .post(
          `${process.env.REACT_APP_URL}/boards/${detailInfo.boardId}/comments`,
          {
            comment: commentText,
          },
          config
        )
        .then(function () {
          axios
            .get(`${process.env.REACT_APP_URL}/boards/${id}`)
            .then((response) => {
              setDetailInfo(response.data);
              setCommentText("");
            });
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      {TOKEN === "" ? (
        <div className="text-center border border-[rgb(83,199,240)] py-4 mt-14">
          <div className="text-[rgb(83,199,240)] ">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-20 h-20 m-auto"
            />
            <div className="my-5">로그인이 필요한 서비스 입니다</div>

            <div className="w-fit bg-[rgb(83,199,240)] text-white px-4 py-1 font-bold m-auto rounded-lg">
              <Link to="/initial"> 로그인 </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mt-14 border-2 border-gray-300 focus-within:border-[rgb(83,199,240)] p-2 h-40 group">
            <div className="flex flex-row items-center space-x-2">
              <div className="w-6 h-6">
                <img
                  src={userAvatarInfo}
                  alt="userImg"
                  className="object-fit block rounded-full"
                />
              </div>
              <div>
                <span className="text-xs">{userNameInfo}</span>
              </div>
            </div>
            <textarea
              type="textarea"
              value={commentText}
              placeholder="댓글을 작성해보세요."
              cols="72"
              rows="4"
              maxLength="100"
              className="text-sm first-letter:text-xs w-full outline-none mt-1 break-normal resize-none"
              onChange={handleTextChange}
            />
            <div className="text-gray-300 group-focus-within:text-[rgb(83,199,240)] text-xs relative">
              {`${char} / 100`}
            </div>
          </div>
          <div className="mt-2 flex justify-end">
            <button type="submit" className="btn" onClick={handleSubmit}>
              등록
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default CommentEditor;
