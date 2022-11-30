/*eslint-disable*/
import { TiPencil } from "react-icons/ti";
import { useRecoilValue, useRecoilState } from "recoil";
import { userAvatar, accessToken } from "../../atoms/loginData";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import heic2any from "heic2any";
import swal from "sweetalert";

const EditProfileImg = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useRecoilState(userAvatar);
  const [imageFile, setImageFile] = useState("");
  const [imagePreview, setImagePreview] = useState(avatar);
  const TOKEN = useRecoilValue(accessToken);
  const FILE_SIZE_MAX_LIMIT = 8 * 1024 * 1024;

  const upload = () => {
    // 이미지 업로드 함수
    const config = {
      headers: { Authorization: TOKEN, "Content-Type": "multipart/form-data" },
    };
    axios
      .post(`${process.env.REACT_APP_URL}/members/avatar`, imageFile, config)
      .then(function (response) {
        console.log(response);
      })
      .then(() => {
        setAvatar(imagePreview);
        swal("프로필 이미지가 변경되었습니다");
        navigate("/mypage");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const insertImg = (e) => {
    let fileImage = e.target.files[0];
    if (fileImage.size > FILE_SIZE_MAX_LIMIT) {
      fileImage = "";
      swal(
        "Can't Upload!",
        "8MB 이상의 사진은 업로드 할 수 없습니다",
        "warning"
      );
      return;
    }
    let checkType = fileImage.name.split(".");
    if (
      checkType[1] === "hiec" ||
      checkType[1] === "hief" ||
      checkType[1] === "HEIC" ||
      checkType[1] === "HEIF"
    ) {
      //여기 로딩 보여줄 수 있으면 좋겠다..
      heic2any({
        blob: fileImage,
        toType: "image/jpeg",
      }).then((convertedBlob) => {
        console.log(convertedBlob);
        let url = URL.createObjectURL(convertedBlob);
        setImagePreview(url);
        const formData = new FormData();
        formData.append("file", convertedBlob);
        setImageFile(formData); // 이미지 업로드
      });
      return;
    } else {
      const formData = new FormData();
      formData.append("file", fileImage);
      setImageFile(formData); // 이미지 업로드
      let reader = new FileReader();
      if (fileImage) {
        reader.readAsDataURL(fileImage);
      }
      reader.onloadend = () => {
        const preveiwUrl = reader.result;
        preveiwUrl.replace(/"/g, "");
        setImagePreview(preveiwUrl);
      };
    }
  };

  return (
    <>
      <div className="w-[260px] mt-20">
        <div className="">
          <p className="text-[rgb(83,199,240)]">프로필 이미지</p>
        </div>
        <div className="flex justify-center">
          <div className="mt-2 flex items-end justify-end">
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
                    multiple
                    type="file"
                    id="file"
                    accept="image/jpg, image/jpeg, image/png, image/heif, image/heic"
                    onChange={(e) => insertImg(e)}
                    className="hidden"
                  />
                </form>
              </div>
              {imagePreview !== "" ? (
                <div className="w-24 h-24 rounded-full p-0 m-0 static border-4 border-[rgb(83,199,240)]">
                  <img
                    className="w-full h-full rounded-full "
                    alt="PreImg"
                    src={imagePreview}
                  />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full p-0 m-0 static border-4 border-[rgb(83,199,240)]">
                  <img
                    className="rounded-full p-0 m-0 static"
                    alt="ProfileImg"
                    src="../images/profile.png"
                  />
                </div>
              )}
            </>
          </div>
        </div>
      </div>
      <button className="btn btn-hover text-sm mt-5" onClick={upload}>
        이미지 변경
      </button>
    </>
  );
};

export default EditProfileImg;
