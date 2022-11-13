import EditNickname from "../components/editmyinfo/EditNickname";
import EditProfileImg from "../components/editmyinfo/EditProfileImg";

const EditMyInfo = () => {
  return (
    <div>
      <div className="mb-3 flex justify-start">
        <p className="ml-2 pr-7 border-b-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)]">
          내 정보 수정
        </p>
      </div>
      <div className="w-2/5 flex flex-col items-center">
        <EditProfileImg />
        <EditNickname />
        <div className="pt-20 gap-2 flex flex-col items-center">
          <button className="btn">수정완료</button>
          <button className="btn bg-gray-400">수정취소</button>
        </div>
      </div>
    </div>
  );
};

export default EditMyInfo;
