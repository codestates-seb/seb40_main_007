import { useRecoilState } from "recoil";
import { postRelatedAtmasState } from "../../atoms/postFilter";

const PostRelatedAtmasTab = () => {
  const [related, setRelated] = useRecoilState(postRelatedAtmasState);

  const atmos = ["아늑한", "활기찬", "정겨운", "깔끔한", "술집"];

  return (
    <div className="flex flex-row justify-center space-x-2 mt-4 mb-1">
      {atmos.map((el) => (
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

export default PostRelatedAtmasTab;
