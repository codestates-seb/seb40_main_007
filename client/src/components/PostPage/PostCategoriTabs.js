import { useRecoilState } from "recoil";
import { postCategoryState } from "../../atoms/postFilter";

export default function PostCategoryTabs() {
  const [category, setCategory] = useRecoilState(postCategoryState);

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <button
          onClick={() => setCategory("식당")}
          className={`px-3 py-[0.1rem] ml-2 my-2 text-xs text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)] rounded-full
          ${
            category === "식당" ? "bg-[rgb(83,199,240)] text-white" : "bg-white"
          }`}
        >
          식당
        </button>
        <button
          onClick={() => setCategory("볼거리")}
          className={`px-3 py-[0.1rem] ml-2 my-2 text-xs text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)] rounded-full
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
          className={`px-3 py-[0.1rem] ml-2 my-2 text-xs text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)] rounded-full
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
