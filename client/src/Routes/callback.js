import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";
import {
  accessToken,
  refreshToken,
  userName,
  userAvatar,
  userId,
  userEmail,
  isSocial,
  isAdmin,
} from "../atoms/loginData";
import axios from "axios";
import Header from "../components/Header";
export default function Callback() {
  const navigate = useNavigate();
  const location = useLocation();
  const tokenPath = location.search;
  const tokenInfo = tokenPath.split("%20");
  const accessTokenInfo = tokenInfo[1].split("&");

  const [, setAccessToken] = useRecoilState(accessToken);
  const [, setRefreshToken] = useRecoilState(refreshToken);
  const [, setUserName] = useRecoilState(userName);
  const [, setUserAvatar] = useRecoilState(userAvatar);
  const [, setUserId] = useRecoilState(userId);
  const [, setUserEmail] = useRecoilState(userEmail);
  const [, setIsSocial] = useRecoilState(isSocial);
  const [, setAdmin] = useRecoilState(isAdmin);

  useEffect(() => {
    const TOKEN = accessTokenInfo[0];
    const REFRESH_TOKEN = tokenInfo[2];
    setAccessToken(TOKEN);
    setRefreshToken(REFRESH_TOKEN);
    const config = {
      headers: { Authorization: `${TOKEN}` },
    };
    axios
      .get(
        "http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/members/header",
        config
      )
      .then((response) => {
        // console.log(response.data);
        setUserName(response.data.name);
        setUserAvatar(response.data.avatar);
        setUserId(response.data.memberId);
        if (response.data.memberId <= 5) {
          setAdmin(true);
        } else {
          setAdmin(false);
        }
        setUserEmail(response.data.email);
        setIsSocial(true);
      })
      .then(() => {
        navigate("/");
        swal("Hello!", "로그인 되었습니다");
      })
      .catch(() => {
        alert("로그인 실패");
        navigate("initial");
      });
  }, []);

  return (
    <>
      <Header />
      <div className="w-full h-screen flex justify-center items-center bg-[rgb(83,199,240)]"></div>
    </>
  );
}
