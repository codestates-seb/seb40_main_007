const EditPasswordInput = ({ setNewPassword, setConfirmPassword }) => {
  return (
    <div className="mt-9">
      <div className="pt-8 text-[rgb(83,199,240)]">새 비밀번호</div>
      <input
        type={"password"}
        className="mt-1 p-1 w-full rounded-lg border-2 border-[rgb(83,199,240)]"
        placeholder="New Password"
        onChange={(e) => setNewPassword(e.target.value)}
      ></input>
      <div className="pt-8 text-[rgb(83,199,240)]">새 비밀번호 확인</div>
      <input
        type={"password"}
        className="mt-1 p-1 w-full rounded-lg border-2 border-[rgb(83,199,240)]"
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></input>
    </div>
  );
};

export default EditPasswordInput;
