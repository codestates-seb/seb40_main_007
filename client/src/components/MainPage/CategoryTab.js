import { useRecoilState } from "recoil";
import { mainCategoryState } from "../../atoms/filter";

const CategoryTabs = () => {
  const [category, setCategory] = useRecoilState(mainCategoryState);

  return (
    <>
      <div className="flex flex-row justify-center mt-5 lg:mt-20">
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
