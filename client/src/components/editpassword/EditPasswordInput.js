/*eslint-disable*/
import { useForm } from "react-hook-form";

const EditPasswordInput = ({ setNewPassword, setConfirmPassword }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm();
  //유효성 검사
  const onValid = (data) => {
    console.log(data);
    const { password } = getValues();
  };
  const onError = (error) => {
    console.log(error);
  };

  return (
    <div className="mt-9">
      <div className="pt-8 text-[rgb(83,199,240)]">새 비밀번호</div>
      <input
        id="password"
        type="password"
        placeholder="abcd@1234"
        onChange={(e) => handleSubmit(onValid(e.target.value))}
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
        {errors.password?.type === "required" && "비밀번호를 입력해주세요"}
        {errors.password?.type === "pattern" && errors.password.message}
      </p>
      <input
        type={"password"}
        className="mt-1 p-1 w-full rounded-lg border-2 border-[rgb(83,199,240)]"
        placeholder="New Password"
        onChange={(e) => setNewPassword(e.target.value)}
      ></input>
      <div className="pt-8 text-[rgb(83,199,240)]">새 비밀번호 확인</div>
      <input
        type={"password"}
        className="mt-1 p-1 w-full rounded-lg border-2 border-[rgb(83,199,240)]"
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></input>
    </div>
  );
};

export default EditPasswordInput;
