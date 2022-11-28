import { useState } from "react";
import { useRecoilState } from "recoil";
import { postRelatedAtmasState } from "../../atoms/postInfo";

const PostRelatedAtmasTab = () => {
  const [, setRelated] = useRecoilState(postRelatedAtmasState);

  const atmas = ["아늑한", "활기찬", "정겨운", "깔끔한", "뷰가 좋은"];
  const [myAtmas, setMyAtmas] = useState([]);

  function checkAtmas(props) {
    for (let i of myAtmas) {
      if (props === i) return true;
    }
  }

  const addMyAtmas = (props) => {
    setMyAtmas([...myAtmas, props]);
    setRelated([...myAtmas, props]);
  };
  const deleteMyAtmas = (props) => {
    let copyMyAtmas = myAtmas.slice();
    copyMyAtmas = copyMyAtmas.filter((el) => el !== props);
    setMyAtmas(copyMyAtmas);
    setRelated(copyMyAtmas);
  };

  return (
    <div className="flex items-center my-4 font-bold">
      <span className="lg:mr-16 mr-5 lg:text-base text-sm">분위기</span>
      {atmas.map((el) => (
        <button
          key={el}
          className={
            checkAtmas(el)
              ? "lg:text-base text-xs lg:px-2 p-1 lg:w-18 border-2 border-[rgb(83,199,240)] bg-[rgb(83,199,240)] text-white rounded-full m-1"
              : "lg:text-base text-xs lg:px-2 p-1 lg:w-18 border-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)] rounded-full m-1"
          }
          onClick={() => {
            if (checkAtmas(el)) {
              deleteMyAtmas(el);
            } else {
              addMyAtmas(el);
            }
          }}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default PostRelatedAtmasTab;
