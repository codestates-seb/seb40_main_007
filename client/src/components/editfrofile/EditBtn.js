import { TiPencil } from "react-icons/ti";

const EditBtn = ({ func, usePlace, iconSize, position }) => {
  return (
    <button
      onClick={func}
      className={`border-[rgb(83,199,240)] rounded-full border-[2px]
      }] p-[1px] m-[3px] ${position ? position : "static"}
      ${usePlace === "main" ? "bg-[rgb(83,199,240)]" : "bg-white"}`}
    >
      <TiPencil
        className="relative"
        color={usePlace === "main" ? "white" : "rgb(83,199,240)"}
        size={iconSize}
      ></TiPencil>
    </button>
  );
};

/*
    func : onClick 시 동작 기능
    usePlace(type : string) : "EditProfileImg" 과 "main" 의 경우로 색상 변경됩니다.
    iconSize : 아이콘 크기를 변경할 수 있습니다. 설정 안하면 기본 크기.
    position(type : string) : position 속성 ("static", "fixed", "absolute", "relative", "sticky")
                              설정 안하면 기본 설정인 "static"

    ex) <EditBtn usePlace={"main"} iconSize={20} position="static"/>
*/

export default EditBtn;
