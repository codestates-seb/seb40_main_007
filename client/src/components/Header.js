const Header = () => {
  return (
    <>
<<<<<<< HEAD
      <header className="w-screen h-[50px] flex flex-row justify-between border-b-[2px] border-b-[rgb(83,199,240)] p-2 fixed z-10 bg-white">
        <div className="flex flex-row">
          <img src="/images/logo.png" alt="logo" />
          <span className="text-xl text-[rgb(83,199,240)] ml-2">역이요</span>
        </div>
        <div className="flex flex-row items-center">
          <button className="btn">LOGIN</button>
          <button className="btn-white">SIGN UP</button>
=======
      <header className="w-screen border-b-[2px] border-b-[rgb(83,199,240)] fixed z-20 bg-white">
        <div className="max-w-5xl mx-auto flex h-[50px] justify-between">
          <div className="flex items-center">
            <img src="/images/bluelogo.png" alt="logo" className="w-10 h-10" />
            <span className="text-xl text-[rgb(83,199,240)] ml-2">역이요</span>
          </div>
          <div className="flex flex-row items-center">
            <button className="btn font-medium">LOGIN</button>
            <button className="btn-white font-medium">SIGN UP</button>
          </div>
>>>>>>> dfd10bd4e2c7bba30a0a1e56d5f703901cc9fa7e
        </div>
      </header>
    </>
  );
};

export default Header;
