import { FaRegThumbsUp } from "react-icons/fa";

const Like = () => {
  return (
    <>
      <button className="border-2 border-[rgb(83,199,240)] w-[80px] rounded-2xl px-1 flex flex-row justify-center items-center space-x-1">
        <FaRegThumbsUp color="rgb(83,199,240)" />
        <span className="text-sm text-[rgb(83,199,240)]">105</span>
      </button>
    </>
  );
};

export default Like;
