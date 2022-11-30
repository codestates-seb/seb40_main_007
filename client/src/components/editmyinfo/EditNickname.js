import { useNavigate } from "react-router-dom";
import { accessToken, userName } from "../../atoms/loginData";
import { useRecoilValue, useRecoilState } from "recoil";
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";

const EditNickname = () => {
  const navigate = useNavigate();
  const TOKEN = useRecoilValue(accessToken);
  const [nickName, setNickName] = useState("");
  const [useName, setUserName] = useRecoilState(userName);
  const handleChange = (e) => {
    setNickName(e.target.value);
  };
  const hadleSubmit = () => {
    const config = {
      headers: { Authorization: TOKEN },
    };
    if (nickName.length <= 1) {
      swal("Can't Change!", "닉네임은 한글자 이상 입력해주세요", "warning");
    } else {
      axios
        .patch(
          `${process.env.REACT_APP_URL}/members`,
          {
            name: nickName,
          },
          config
        )
        .then(function (response) {
          console.log(response);
          setUserName(nickName);
          swal("닉네임이 변경되었습니다");
          navigate("/mypage");
        })

        .catch(function (error) {
          console.log(error);
          swal("Can't Change!", "중복된 닉네임 입니다", "warning");
        });
    }
  };
  return (
    <div className="max-w-md mt-9">
      <div className="text-[rgb(83,199,240)]">
        <p>닉네임</p>
      </div>
      <input
        value={nickName}
        className="mt-1 p-1 w-full rounded-lg border-2 border-[rgb(83,199,240)]"
        placeholder={useName}
        onChange={handleChange}
      ></input>

      <div className="pt-5 gap-2 flex flex-col items-center">
        <button className="btn btn-hover text-sm mt-5" onClick={hadleSubmit}>
          닉네임 변경
        </button>
      </div>
    </div>
  );
};

export default EditNickname;
