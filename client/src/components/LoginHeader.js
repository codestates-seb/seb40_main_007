import ProfileModal from "./modals/ProfileModal";
import { Link } from "react-router-dom";

const LoginHeader = () => {
  return (
    <>
      <header className="w-full border-b-[1px] border-b-[rgb(83,199,240)] fixed z-20 top-0 bg-white shadow-md">
        <div className="max-w-[1400px] mx-auto flex h-[50px] justify-between items-center">
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
          <ProfileModal />
        </div>
      </header>
    </>
  );
};

export default LoginHeader;
