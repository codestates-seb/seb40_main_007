/*eslint-disable*/
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { postImageState } from "../atoms/postInfo";
import { useRecoilState } from "recoil";

export default function ImageUpload() {
  // 대표 사진 인덱스번호
  const [image, setImage] = useRecoilState(postImageState); // 이미지 배열
  const [previewImage, setPreviewImage] = useState([]); // 이미지 주소 배열

  // 사진파일, 미리보기파일 추가
  const handleFiles = (e) => {
    let currentImage = e.target.files[0];
    setImage([...image, currentImage]);

    let reader = new FileReader();
    if (currentImage) {
      reader.readAsDataURL(currentImage);
    }
    reader.onloadend = () => {
      let preveiwUrl = reader.result;
      setPreviewImage([...previewImage, preveiwUrl]);
    };
  };

  // 파일 삭제
  const handleDelete = (e, idx) => {
    e.preventDefault();
    const copyImg = image.slice();
    const copyUrl = previewImage.slice();
    copyImg.splice(idx, 1);
    copyUrl.splice(idx, 1);
    setPreviewImage(copyUrl);
    setImage(copyImg);
  };

  // 썸네일 사진 선택
  const selectThumnail = (idx) => {
    let copyImg = image.slice();
    let copyUrl = previewImage.slice();
    let selectImg = copyImg.splice(idx, 1);
    let selectUrl = copyUrl.splice(idx, 1);
    setImage([...selectImg, ...copyImg]);
    setPreviewImage([...selectUrl, ...copyUrl]);
  };
  return (
    <>
      <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 text-18 text-[rgb(83,199,240)] mt-20 mb-16">
        사진 등록
      </div>

      <form encType="multipart/form-data" className="w-6xl flex justify-center">
        <div>
          {previewImage[0] === undefined ? (
            <>
              <label htmlFor="file" className="z-10">
                <div className=" flex m-3 text-[rgb(83,199,240)]">
                  <div className="bg-[#D9D9D9] rounded-lg sm:p-8 p-2">
                    <BsPlusLg className="sm:w-20 sm:h-20 w-16 h-16" />
                  </div>
                </div>
              </label>
              <input
                multiple
                type="file"
                id="file"
                accept="image/jpg, image/jpeg, image/png, image/heif, image/heic"
                onChange={(e) => handleFiles(e)}
                className="hidden"
              />
            </>
          ) : (
            <div className=" flex m-3 text-[rgb(83,199,240)]">
              <div className="bg-[#D9D9D9] rounded-lg w-36 h-36 flex justify-center items-center relative border-4 border-[rgb(83,199,240)]">
                <img
                  src={previewImage[0]}
                  alt="preveiwImage[0]"
                  onClick={() => selectThumnail(0)}
                  className="max-w-36 max-h-36 "
                />
                <span className="text-xs px-2 top-1 left-1 bg-[rgb(83,199,240)] text-white p-1 rounded-xl absolute">
                  대표
                </span>
                <button className="absolute right-1 top-1 bg-[rgb(83,199,240)] text-white p-1 rounded-full">
                  <FiTrash2 onClick={(e) => handleDelete(e, 0)} />
                </button>
              </div>
            </div>
          )}
        </div>
        <div>
          {previewImage[1] === undefined ? (
            <>
              <label htmlFor="file" className="z-10">
                <div className=" flex m-3 text-[rgb(83,199,240)]">
                  <div className="bg-[#D9D9D9] rounded-lg sm:p-8 p-2">
                    <BsPlusLg className="sm:w-20 sm:h-20 w-16 h-16" />
                  </div>
                </div>
              </label>
              <input
                multiple
                type="file"
                id="file"
                accept="image/jpg, image/jpeg, image/png, image/heif, image/heic"
                onChange={(e) => handleFiles(e)}
                className="hidden"
              />
            </>
          ) : (
            <div className=" flex m-3 text-[rgb(83,199,240)]">
              <div className="bg-[#D9D9D9] rounded-lg w-36 h-36 flex justify-center items-center relative">
                <img
                  src={previewImage[1]}
                  alt="preveiwImage[1]"
                  onClick={() => selectThumnail(1)}
                  className="max-w-36 max-h-36"
                />
                <button className="absolute right-1 top-1 bg-[rgb(83,199,240)] text-white p-1 rounded-full">
                  <FiTrash2 onClick={(e) => handleDelete(e, 1)} />
                </button>
              </div>
            </div>
          )}
        </div>
        <div>
          {previewImage[2] === undefined ? (
            <>
              <label htmlFor="file" className="z-10">
                <div className=" flex m-3 text-[rgb(83,199,240)]">
                  <div className="bg-[#D9D9D9] rounded-lg sm:p-8 p-2">
                    <BsPlusLg className="sm:w-20 sm:h-20 w-16 h-16" />
                  </div>
                </div>
              </label>
              <input
                multiple
                type="file"
                id="file"
                accept="image/jpg, image/jpeg, image/png, image/heif, image/heic"
                onChange={(e) => handleFiles(e)}
                className="hidden"
              />
            </>
          ) : (
            <div className=" flex m-3 text-[rgb(83,199,240)]">
              <div className="bg-[#D9D9D9] rounded-lg w-36 h-36 flex justify-center items-center relative">
                <img
                  src={previewImage[2]}
                  alt="preveiwImage[2]"
                  onClick={() => selectThumnail(2)}
                  className="max-w-36 max-h-36"
                />
                <button className="absolute right-1 top-1 bg-[rgb(83,199,240)] text-white p-1 rounded-full">
                  <FiTrash2 onClick={(e) => handleDelete(e, 2)} />
                </button>
              </div>
            </div>
          )}
        </div>
        <div>
          {previewImage[3] === undefined ? (
            <>
              <label htmlFor="file" className="z-10">
                <div className=" flex m-3 text-[rgb(83,199,240)]">
                  <div className="bg-[#D9D9D9] rounded-lg sm:p-8 p-2">
                    <BsPlusLg className="sm:w-20 sm:h-20 w-16 h-16" />
                  </div>
                </div>
              </label>
              <input
                multiple
                type="file"
                id="file"
                accept="image/jpg, image/jpeg, image/png, image/heif, image/heic"
                onChange={(e) => handleFiles(e)}
                className="hidden"
              />
            </>
          ) : (
            <div className=" flex m-3 text-[rgb(83,199,240)]">
              <div className="bg-[#D9D9D9] rounded-lg w-36 h-36 flex justify-center items-center relative">
                <img
                  src={previewImage[3]}
                  alt="preveiwImage[3]"
                  onClick={() => selectThumnail(3)}
                  className="max-w-36 max-h-36"
                />
                <button className="absolute right-1 top-1 bg-[rgb(83,199,240)] text-white p-1 rounded-full">
                  <FiTrash2 onClick={(e) => handleDelete(e, 3)} />
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
      <div className="flex justify-center items-center m-auto"></div>
    </>
  );
}
