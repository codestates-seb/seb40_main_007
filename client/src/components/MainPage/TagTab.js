import { useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { selectCategoryEvent, selectTagEvent } from "../../atoms/mainFilter";

const TagTab = () => {
  const [selectTag, setSelectTag] = useRecoilState(selectTagEvent);
  const resetSelectTag = useResetRecoilState(selectTagEvent);

  const [selectCategory] = useRecoilState(selectCategoryEvent);
  useEffect(() => {
    resetSelectTag();
  }, [selectCategory]);
  // const category = useRecoilValue(mainCategoryState);
  // 좀더 구조 건들여보는걸로...
  const restarant = ["전체", "한식", "중식", "양식", "일식", "분식", "디저트"];
  const sight = ["전체", "자연", "문화", "유적", "공연", "놀거리"];
  const stay = ["전체", "호텔", "모텔", "펜션", "캠핑", "게하"];
  return (
    <div className="flex justify-center">
      {selectCategory !== 0 ? (
        <div className="flex flex-row gap-y-1 justify-center space-x-2 mt-4 mb-1 lg:w-full w-80 flex-wrap">
          {selectCategory === 1
            ? restarant.map((el) => (
                <button
                  key={el}
                  className={
                    selectTag === el
                      ? "text-sm w-16 border-2 border-[rgb(83,199,240)] bg-[rgb(83,199,240)] rounded-2xl text-white"
                      : "text-sm w-16 border-2 border-[rgb(83,199,240)] rounded-2xl text-[rgb(83,199,240)]"
                  }
                  onClick={() => {
                    setSelectTag(el);
                  }}
                >
                  {el}
                </button>
              ))
            : selectCategory === 2
            ? sight.map((el) => (
                <button
                  key={el}
                  className={
                    selectTag === el
                      ? "text-sm w-16 border-2 border-[rgb(83,199,240)] bg-[rgb(83,199,240)] rounded-2xl text-white"
                      : "text-sm w-16 border-2 border-[rgb(83,199,240)] rounded-2xl text-[rgb(83,199,240)]"
                  }
                  onClick={() => {
                    setSelectTag(el);
                  }}
                >
                  {el}
                </button>
              ))
            : stay.map((el) => (
                <button
                  key={el}
                  className={
                    selectTag === el
                      ? "text-sm w-16 border-2 border-[rgb(83,199,240)] bg-[rgb(83,199,240)] rounded-2xl text-white"
                      : "text-sm w-16 border-2 border-[rgb(83,199,240)] rounded-2xl text-[rgb(83,199,240)]"
                  }
                  onClick={() => {
                    setSelectTag(el);
                  }}
                >
                  {el}
                </button>
              ))}
        </div>
      ) : (
        <div className="flex flex-row justify-center space-x-2 mt-9 mb-2"></div>
      )}
    </div>
  );
};

export default TagTab;
