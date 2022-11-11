import { AiOutlineCloseCircle } from "react-icons/ai";

export default function AlertModal() {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="text-right">
              <button
                className="text-gray-400 background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                <AiOutlineCloseCircle size={18} />
              </button>
            </div>
            <div className="text-center mx-5">
              <img src="images/logo.png" alt="logo" />
              <div>사진을 등록해주세요!</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
