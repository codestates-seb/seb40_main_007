import axios from "axios";
import { useEffect, useState } from "react";
import { TiPencil } from "react-icons/ti";
import { Map, CustomOverlayMap, Polyline } from "react-kakao-maps-sdk";
import { useRecoilState, useRecoilValue } from "recoil";
import { accessToken } from "../../atoms/loginData";
import {
  myTravelIdSelect,
  myTravelListData,
  myTravelNameSelect,
  traveMapCenterEvent,
} from "../../atoms/mypage/myTravelData";
// import TravelMapItem from "./MapItem/TravelMapItem";

const MyTravelMap = ({ data }) => {
  const [TOKEN] = useRecoilState(accessToken);
  const [, setMyTravelName] = useRecoilState(myTravelNameSelect);

  const myTravelId = useRecoilValue(myTravelIdSelect);
  const [, setMyTravelList] = useRecoilState(myTravelListData);

  const myTravelName = useRecoilValue(myTravelNameSelect);
  const [traveMapCenter, setTraveMapCenter] =
    useRecoilState(traveMapCenterEvent);

  const [inputTextArea, setInputTextArea] = useState(false);
  const [inputText, setInputText] = useState(myTravelName);
  const [preViewText, setPreViewText] = useState();
  const lineCoordinate = data
    ? data.map((el) => ({
        lat: el.latitude,
        lng: el.longitude,
      }))
    : [];

  const enterChangeName = (e) => {
    if (e.key === "Enter" && inputText.length !== 0) {
      changeName();
    }
  };

  const changeName = () => {
    setInputTextArea(false);
    setPreViewText(inputText);

    // /planners/{planner-id}
    const URL = `${process.env.REACT_APP_URL}/planners/${myTravelId}`;

    const config = {
      headers: { Authorization: TOKEN },
    };
    const data = {
      plannerName: inputText,
    };

    axios
      .patch(URL, data, config)
      .then((response) => {
        console.log("Change My Travel Name Success :", response);
        setMyTravelList(response.data.items);
        setMyTravelName(inputText);
        setPreViewText("");
      })
      .catch((error) => {
        console.log("Change My Travel Name Fail :", error);
      });
  };

  useEffect(() => {
    data && data.length > 0
      ? setTraveMapCenter({
          lat: data[0].latitude,
          lng: data[0].longitude,
        })
      : setTraveMapCenter({ lat: 36.58834236643186, lng: 128.0072011230013 });
  }, [data]);

  return (
    <div className="w-full h-60 lg:pl-14 sm:h-[600px] flex flex-col justify-center lg:px-0 px-2">
      <div className="flex flex-row items-center mb-4">
        <img className="w-10 h-10 mr-2" alt="logo" src="/images/logo.png"></img>
        {/* ??? ?????? ?????? ?????? ?????? */}
        {inputTextArea ? (
          <>
            <input
              type="text"
              className="min-w-xs h-8  outline-none border-b-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)] text-lg font-semibold z-20"
              defaultValue={myTravelName}
              maxLength="10"
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={enterChangeName}
            ></input>

            <button
              className={`pl-2 text-[rgb(83,199,240)] border-b-2 border-[rgb(83,199,240)] z-20 ${
                inputText.length >= 1 ? "" : "pointer-events-none text-gray-200"
              }`}
              onClick={changeName}
            >
              <TiPencil className="" size={"29"} />
            </button>

            {data ? (
              <button
                className="fixed inset-0 z-10 cursor-default"
                type="button"
                onClick={() => (
                  setInputTextArea(false), setInputText(myTravelName)
                )}
              ></button>
            ) : null}
          </>
        ) : (
          <>
            <h2 className="max-w-xs truncate text-lg font-semibold text-[rgb(83,199,240)]">
              {preViewText ? preViewText : myTravelName}
            </h2>
            <button
              className={`ml-2 text-[rgb(83,199,240)] border-b-2 border-[rgb(83,199,240)] `}
              onClick={() => setInputTextArea(!inputTextArea)}
            >
              <TiPencil size={"29"} />
            </button>
          </>
        )}
      </div>
      {data ? (
        <Map // ????????? ????????? Container
          className="border-2 border-[#59AEEC] rounded-xl"
          center={traveMapCenter}
          style={{
            // ????????? ??????
            width: "100%",
            height: "100%",
          }}
          level={data && data.length === 0 ? 14 : 5} // ????????? ?????? ??????
        >
          <Polyline
            path={[lineCoordinate]}
            strokeWeight={3} // ?????? ?????? ?????????
            strokeColor={"rgb(83,199,240)"} // ?????? ???????????????
            strokeOpacity={1} // ?????? ???????????? ????????? 1?????? 0 ????????? ????????? 0??? ??????????????? ???????????????
            strokeStyle={"line"} // ?????? ??????????????????
          />
          {data.length !== 0
            ? data.map((data, index) => (
                // ????????? ??????????????? ????????? Container
                <CustomOverlayMap
                  key={index}
                  // ????????? ??????????????? ????????? ???????????????
                  position={{ lat: data.latitude, lng: data.longitude }}
                  // ????????? ?????????????????? ?????? ?????? ?????? x,y ?????? ??????.
                  xAnchor={0.5}
                  yAnchor={0.5}
                  zIndex={-index}
                >
                  <div className="bg-[rgb(83,199,240)] rounded-full border-2 border-black w-7 h-auto text-center">
                    {index + 1}
                  </div>
                </CustomOverlayMap>
              ))
            : null}
        </Map>
      ) : (
        <div className="w-full h-full border-2 rounded-xl"></div>
      )}
    </div>
  );
};

export default MyTravelMap;
