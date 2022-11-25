import { TiPencil } from "react-icons/ti";
import { useRecoilState, useRecoilValue } from "recoil";
import { userAvatar, accessToken } from "../../atoms/loginTest";
import axios from "axios";

const EditProfileImg = () => {
  const [avatar, setAvatar] = useRecoilState(userAvatar);
  const TOKEN = useRecoilValue(accessToken);

  // 이미지 업로드 함수
  function upload(formData) {
    const config = {
      headers: { Authorization: TOKEN, "Content-Type": "multipart/form-data" },
    };
    axios
      .post(
        `${process.env.REACT_APP_URL}/members/avatar`,
        {
          file: formData,
        },
        config
      )
      .then(function (response) {
        // -- 이 200일 경우
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
      preveiwUrl.replace(/"/g, "");
      setAvatar(preveiwUrl);
    };
    upload(fileImage); // 이미지 업로드
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
                  multiple
                  type="file"
                  id="file"
                  accept="image/jpg, image/jpeg, image/png, image/heif, image/heic"
                  onChange={(e) => insertImg(e)}
                  className="hidden"
                />
              </form>
            </div>
            {avatar !== "" ? (
              <img
                className="w-20 h-20 rounded-full p-1 m-0 static border-2 border-[rgb(83,199,240)]"
                alt="PreImg"
                src={avatar}
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
