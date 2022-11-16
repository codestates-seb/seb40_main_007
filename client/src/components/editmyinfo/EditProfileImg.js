import EditBtn from "./EditBtn";
import ReactFileReader from "react-file-reader";
import { useState } from "react";

const EditProfileImg = () => {
  // HTTP 통신 되면 로그인 유저 프로필 url로 url 교체. -> 전역상태 관리 필요
  const [url, setUrl] = useState("");

  const handleFiles = (files) => {
    console.log(files);
    setUrl(files.base64);
  };

  return (
    <div className="w-[260px] mt-20">
      <div className="">
        <p className="text-[rgb(83,199,240)]">프로필 이미지</p>
      </div>
      <div className="flex justify-center">
        <div className="mt-2 w-[5rem] h-[5rem] flex items-end justify-end">
          <>
            <div className="absolute">
              <ReactFileReader
                fileTypes={[".png", ".jpg"]}
                base64={true}
                handleFiles={handleFiles}
              >
                <EditBtn usePlace="EditProfileImg" />
              </ReactFileReader>
            </div>
            {url !== "" ? (
              <img
                className="w-20 h-20 rounded-full p-1 m-0 static border-2 border-[rgb(83,199,240)]"
                alt="PreImg"
                src={url}
              />
            ) : (
              <img
                className="rounded-full p-0 m-0 static"
                alt="ProfileImg"
                src="../images/profile.png"
              />
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default EditProfileImg;
