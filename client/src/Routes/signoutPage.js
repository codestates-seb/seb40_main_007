import LoginHeader from "../components/LoginHeader";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import {
  accessToken,
  refereshToken,
  userAvatar,
  userId,
  userName,
  userEmail,
  isSocial,
} from "../atoms/loginTest";

export default function SignoutPage() {
  const [TOKEN, setAccessToken] = useRecoilState(accessToken);
  const [, setRefreshToken] = useRecoilState(refereshToken);
  const [, setUserAvatar] = useRecoilState(userAvatar);
  const [, setUserId] = useRecoilState(userId);
  const [, setUserName] = useRecoilState(userName);
  const [, setUserEmail] = useRecoilState(userEmail);
  const [, setIsSocial] = useRecoilState(isSocial);
  const navigate = useNavigate();

  const handleClick = () => {
    swal({
      title: "정말 탈퇴하시겠습니까?",
      text: "앞으로 저희 역이요 만의 서비스를 이용하실 수 없게 됩니다.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const config = {
          headers: { Authorization: TOKEN },
        };
        axios
          .delete(`${process.env.REACT_APP_URL}/members`, config)
          .then((response) => {
            swal("탈퇴되었습니다.", {
              icon: "success",
            });
            console.log(response);
            setAccessToken("");
            setRefreshToken("");
            setUserAvatar("");
            setUserId("");
            setUserName("");
            setUserEmail("");
            navigate("/");
            setIsSocial(false);
            navigate(`/`);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        swal("탈퇴를 취소하셨습니다");
      }
    });
  };
  return (
    <>
      <LoginHeader />
      <div className="lg:w-full w-full h-screen align-baseline flex justify-center items-center bg-[rgba(235,235,235,0.34)]">
        <div className="max-w-lg p-2 px-10 m-auto border rounded-xl text-[rgb(83,199,240)] bg-white shadow-lg">
          <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2">
            Logout
          </div>
          <div className="relative flex justify-center items-center">
            <img
              src="images/gradation.png"
              alt="gradation"
              className="w-60 mx-7"
            />
            <img
              src="images/notfound_icon_w.png"
              alt="train"
              className="absolute w-16"
            />
          </div>
          <div className="font-semibold text-[rgb(83,199,240)] text-center my-10 ">
            탈퇴 하시겠습니까?
          </div>

          <div className="w-fit m-auto">
            <button
              className="text-white font-semibold w-fit  bg-gradient-to-tl from-white to-[rgb(83,199,240)] py-2 mb-4 px-6 rounded-md"
              onClick={handleClick}
            >
              탈퇴
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
