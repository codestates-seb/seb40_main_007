const RelatedTab = ({ related, setRelated }) => {
  return (
    <div className="flex flex-row justify-center space-x-2 mt-5">
      <button
        className={
          related === "ALL"
            ? "w-16 border-2 border-[rgb(83,199,240)] bg-[rgb(83,199,240)] rounded-2xl text-white"
            : "w-16 border-2 border-[rgb(83,199,240)] rounded-2xl text-[rgb(83,199,240)]"
        }
        onClick={() => {
          setRelated("ALL");
        }}
      >
        ALL
      </button>
      <button
        className={
          related === "한식"
            ? "w-16 border-2 border-[rgb(83,199,240)] bg-[rgb(83,199,240)] rounded-2xl text-white"
            : "w-16 border-2 border-[rgb(83,199,240)] rounded-2xl text-[rgb(83,199,240)]"
        }
        onClick={() => {
          setRelated("한식");
        }}
      >
        한식
      </button>
      <button
        className={
          related === "중식"
            ? "w-16 border-2 border-[rgb(83,199,240)] bg-[rgb(83,199,240)] rounded-2xl text-white"
            : "w-16 border-2 border-[rgb(83,199,240)] rounded-2xl text-[rgb(83,199,240)]"
        }
        onClick={() => {
          setRelated("중식");
        }}
      >
        중식
      </button>
      <button
        className={
          related === "양식"
            ? "w-16 border-2 border-[rgb(83,199,240)] bg-[rgb(83,199,240)] rounded-2xl text-white"
            : "w-16 border-2 border-[rgb(83,199,240)] rounded-2xl text-[rgb(83,199,240)]"
        }
        onClick={() => {
          setRelated("양식");
        }}
      >
        양식
      </button>
      <button
        className={
          related === "일식"
            ? "w-16 border-2 border-[rgb(83,199,240)] bg-[rgb(83,199,240)] rounded-2xl text-white"
            : "w-16 border-2 border-[rgb(83,199,240)] rounded-2xl text-[rgb(83,199,240)]"
        }
        onClick={() => {
          setRelated("일식");
        }}
      >
        일식
      </button>
    </div>
  );
};

export default RelatedTab;
