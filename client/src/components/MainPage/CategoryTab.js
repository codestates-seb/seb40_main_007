import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectCategoryEvent } from "../../atoms/mainFilter";
import { categoryInfoToNumList } from "../../atoms/tagsInfo";

const CategoryTabs = ({ stationId }) => {
  const [category, setCategory] = useState("전체");
  const [, setSelectCategory] = useRecoilState(selectCategoryEvent);
  const categoryInfoToNum = useRecoilValue(categoryInfoToNumList);
  console.log("category", category);
  useEffect(() => {
    setSelectCategory(categoryInfoToNum[category]);
  }, [category]);
  useEffect(() => {
    setCategory("전체");
  }, [stationId]);
  return (
    <>
      <div className="flex flex-row justify-center mt-5 lg:mt-20">
        <button
          onClick={() => setCategory("전체")}
          className={
            category === "전체"
              ? "w-20 border-b-2 text-center border-b-[rgb(83,199,240)] text-[rgb(83,199,240)]"
              : "w-20 text-center text-gray-500"
          }
        >
          전체
        </button>
        <button
          onClick={() => setCategory("식당")}
          className={
            category === "식당"
              ? "w-20 border-b-2 text-center border-b-[rgb(83,199,240)] text-[rgb(83,199,240)]"
              : "w-20 text-center text-gray-500"
          }
        >
          식당
        </button>
        <button
          onClick={() => setCategory("볼거리")}
          className={
            category === "볼거리"
              ? "w-20 border-b-2 text-center border-b-[rgb(83,199,240)] text-[rgb(83,199,240)]"
              : "w-20 text-center text-gray-500"
          }
        >
          볼거리
        </button>
        <button
          onClick={() => setCategory("숙소")}
          className={
            category === "숙소"
              ? "w-20 border-b-2 text-center border-b-[rgb(83,199,240)] text-[rgb(83,199,240)]"
              : "w-20 text-center text-gray-500"
          }
        >
          숙소
        </button>
      </div>
    </>
  );
};

export default CategoryTabs;
