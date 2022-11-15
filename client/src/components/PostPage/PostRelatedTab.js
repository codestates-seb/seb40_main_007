import { useRecoilState, useRecoilValue } from "recoil";
import { postCategoryState, postRelatedState } from "../../atoms/postFilter";

const PostRelatedTab = () => {
  const [related, setRelated] = useRecoilState(postRelatedState);
  const category = useRecoilValue(postCategoryState);

  const restarant = ["한식", "중식", "양식", "일식", "술집"];
  const sight = ["자연", "문화", "유적", "공연", "놀거리"];
  const stay = ["호텔", "모텔", "게하", "펜션", "캠핑"];

  return (
    <div className="flex flex-row justify-center space-x-2 mt-4 mb-1">
      {category === "식당"
        ? restarant.map((el) => (
            <button
              key={el}
              className={
                related === el
                  ? "text-sm w-16 border-2 border-[rgb(83,199,240)] bg-[rgb(83,199,240)] rounded-2xl text-white"
                  : "text-sm w-16 border-2 border-[rgb(83,199,240)] rounded-2xl text-[rgb(83,199,240)]"
              }
              onClick={() => {
                setRelated(el);
              }}
            >
              {el}
            </button>
          ))
        : category === "볼거리"
        ? sight.map((el) => (
            <button
              key={el}
              className={
                related === el
                  ? "text-sm w-16 border-2 border-[rgb(83,199,240)] bg-[rgb(83,199,240)] rounded-2xl text-white"
                  : "text-sm w-16 border-2 border-[rgb(83,199,240)] rounded-2xl text-[rgb(83,199,240)]"
              }
              onClick={() => {
                setRelated(el);
              }}
            >
              {el}
            </button>
          ))
        : stay.map((el) => (
            <button
              key={el}
              className={
                related === el
                  ? "text-sm w-16 border-2 border-[rgb(83,199,240)] bg-[rgb(83,199,240)] rounded-2xl text-white"
                  : "text-sm w-16 border-2 border-[rgb(83,199,240)] rounded-2xl text-[rgb(83,199,240)]"
              }
              onClick={() => {
                setRelated(el);
              }}
            >
              {el}
            </button>
          ))}
    </div>
  );
};

export default PostRelatedTab;
