/*eslint-disable*/
import Comment from "./Comment";
import { useRecoilState } from "recoil";
import { detailData } from "../../../atoms/detailPageData";

const CommentList = () => {
  const [detailInfo] = useRecoilState(detailData);

  return (
    <>
      <div className="mt-10 mb-10">
        <div className="lg:pt-14 pt-10 font-semibold border-b-2 border-[rgb(83,199,240)] w-fit lg:px-5 px-3 pb-2 lg:ml-0 ml-2 lg:text-lg text-sm text-[rgb(83,199,240)]">
          댓글
        </div>
      </div>
      <div className="grid grid-cols-1 lg:ml-10 lg:mx-0 mx-2">
        {detailInfo?.comments !== undefined
          ? detailInfo?.comments.map((comment) => (
              <Comment
                key={comment.commentId}
                props={comment}
                createdAt={comment?.createdAt}
              />
            ))
          : null}
      </div>
    </>
  );
};

export default CommentList;
