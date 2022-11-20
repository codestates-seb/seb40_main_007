import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { postCategoryState, postRelatedPriceState } from "../../atoms/postInfo";

export default function ListTag() {
  const [, setRelatedPrice] = useRecoilState(postRelatedPriceState);
  const category = useRecoilValue(postCategoryState);
  const restarant = [
    "만원 이하",
    "2만원 이하",
    "3만원 이하",
    "4만원 이하",
    "5만원 이하",
  ];
  const sight = [
    "무료",
    "만원 이하",
    "2만원 이하",
    "3만원 이하",
    "4만원 이하",
    "5만원 이하",
    "5만원 초과",
  ];
  const stay = [
    "5만원 이하",
    "10만원 이하",
    "15만원 이하",
    "20만원 이하",
    "20만원 초과",
  ];

  const [selectTag, setSelectTag] = useState();
  const [lastIndex, setLastIndex] = useState(restarant.length - 1);
  useEffect(() => {
    if (category === "식당") setLastIndex(restarant.length - 1);
    else if (category === "볼거리") setLastIndex(sight.length - 1);
    else if (category === "숙소") setLastIndex(stay.length - 1);
  });

  return (
    <div>
      {category === "식당"
        ? restarant.map((text, idx) => (
            <button
              key={idx}
              onClick={() => {
                setRelatedPrice(text);
                setSelectTag(idx);
              }}
              type="button"
              className={`py-1 w-20 -ml-[2px] my-2 text-sm text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)]
              ${idx === 0 ? "rounded-l-md" : "null"}
            ${idx === lastIndex ? "rounded-r-md" : "null"}
            ${
              idx === selectTag ? "bg-[rgb(83,199,240)] text-white" : "bg-white"
            }`}
            >
              {text}
            </button>
          ))
        : category === "볼거리"
        ? sight.map((text, idx) => (
            <button
              key={idx}
              onClick={() => {
                setRelatedPrice(text);
                setSelectTag(idx);
              }}
              type="button"
              className={`py-1 w-20 -ml-[2px] my-2 text-sm text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)]
              ${idx === 0 ? "rounded-l-md" : "null"}
            ${idx === lastIndex ? "rounded-r-md" : "null"}
            ${
              idx === selectTag ? "bg-[rgb(83,199,240)] text-white" : "bg-white"
            }`}
            >
              {text}
            </button>
          ))
        : stay.map((text, idx) => (
            <button
              key={idx}
              onClick={() => {
                setRelatedPrice(text);
                setSelectTag(idx);
              }}
              type="button"
              className={`py-1 px-1 -ml-[2px] my-2 text-sm text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)]
              ${idx === 0 ? "rounded-l-md" : "null"}
            ${idx === lastIndex ? "rounded-r-md" : "null"}
            ${
              idx === selectTag ? "bg-[rgb(83,199,240)] text-white" : "bg-white"
            }`}
            >
              {text}
            </button>
          ))}
    </div>
  );
}
