const MyEmail = ({ email }) => {
  return (
    <div className="w-full p-2 mb-4">
      <p className="w-fit ml-2 px-3 border-b-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)]">
        이메일
      </p>
      <div className="w-full flex flex-center ml-10 mt-5">
        <p className="text-gray-400">
          {/* <span className="text-gray-400 mr-3">Email:</span> */}
          {email}
        </p>
      </div>
    </div>
  );
};

export default MyEmail;
