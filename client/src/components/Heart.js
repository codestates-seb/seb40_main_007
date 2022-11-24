import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Heart() {
  const [isWishAdd, setIsWishAdd] = useState(false);
  const [wishCount, setWishCount] = useState(0);
  const [isOnClick, setIsOnClick] = useState(false);

  const wishAddHandler = () => {
    setIsWishAdd(!isWishAdd);
  };
  const wishCountHandler = () => {
    setIsOnClick(!isOnClick);
    wishAddHandler();
    if (!isWishAdd) {
      setWishCount(wishCount + 1);
      //나중에 post
    } else if (isWishAdd) {
      setWishCount(wishCount - 1);
      //나중에 post
    }
  };

  // console.log(wishCount);
  //콘솔 찍으면 0인지 1인지 나옵니다 0은 빈하트 1은 채워진 하트
  return (
    <div className={`${isOnClick ? "animate-oneBounce" : ""}`}>
      {isWishAdd ? (
        <AiFillHeart
          size={30}
          className="text-[#EC1258] cursor-pointer active:scale-90"
          onClick={wishCountHandler}
        />
      ) : (
        <AiOutlineHeart
          size={30}
          className={`text-[#EC1258] cursor-pointer active:scale-90`}
          onClick={wishCountHandler}
        />
      )}
    </div>
  );
}
// 나중에 기능 구현 한다면..
// fetch("8080", {
//   method: "POST".
//   body: JSON.stringify({
//    게시글 id를 보내야 하지 않을까?
//   }
