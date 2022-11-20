import { useRecoilState } from "recoil";
import { postCommentState } from "../atoms/postInfo";

export default function OneLineInput() {
  const [commentState, setPostComment] = useRecoilState(postCommentState);
  console.log(commentState);
  const handlePostCommemt = (e) => {
    setPostComment(e.target.value);
  };
  return (
    <div className="text-[rgb(83,199,240)] max-w-6xl">
      <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 my-16 text-18 text-[rgb(83,199,240)] ">
        한줄평
      </div>
      <div className="max-w-4xl m-auto">
        <img src="/images/open_quote.png" alt="openQuote" />
        <div className="flex justify-center">
          <input
            type="text"
            value={commentState}
            onChange={handlePostCommemt}
            placeholder="당신의 한줄평을 입력해주세요"
            maxLength="40"
            className="text-center font-semibold text-black  text-lg rounded-md  bg-transparent focus:outline-none w-10/12 p-2 m-1 my-4"
          />
        </div>
        <div className="flex justify-end">
          <img src="/images/close_quote.png" alt="closeQuote" />
        </div>
      </div>
    </div>
  );
}
