import { useRecoilState, useRecoilValue } from "recoil";
import { postCategoryState, postRelatedState } from "../../atoms/postInfo";

const PostRelatedTab = () => {
  const [related, setRelated] = useRecoilState(postRelatedState);
  const category = useRecoilValue(postCategoryState);

  const restarant = ["한식", "중식", "양식", "일식", "디저트"];
  const sight = ["자연", "문화", "유적", "공연", "놀거리"];
  const stay = ["호텔", "모텔", "게하", "펜션", "캠핑"];

  return (
    <div className="font-bold flex items-center flex-row space-x-2 lg:mt-4 mt-1 mb-1">
      <span className="lg:mr-12 mr-1 lg:text-base text-sm">관련태그</span>
      {category === "식당"
        ? restarant.map((el) => (
            <button
              key={el}
              className={`lg:text-base text-xs border-2 lg:px-3 p-1 px-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)] lg:rounded-full rounded-2xl m-1
              ${
                related === el ? "bg-[rgb(83,199,240)] text-white" : "bg-white"
              }`}
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
              className={`lg:text-base text-xs border-2 lg:px-3 p-1 px-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)] lg:rounded-full rounded-2xl m-1
              ${
                related === el ? "bg-[rgb(83,199,240)] text-white" : "bg-white"
              }`}
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
              className={`lg:text-base text-xs lg:px-3 p-1 px-2 border-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)] lg:rounded-full rounded-2xl m-1
              ${
                related === el ? "bg-[rgb(83,199,240)] text-white" : "bg-white"
              }`}
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
