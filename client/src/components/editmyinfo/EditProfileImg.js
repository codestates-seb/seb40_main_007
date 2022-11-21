// import ReactFileReader from "react-file-reader";
import { useState } from "react";
import { TiPencil } from "react-icons/ti";

const EditProfileImg = () => {
  // HTTP 통신 되면 로그인 유저 프로필 url로 url 교체. -> 전역상태 관리 필요
  const [url, setUrl] = useState("");

  const insertImg = (e) => {
    let fileImage = e.target.files[0];
    const formData = new FormData();
    formData.append("file", fileImage);

    let reader = new FileReader();
    if (fileImage) {
      reader.readAsDataURL(fileImage);
    }
    reader.onloadend = () => {
      const preveiwUrl = reader.result;
      setUrl(preveiwUrl);
    };
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
              <form encType="multipart/form-data">
                <label htmlFor="file" className="z-10">
                  <TiPencil
                    className="border-[rgb(83,199,240)] rounded-full border-[2px] p-[1px] m-[3px] bg-white text-[rgb(83,199,240)]"
                    size={22}
                  />
                </label>
                <input
                  type="file"
                  id="file"
                  accept="image/jpg, image/jpeg, image/png, image/heif, image/heic"
                  onChange={(e) => insertImg(e)}
                  className="hidden"
                />{" "}
              </form>
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
