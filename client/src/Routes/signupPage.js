/*eslint-disable*/
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
export default function SignupPage() {
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
    userSignup(email, password);
  };

  async function userSignup(email, password) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/members/signup`,
        {
          email: email,
          password: password,
        }
      );
      swal("회원가입 완료!", "로그인 후 이용하세요", "success");
      navigate("/login");
    } catch (error) {
      if (error.response.status === 409) {
        swal("DUPLICATION!", "중복된 아이디 입니다", "warning");
      } else {
        swal("SORRY!", "회원가입 실패", "warning");
      }
      navigate("/signup");
    }
  }

  const onError = (error) => {
    console.log(error);
  };

  return (
    <>
      <Header />

      <div className="lg:w-full w-full h-screen align-baseline flex justify-center items-center bg-[rgba(235,235,235,0.34)]">
        <div className="max-w-md p-2 lg:px-10 px:5 m-auto border rounded-xl text-[rgb(83,199,240)] bg-white shadow-lg">
          <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2">
            SignUp
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
              placeholder="email"
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
            {/* password 란 라벨이 붙은 input 생성 */}
            <input
              id="password"
              type="password"
              placeholder="password"
              {...register("password", {
                required: true,
                pattern: {
                  value:
                    /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/,
                  message:
                    "비밀번호를 8~16자로 영문, 숫자, 특수기호를 조합해서 사용하세요.",
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
                className="text-white font-semibold m-auto w-fit  bg-gradient-to-tl from-white to-[rgb(83,199,240)] py-2 px-6 mb-2 rounded-md"
              >
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
