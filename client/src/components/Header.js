import LoginDotModal from "./modals/LoginDotModal";
const Header = () => {
  return (
    <>
      <header className="w-screen border-b-[2px] border-b-[rgb(83,199,240)] fixed z-20 bg-white">
        <div className="max-w-5xl mx-auto flex h-[50px] justify-between">
          <div className="flex items-center">
            <img src="/images/bluelogo.png" alt="logo" className="w-10 h-10" />
            <span className="text-xl text-[rgb(83,199,240)] ml-2">역이요</span>
          </div>
          <div className="flex flex-row items-center">
            <button className="text-[rgb(83,199,240)] text-xl font-medium  sm:hidden">
              <LoginDotModal />
            </button>
            <button className="btn font-medium hidden sm:block">LOGIN</button>
            <button className="btn-white font-medium hidden sm:block">
              SIGN UP
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
