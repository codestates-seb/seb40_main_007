import { useRecoilState } from "recoil";
import { editCommentState } from "../atoms/editPageData";

export default function OneLineInput() {
  const [editComment, setEditComment] = useRecoilState(editCommentState);
  const handlePostCommemt = (e) => {
    setEditComment(e.target.value);
  };
  return (
    <div className="text-[rgb(83,199,240)] lg:max-w-6xl">
      <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 my-16 text-18 text-[rgb(83,199,240)] ">
        한줄평
      </div>
      <div className="lg:max-w-4xl m-auto">
        <img src="/images/open_quote.png" alt="openQuote" />
        <div className="flex justify-center">
          <input
            type="text"
            value={editComment}
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
