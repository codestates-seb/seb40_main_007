import { FaRegThumbsDown } from "react-icons/fa";

const Dislike = () => {
  return (
    <>
      <button className="border-2 bg-[rgb(83,199,240)] border-[rgb(83,199,240)] w-[80px] rounded-2xl px-1 flex flex-row justify-center items-center space-x-1">
        <FaRegThumbsDown color="white" />
        <span className="text-sm text-white">5</span>
      </button>
    </>
  );
};

export default Dislike;
