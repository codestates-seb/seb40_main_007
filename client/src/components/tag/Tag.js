import TagBtn from "./TagBtn";
import { useState } from "react";

const Tag = ({ tagList }) => {
  const [selectTag, setSelectTag] = useState();

  return (
    <div className="flex flex-row">
      {tagList.map((text, idx) => (
        <div key={idx}>
          <TagBtn
            text={text}
            idx={idx}
            setSelectTag={setSelectTag}
            selectTag={selectTag}
          />
        </div>
      ))}
    </div>
  );
};

export default Tag;
