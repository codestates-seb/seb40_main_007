const TagBtn = ({ text, idx, setSelectTag, selectTag }) => {
  return (
    <button
      type="button"
      onClick={() => setSelectTag(idx)}
      className={`px-3 py-[0.1rem] ml-2 my-2 text-xs text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)] rounded-full
        ${idx === selectTag ? "bg-[rgb(83,199,240)] text-white" : "bg-white"}`}
    >
      {text}
    </button>
  );
};

export default TagBtn;
