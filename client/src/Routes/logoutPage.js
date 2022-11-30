import LoginHeader from "../components/LoginHeader";
import swal from "sweetalert";
// 로그인 테스트용입니다.
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import {
  accessToken,
  refreshToken,
  userAvatar,
  userId,
  userName,
  userEmail,
  isSocial,
  isAdmin,
} from "../atoms/loginData";
import axios from "axios";
export default function LogoutPage() {
  const navigate = useNavigate();
  const [TOKEN, setAccessToken] = useRecoilState(accessToken);
  const [, setRefreshToken] = useRecoilState(refreshToken);
  const [, setUserAvatar] = useRecoilState(userAvatar);
  const [, setUserId] = useRecoilState(userId);
  const [, setUserName] = useRecoilState(userName);
  const [, setUserEmail] = useRecoilState(userEmail);
  const [, setIsSocial] = useRecoilState(isSocial);
  const [, setAdmin] = useRecoilState(isAdmin);

  const userLogout = () => {
    const config = {
      headers: { Authorization: TOKEN },
    };
    axios
      .post(`${process.env.REACT_APP_URL}/members/logout`, {}, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    swal("Good Bye!", "로그아웃 되었습니다");
    setAccessToken("");
    setRefreshToken("");
    setUserAvatar("");
    setUserId("");
    setUserName("");
    setUserEmail("");
    setIsSocial(false);
    setAdmin(false);
    navigate("/");
  };

  return (
    <>
      <LoginHeader />
      <div className="lg:w-full w-full h-screen align-baseline flex justify-center items-center bg-[rgba(235,235,235,0.34)]">
        {/*  */}
        <div className="max-w-md p-2 lg:px-10 px:5 m-auto border rounded-xl text-[rgb(83,199,240)] bg-white shadow-lg">
          <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 lg:text-base text-sm">
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
            로그아웃 하시겠습니까?
          </div>
          <div className="w-fit m-auto">
            <button
              className="text-white font-semibold w-fit  bg-gradient-to-tl from-white to-[rgb(83,199,240)] py-2 mb-4 px-6 rounded-md"
              onClick={() => userLogout(false)}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
