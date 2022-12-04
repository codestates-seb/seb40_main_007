import { useRecoilState } from "recoil";
import { postCommentState } from "../../atoms/postInfo";

export default function PostOneLineInput() {
  const [postComment, setPostComment] = useRecoilState(postCommentState);
  const handlePostCommemt = (e) => {
    setPostComment(e.target.value);
  };
  return (
    <div className="text-[rgb(83,199,240)] lg:max-w-6xl">
      <div className="lg:pt-20 pt-10 font-semibold border-b-2 border-[rgb(83,199,240)] w-fit lg:px-5 px-3 pb-2 lg:mb-16 mb-10 lg:text-base text-sm text-[rgb(83,199,240)]">
        한줄평
      </div>
      <div className="lg:max-w-4xl m-auto">
        <img src="/images/open_quote.png" alt="openQuote" />
        <div className="flex justify-center">
          <textarea
            type="text"
            value={postComment}
            onChange={handlePostCommemt}
            placeholder="당신의 한줄평을 입력해주세요"
            maxLength="40"
            className="resize-none text-center font-semibold text-black lg:text-lg text-xs rounded-md  bg-transparent focus:outline-none w-10/12 p-2 m-1 my-4"
          />
        </div>
        <div className="flex justify-end">
          <img src="/images/close_quote.png" alt="closeQuote" />
        </div>
      </div>
    </div>
  );
}
