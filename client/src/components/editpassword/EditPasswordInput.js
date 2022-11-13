/*
  새 비밀번호와 새 비밀번호 확인이 같은지 체크하는 로직 필요
*/

const EditPasswordInput = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="w-2/5 mt-9">
      <div className="pt-8 text-[rgb(83,199,240)]">새 비밀번호</div>
      <input
        className="mt-1 p-1 w-full rounded-lg border-2 border-[rgb(83,199,240)]"
        placeholder="New Password"
        onChange={handleChange}
      ></input>
      <div className="pt-8 text-[rgb(83,199,240)]">새 비밀번호 확인</div>
      <input
        className="mt-1 p-1 w-full rounded-lg border-2 border-[rgb(83,199,240)]"
        placeholder="Confirm Password"
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default EditPasswordInput;
