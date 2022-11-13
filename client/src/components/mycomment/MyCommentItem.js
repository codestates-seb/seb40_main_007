import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const Item = ({ imgUrl, title, content }) => {
  return (
    <div className=" flex flex-row ">
      <img
        className="w-[75px] h-[60px] rounded-md"
        alt="post img"
        src={imgUrl}
      />
      <div className="pl-3 flex flex-col justify-center">
        <div className="text-base">{title}</div>
        <div className="flex flex-row w-64 text-xs">
          <div className="h-auto">
            <MdOutlineSubdirectoryArrowRight color="rgb(83,199,240)" />
          </div>
          <p className="truncate text-xs">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
