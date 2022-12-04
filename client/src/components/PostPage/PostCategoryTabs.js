import { useRecoilState } from "recoil";
import { postCategoryState } from "../../atoms/postInfo";

export default function PostCategoryTabs() {
  const [category, setCategory] = useRecoilState(postCategoryState);
  return (
    <>
      <div className="flex flex-row items-center font-bold">
        <span className="lg:mr-12 mr-2 lg:text-base text-sm">카테고리</span>
        <button
          onClick={() => setCategory("식당")}
          className={`lg:text-base text-xs lg:w-16 border-2 p-1 px-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)] lg:rounded-full rounded-2xl m-1
          ${
            category === "식당" ? "bg-[rgb(83,199,240)] text-white" : "bg-white"
          }`}
        >
          식당
        </button>
        <button
          onClick={() => setCategory("볼거리")}
          className={`lg:text-base text-xs lg:w-18 border-2 p-1 px-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)] lg:rounded-full rounded-2xl m-1
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
          className={`lg:text-base text-xs lg:w-16 border-2 p-1 px-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)] lg:rounded-full rounded-2xl m-1
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
