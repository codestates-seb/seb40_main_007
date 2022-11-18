/*eslint-disable*/
import Header from "../components/Header";
import { useForm } from "react-hook-form";

// 테스트용 아이디/비밀번호입니다.
import { useNavigate } from "react-router-dom";

export default function LoginPage({ setLogin }) {
  // 로그인 테스트 로직입니다.
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm();

  const onValid = (data) => {
    // 기본으로 data 가져오기
    console.log(data);
    // getValues()로 data 가져오기
    const { email, password } = getValues();
    console.log(email, password);
    if (email === "test@test.com" && password === "abcd@1234") {
      console.log("로그인성공!!");
      // const [login] = useRecoilState(loginOk);
      setLogin(true);
      navigate("/");
    } else {
      console.log("로그인되었습니다.");
    }
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <>
      <Header />
      <div className="lg:w-full w-full h-screen align-baseline flex justify-center items-center">
        {/*  */}
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
              {" "}
              {errors.email?.type === "required" && "아이디를 입력하세요"}
              {errors.email?.type === "pattern" && errors.email.message}
            </p>
            <div className="font-normal text-[rgb(83,199,240)] ml-2">
              password
            </div>
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
