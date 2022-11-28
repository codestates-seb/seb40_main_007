import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  editCategoryState,
  editRelatedState,
  editRelatedPriceState,
} from "../../atoms/editPageData";
import { categoryInfoList } from "../../atoms/tagsInfo";
export default function EditCategoryTabs() {
  const [category, setCategory] = useRecoilState(editCategoryState);
  const [, setRelatedState] = useRecoilState(editRelatedState);
  const [, setRelatedPriceState] = useRecoilState(editRelatedPriceState);
  const categoryInfo = useRecoilValue(categoryInfoList);
  useEffect(() => {
    if (categoryInfo[category] !== undefined) {
      setCategory(categoryInfo[category]);
    }
  }, [categoryInfo[category]]);
  const handleReset = () => {
    setRelatedState("");
    setRelatedPriceState("");
  };

  return (
    <>
      <div className="flex flex-row items-center font-bold">
        <span className="lg:mr-12 mr-3 lg:text-base text-sm">카테고리</span>
        <button
          onClick={() => {
            setCategory("식당");
            handleReset();
          }}
          className={`lg:text-base text-xs lg:w-16 border-2 p-1 px-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)] lg:rounded-full rounded-2xl m-1
          ${
            category === "식당" ? "bg-[rgb(83,199,240)] text-white" : "bg-white"
          }`}
        >
          식당
        </button>
        <button
          onClick={() => {
            setCategory("볼거리");
            handleReset();
          }}
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
          onClick={() => {
            setCategory("숙소");
            handleReset();
          }}
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
