import LoginHeader from "../components/LoginHeader";
import { useRecoilValue } from "recoil";
import { accessToken } from "../atoms/loginTest";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

export default function SignoutPage() {
  const TOKEN = useRecoilValue(accessToken);
  const navigate = useNavigate();
  console.log(TOKEN);
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
          .delete(
            `http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/members`,
            {
              data: {
                password: "",
              },
            },
            config
          )
          .then((response) => {
            swal("탈퇴되었습니다.", {
              icon: "success",
            });
            console.log(response);
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
      <div className="lg:w-full w-full h-screen align-baseline flex justify-center items-center">
        <div className="max-w-md p-2 px-10 m-auto border border-[rgba(83,198,240,0.4)] rounded-xl text-[rgb(83,199,240)]">
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
