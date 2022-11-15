/*
    input - placeholder 로그인한 유저에 따라 변경.
    닉네임 유효성 검사 구형해야함.
*/

const EditNickname = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="max-w-md mt-9">
      <div className="text-[rgb(83,199,240)]">
        <p>닉네임</p>
      </div>
      <input
        className="mt-1 p-1 w-full rounded-lg border-2 border-[rgb(83,199,240)]"
        placeholder="Euginius1st"
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default EditNickname;
