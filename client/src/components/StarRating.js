import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { postStarState } from "../atoms/postInfo";

const StarRating = () => {
  const [, setStarState] = useRecoilState(postStarState);
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(0);
  const [style, setStyle] = useState(80);
  const windowResize = () => {
    // 맵 스타일 변경
    if (window.innerWidth >= 1024) {
      setStyle(80);
    } else {
      setStyle(44);
    }
  };
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setStyle(80);
    } else {
      setStyle(44);
    }
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);
  const textList = [
    "너무 별로예요",
    "별로예요",
    "그저 그래요",
    "좋아요",
    "정말 좋아요!",
  ];

  return (
    <>
      <div className="max-w-80 h-44 justify-center align-middle ">
        <div className="flex justify-center">
          {[1, 2, 3, 4, 5].map((num) => {
            return (
              <span
                className={
                  clicked === num
                    ? "mt-5 border-2 border-[rgb(83,199,240)] rounded-xl p-1 absolute visible text-[rgb(83,199,240)]"
                    : "absolute invisible"
                }
                key={num}
              >
                {textList[num - 1]}
              </span>
            );
          })}
        </div>
        <div className="mt-16">
          {[1, 2, 3, 4, 5].map((num) => {
            return (
              <button
                key={num}
                onMouseEnter={() => {
                  setHovered(num);
                }}
                onMouseLeave={() => {
                  setHovered(null);
                }}
                onClick={() => {
                  setClicked(num);
                  setStarState(num);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={style}
                  height={style}
                  viewBox="0 0 14 14"
                >
                  <path
                    d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                    transform="translate(-2 -2)"
                    fill={
                      (clicked >= num) | (hovered >= num)
                        ? "#FFD203"
                        : "lightgray"
                    }
                  />
                </svg>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StarRating;
