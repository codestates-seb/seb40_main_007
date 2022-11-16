import LoginDotModal from "./modals/LoginDotModal";
import { Link } from "react-router-dom";

// 로그인 테스트용입니다.
import { loginOk } from "../atoms/loginTest";
import { useRecoilState } from "recoil";

const Header = () => {
  // 로그인 테스트용입니다.
  const [login] = useRecoilState(loginOk);

  return (
    <>
      <header className="w-screen border-b-[2px] border-b-[rgb(83,199,240)] fixed z-20 bg-white">
        <div className="max-w-5xl mx-auto flex h-[50px] justify-between items-center">
          <Link to="/" className="no-underline">
            <div className="flex items-center">
              <img
                src="/images/bluelogo.png"
                alt="logo"
                className="w-10 h-10"
              />
              <span className="text-xl text-[rgb(83,199,240)] ml-2">
                역이요
              </span>
            </div>
          </Link>

          <div className="flex flex-row items-center">
            <button className="text-[rgb(83,199,240)] text-xl font-medium  sm:hidden">
              <LoginDotModal />
            </button>

            {/* 원래 페이지 */}
            {/* <Link to="/login">
                <button className="btn font-medium hidden sm:block">
                  LOGIN
                </button>
              </Link>
              <Link to="/signup">
                <button className="btn-white font-medium hidden sm:block">
                  SIGN UP
                </button>
              </Link> */}

            {/* 로그인 테스트용입니다. 로그인에 성공하면 생깁니다. */}
            {login ? (
              <>
                <Link to="/mypage">
                  {console.log(login)}
                  <button className="btn font-medium hidden sm:block">
                    마이페이지
                  </button>
                </Link>
                <Link to="/logout">
                  {console.log(login)}
                  <button className="btn font-medium hidden sm:block">
                    로그아웃
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn font-medium hidden sm:block">
                    LOGIN
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="btn-white font-medium hidden sm:block">
                    SIGN UP
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
