/*eslint-disable*/
import Comment from "./Comment";
import { useRecoilState } from "recoil";
import { detailData } from "../../../atoms/detailPageData";

const CommentList = () => {
  const [detailInfo] = useRecoilState(detailData);

  return (
    <>
      <div className="mt-10 mb-5">
        <span className="text-lg text-[rgb(83,199,240)] border-b-2 border-b-[rgb(83,199,240)] px-3 py-1 font-semibold">
          댓글
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {detailInfo?.comments !== undefined
          ? detailInfo?.comments.map((comment) => (
              <Comment key={comment.commentId} props={comment} />
            ))
          : null}
      </div>
    </>
  );
};

export default CommentList;
