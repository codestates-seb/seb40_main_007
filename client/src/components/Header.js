const Header = () => {
  return (
    <>
      <header className="w-screen h-[50px] flex flex-row justify-between border-b-[2px] border-b-[rgb(83,199,240)] p-2 fixed z-10 bg-white">
        <div className="flex flex-row">
          <img src="/images/bluelogo.png" alt="logo" />
          <span className="text-xl text-[rgb(83,199,240)] ml-2">역이요</span>
        </div>
        <div className="flex flex-row items-center">
          <button className="btn">LOGIN</button>
          <button className="btn-white">SIGN UP</button>
        </div>
      </header>
    </>
  );
};

export default Header;
