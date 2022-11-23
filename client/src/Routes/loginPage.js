/*eslint-disable*/
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { accessToken, userInfo, refereshToken } from "../atoms/loginTest";

export default function LoginPage() {
  const navigate = useNavigate();
  const [, setLoginState] = useRecoilState(userInfo);
  const [, setAccessToken] = useRecoilState(accessToken);
  const [, setRefreshToken] = useRecoilState(refereshToken);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm();

  //유효성 검사
  const onValid = (data) => {
    const { email, password } = getValues();
    userLogin(email, password);
  };
  const onError = (error) => {
    console.log(error);
  };

  //로그인 테스트
  function userLogin(email, password) {
    axios
      .post(
        `http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/login`,
        {
          email: email,
          password: password,
        }
      )
      .then((response) => {
        alert("로그인 완료");
        console.log(response.headers);
        setLoginState(response.headers.avatar); // 일단 유저정보는 아바타만 들어있다
        setAccessToken(response.headers.authorization);
        setRefreshToken(response.headers.refresh);
        // setToken(response.headers.authorization);
        navigate("/");
      })
      .catch((error) => {
        alert("로그인 실패");
      });
  }

  return (
    <>
      <Header />
      <div className="lg:w-full w-full h-screen align-baseline flex justify-center items-center">
        <div className="max-w-md p-2 px-10 m-auto border border-[rgba(83,198,240,0.4)] rounded-xl text-[rgb(83,199,240)]">
          <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2">
            Login
          </div>
          <div className="relative flex justify-center items-center">
            <img src="/images/gradation.png" alt="gradation" className="w-60" />
            <img
              src="/images/notfound_icon_w.png"
              alt="train"
              className="absolute w-16"
            />
          </div>
          <form onSubmit={handleSubmit(onValid, onError)}>
            <div className="font-normal text-[rgb(83,199,240)] pt-1 ">
              Email
            </div>
            <input
              id="email"
              type="email"
              placeholder="test@test.com"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "이메일 형식으로 입력해주세요",
                },
              })}
              className="border border-[rgb(83,199,240)] rounded-md  bg-transparent; focus:outline focus:outline-blue-500 w-80 p-2 mt-1 "
            />
            <p className="w-80 text-red-500 mb-4 ml-2">
              {errors.email?.type === "required" && "아이디를 입력하세요"}
              {errors.email?.type === "pattern" && errors.email.message}
            </p>
            <div className="font-normal text-[rgb(83,199,240)] ml-2">
              password
            </div>
            <button>
              <a href="http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google">
                dddd
              </a>
            </button>
            {/* password 란 라벨이 붙은 input 생성 */}
            <input
              id="password"
              type="password"
              placeholder="abcd@1234"
              {...register("password", {
                required: true,
                pattern: {
                  value:
                    /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/,
                  message:
                    "비밀번호를 8~16자로 영문 대소문자, 숫자, 특수기호를 조합해서 사용하세요.",
                },
              })}
              className="border border-[rgb(83,199,240)] rounded-md  bg-transparent; focus:outline focus:outline-blue-500 w-80 p-2 mt-1"
            />
            <p className="w-80 text-red-500 mb-4 ml-2">
              {errors.password?.type === "required" &&
                "비밀번호를 입력해주세요"}
              {errors.password?.type === "pattern" && errors.password.message}
            </p>

            <div className="w-fit m-auto">
              <button
                type="submit"
                className="text-white font-semibold m-auto w-fit  bg-gradient-to-tl from-white to-[rgb(83,199,240)] py-2 mb-2 px-6 rounded-md"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
