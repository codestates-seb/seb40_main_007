const MyEmail = ({ email }) => {
  return (
    <div className="w-full lg:p-2 mb-4">
      <p className="w-fit lg:text-base text-sm lg:ml-2 lg:px-3 px-2 border-b-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)]">
        이메일
      </p>
      <div className="w-full flex flex-center ml-10 mt-5 lg:text-base text-sm">
        <p className="text-gray-400">
          {/* <span className="text-gray-400 mr-3">Email:</span> */}
          {email}
        </p>
      </div>
    </div>
  );
};

export default MyEmail;
