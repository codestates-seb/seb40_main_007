import { useRecoilState } from "recoil";
import { postRelatedAtmasState } from "../../atoms/postFilter";

const PostRelatedAtmasTab = () => {
  const [related, setRelated] = useRecoilState(postRelatedAtmasState);

  const atmos = ["아늑한", "활기찬", "정겨운", "깔끔한", "뷰가좋은"];
  console.log(related);
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

export default PostRelatedAtmasTab;
