import EditBtn from "./EditBtn";
const EditProfileImg = () => {
  return (
    <div className="w-[5rem] h-[5rem] flex items-end justify-end">
      <EditBtn usePlace="EditProfileImg" position={"absolute"} />
      <img
        className="rounded-full p-0 m-0 static"
        alt="ProfileImg"
        src="images/profile.png"
      />
    </div>
  );
};

export default EditProfileImg;
