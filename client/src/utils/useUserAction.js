import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { token } from "../atoms/loginTest";

const BASE_URL = "배포주소";
const TOKEN = useRecoilValue(token); // 만약 값 초기화 된다면 로컬 스토리지 에서 받기

//멤버 확인
export const getVerification = (password) => {
  const { data } = useQuery(["password", password], () => {
    return axios.get(`${BASE_URL}/members/verification`, {
      headers: { accessToken: TOKEN },
    });
  });

  return data;
};

//로그인
// const handleSubmit = () => {
//   const userInfo = {
//     email: email,
//     password: password,
//   };

export const upLogin = (userInfo) => {
  const upLoginState = useMutation(() => {
    return axios.post(`${BASE_URL}/login`, userInfo);
  });

  return upLoginState;
};
