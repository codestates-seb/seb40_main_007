import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import {
  accessToken,
  refereshToken,
  userName,
  userAvatar,
  userId,
} from "../atoms/loginTest";
import axios from "axios";

export default function Callback() {
  const navigate = useNavigate();
  const tokenPath = window.location.pathname;
  const tokenInfo = tokenPath.split("%20");
  console.log(tokenPath);
  const [, setAccessToken] = useRecoilState(accessToken);
  const [, setRefreshToken] = useRecoilState(refereshToken);
  const [, setUserName] = useRecoilState(userName);
  const [, setUserAvatar] = useRecoilState(userAvatar);
  const [, setUserId] = useRecoilState(userId);

  useEffect(() => {
    const TOKEN = tokenInfo[1];
    const REFRESH_TOKEN = tokenInfo[2];
    setAccessToken(TOKEN);
    setRefreshToken(REFRESH_TOKEN);
    const config = {
      headers: { Authorization: `${TOKEN}` },
    };
    axios
      .get(
        "http://pre-032-bucket.s3-website.ap-northeast-2.amazonaws.com/users/myPage",
        config
      )
      .then((response) => {
        setUserName(response.data.name);
        setUserAvatar(response.data.avatar);
        setUserId(response.data.memberId);
      })
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        alert("로그인 실패");
        navigate("/");
      });
  }, []);
}
