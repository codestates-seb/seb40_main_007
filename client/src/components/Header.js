import LoginDotModal from "./modals/LoginDotModal";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="w-screen border-b-[2px] border-b-[rgb(83,199,240)] fixed z-20 bg-white">
        <div className="max-w-5xl mx-auto flex h-[50px] justify-between items-center">
          <Link to="/main" className="no-underline">
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
            <Link to="/login">
              <button className="btn font-medium hidden sm:block">LOGIN</button>
            </Link>
            <Link to="/signup">
              <button className="btn-white font-medium hidden sm:block">
                SIGN UP
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
