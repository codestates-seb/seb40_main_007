const Header = () => {
  return (
    <>
      <header className="w-screen h-[50px] flex flex-row justify-between border-b-[6px] border-b-[rgb(83,199,240)] p-2">
        <div className="flex flex-row">
          <img src="/images/bluelogo.png" alt="logo" />
          <span className="text-xl text-[rgb(83,199,240)] ml-2">역이요</span>
        </div>
        <div>
          <button className="btn">LOGIN</button>
          <button className="btn-white">SIGN UP</button>
        </div>
      </header>
    </>
  );
};

export default Header;
