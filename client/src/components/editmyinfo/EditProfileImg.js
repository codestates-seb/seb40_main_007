import { TiPencil } from "react-icons/ti";
import { useRecoilState } from "recoil";
import { userInfo, accessToken } from "../../atoms/loginTest";
import axios from "axios";

const EditProfileImg = () => {
  const [avatar, setAvatar] = useRecoilState(userInfo);
  const [TOKEN] = useRecoilState(accessToken);

  // 이미지 업로드 함수
  function upload(formData) {
    console.log(formData);
    axios({
      method: "post",
      url: "http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/members/avatar",
      file: formData,
      headers: {
        Authorization: TOKEN,
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
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
                />{" "}
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
