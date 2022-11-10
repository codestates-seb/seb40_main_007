const Header = () => {
  return (
    <>
      <header className="w-screen h-12 flex flex-row align-middle">
        <div>
          <img src="..." alt="logo" />
          <span className="">역이요</span>
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
