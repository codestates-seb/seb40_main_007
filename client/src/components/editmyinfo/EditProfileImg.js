import EditBtn from "./EditBtn";
const EditProfileImg = () => {
  return (
    <div className="w-2/5 mt-20">
      <div>
        <p className="text-[rgb(83,199,240)]">프로필 이미지</p>
      </div>
      <div className="flex justify-center">
        <div className="mt-2 w-[5rem] h-[5rem] flex items-end justify-end">
          <EditBtn usePlace="EditProfileImg" position={"absolute"} />
          <img
            className="rounded-full p-0 m-0 static"
            alt="ProfileImg"
            src="images/profile.png"
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfileImg;
