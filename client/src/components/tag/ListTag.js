import { useState } from "react";

const ListTag = ({ tagList }) => {
  const lastIdx = tagList.length - 1;
  const [selectTag, setSelectTag] = useState();

  return (
    <div>
      {tagList.map((text, idx) => (
        <button
          key={idx}
          onClick={() => setSelectTag(idx)}
          type="button"
          className={`py-1 w-20 -ml-[2px] my-2 text-sm text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)] ${
            idx === 0 ? "rounded-l-md" : "null"
          }
        ${idx === lastIdx ? "rounded-r-md" : "null"}
        ${idx === selectTag ? "bg-[rgb(83,199,240)] text-white" : "bg-white"}`}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default ListTag;
