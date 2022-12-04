import { useRecoilState } from "recoil";
import { postRelatedPriceState } from "../../atoms/postInfo";

const PostRelatedPriceTab = () => {
  const [related, setRelated] = useRecoilState(postRelatedPriceState);

  const atmos = ["만원대", "이만원대", "삼만원대", "사만원대", "그 이상"];

  return (
    <div className="flex flex-row justify-center space-x-2 mt-4 mb-1">
      {atmos.map((el) => (
        <button
          key={el}
          className={`px-1 w-18 border-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)] rounded-full m-1
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

export default PostRelatedPriceTab;
