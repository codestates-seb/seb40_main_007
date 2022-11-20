import { useRecoilState } from "recoil";
import { postCategoryState } from "../../atoms/postInfo";

export default function PostCategoryTabs() {
  const [category, setCategory] = useRecoilState(postCategoryState);
  console.log("category", category);
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <button
          onClick={() => setCategory("식당")}
          className={`w-16 border-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)] rounded-full m-1
          ${
            category === "식당" ? "bg-[rgb(83,199,240)] text-white" : "bg-white"
          }`}
        >
          식당
        </button>
        <button
          onClick={() => setCategory("볼거리")}
          className={`w-16 border-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)] rounded-full m-1
          ${
            category === "볼거리"
              ? "bg-[rgb(83,199,240)] text-white"
              : "bg-white"
          }`}
        >
          볼거리
        </button>
        <button
          onClick={() => setCategory("숙소")}
          className={`w-16 border-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)] rounded-full m-1
          ${
            category === "숙소" ? "bg-[rgb(83,199,240)] text-white" : "bg-white"
          }`}
        >
          숙소
        </button>
      </div>
    </>
  );
}
