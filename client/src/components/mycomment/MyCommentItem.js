import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const Item = ({ imgUrl, title, content }) => {
  return (
    <div className="w-full flex flex-row m-3 ">
      <img className="w-28 h-28 rounded-md" alt="post img" src={imgUrl} />
      <div className="w-4/6 pl-3 flex flex-col justify-center">
        <div className="">{title}</div>
        <div className="flex flex-row text-xs">
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
