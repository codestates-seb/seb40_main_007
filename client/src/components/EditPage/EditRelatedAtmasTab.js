import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { editRelatedAtmasState } from "../../atoms/editPageData";
import { tagsInfoList } from "../../atoms/tagsInfo";

const EditRelatedAtmasTab = ({ initialAtmas }) => {
  const [, setRelatedAtmas] = useRecoilState(editRelatedAtmasState);
  const tagsInfo = useRecoilValue(tagsInfoList);

  useEffect(() => {
    if (initialAtmas.length !== 0) {
      let atmasTagList = initialAtmas.map((el) => tagsInfo[el]);
      setRelatedAtmas(atmasTagList);
      setMyAtmas(atmasTagList);
    }
  }, [initialAtmas]);

  const atmas = ["아늑한", "활기찬", "정겨운", "깔끔한", "뷰가 좋은"];
  const [myAtmas, setMyAtmas] = useState([]);

  function checkAtmas(props) {
    for (let i of myAtmas) {
      if (props === i) return true;
    }
  }

  const addMyAtmas = (props) => {
    setMyAtmas([...myAtmas, props]);
    setRelatedAtmas([...myAtmas, props]);
  };
  const deleteMyAtmas = (props) => {
    let copyMyAtmas = myAtmas.slice();
    copyMyAtmas = copyMyAtmas.filter((el) => el !== props);
    setMyAtmas(copyMyAtmas);
    setRelatedAtmas(copyMyAtmas);
  };

  return (
    <div className="flex items-center space-x-2 mt-4 mb-1 font-bold">
      <span className="mr-14">분위기</span>
      {atmas.map((el) => (
        <button
          key={el}
          className={
            checkAtmas(el)
              ? "px-2 w-18 border-2 border-[rgb(83,199,240)] bg-[rgb(83,199,240)] text-white rounded-full m-1"
              : "px-2 w-18 border-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)] rounded-full m-1"
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

export default EditRelatedAtmasTab;
