const RelatedTab = ({ related, setRelated }) => {
  return (
    <div className="flex flex-row justify-center space-x-2">
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
    </div>
  );
};

export default RelatedTab;
