import LoginDotModal from "./modals/LoginDotModal";
import { Link } from "react-router-dom";
import { accessToken } from "../atoms/loginData";
import { useRecoilState } from "recoil";
import LoginHeader from "./LoginHeader";

const Header = () => {
  const [TOKEN] = useRecoilState(accessToken);

  return (
    <>
      {TOKEN !== "" ? (
        <LoginHeader />
      ) : (
        <header className="w-full px-2 border-b-[1px] border-b-[rgb(83,199,240)] fixed z-20 bg-white shadow-md">
          <div className="lg:max-w-[1400px] mx-auto flex h-[50px] justify-between items-center">
            <Link to="/" className="no-underline">
              <div className="flex items-center justify-center">
                <img
                  src="/images/bluelogo.png"
                  alt="logo"
                  className="w-10 h-10"
                />
                <span className="lg:text-3xl text-md pt-2 italic font-[Tenada] text-[rgb(83,199,240)] ml-1">
                  역이요
                </span>
              </div>
            </Link>
            <div className="flex flex-row items-center">
              <div className="text-[rgb(83,199,240)] text-xl font-medium  sm:hidden">
                <LoginDotModal />
              </div>
              <>
                <Link to="/initial">
                  <div className="btn font-medium hidden text-center pt-1  sm:block">
                    LOGIN
                  </div>
                </Link>
                <Link to="/signup">
                  <div className="btn-white hidden text-center pt-1 font-medium sm:block">
                    SIGN UP
                  </div>
                </Link>
              </>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
