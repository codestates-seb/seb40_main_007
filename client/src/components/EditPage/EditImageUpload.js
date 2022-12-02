/*eslint-disable*/
import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { editImageState } from "../../atoms/editPageData";
import { useRecoilState } from "recoil";
import { AiOutlineInfoCircle } from "react-icons/ai";
import swal from "sweetalert";
import heic2any from "heic2any";

export default function EditImageUpload({ initialImage }) {
  // 대표 사진 인덱스번호
  const [image, setImage] = useRecoilState(editImageState); // 이미지 배열
  const [previewImage, setPreviewImage] = useState([]); // 이미지 주소 배열
  const FILE_SIZE_MAX_LIMIT = 8 * 1024 * 1024;

  useEffect(() => {
    if (initialImage !== undefined) setPreviewImage(initialImage);
  }, [initialImage]);

  const handleFiles = (e) => {
    let currentImage = e.target.files[0];
    if (currentImage.size > FILE_SIZE_MAX_LIMIT) {
      currentImage = "";
      swal(
        "Can't Upload!",
        "8MB 이상의 사진은 업로드 할 수 없습니다",
        "warning"
      );
      return;
    }
    // heic to jpg
    let checkType = currentImage.name.split(".");
    if (
      checkType[1] === "hiec" ||
      checkType[1] === "hief" ||
      checkType[1] === "HEIC" ||
      checkType[1] === "HEIF"
    ) {
      heic2any({
        blob: currentImage,
        toType: "image/jpeg",
      }).then((convertedBlob) => {
        console.log(convertedBlob);
        let url = URL.createObjectURL(convertedBlob);
        setImage([...image, convertedBlob]);
        setPreviewImage([...previewImage, url]);
      });
      return;
    } else if (
      checkType[1] !== "png" &&
      checkType[1] !== "PNG" &&
      checkType[1] !== "jpg" &&
      checkType[1] !== "JPG" &&
      checkType[1] !== "jpeg" &&
      checkType[1] !== "JPEG"
    ) {
      swal("Can't Upload!", "지원하지 않는 파일 형식입니다", "warning");
      return;
    }

    setImage([...image, currentImage]); //현재 이미지 배열에 저장
    let reader = new FileReader(); //현재 이미지 읽기 모드
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
      <div className="lg:pt-20 pt-10 font-semibold border-b-2 border-[rgb(83,199,240)] w-fit lg:px-5 px-3 pb-2 lg:mb-16 mb-5 lg:text-base text-sm text-[rgb(83,199,240)]">
        사진 등록
      </div>

      <form
        encType="multipart/form-data"
        className="lg:w-6xl flex justify-center"
      >
        <div>
          {previewImage[0] === undefined ? (
            <>
              <label htmlFor="file" className="z-10">
                <div className="flex lg:m-3 m-[2px] text-[rgb(83,199,240)]">
                  <div className="bg-[#D9D9D9] rounded-lg lg:p-8 p-4">
                    <BsPlusLg className="lg:w-20 lg:h-20 w-12 h-12" />
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
            <div className=" flex lg:m-3 m-[2px] text-[rgb(83,199,240)]">
              <div className="bg-[#D9D9D9] rounded-lg lg:w-36 lg:h-36 w-20 h-20 flex justify-center items-center relative">
                <img
                  src={previewImage[0]}
                  alt="preveiwImage[0]"
                  onClick={() => selectThumnail(0)}
                  className="rounded-lg max-w-full max-h-full"
                />
                <span className="lg:text-sm text-[8px] lg:px-2 px-1 top-1 left-1 bg-[rgb(83,199,240)] text-white p-1 lg:rounded-xl rounded-md absolute">
                  대표
                </span>
                <button
                  type="button"
                  className="absolute right-1 top-1 bg-[rgb(83,199,240)] text-white p-1 rounded-full"
                >
                  <FiTrash2
                    onClick={(e) => handleDelete(e, 0)}
                    className="lg:w-5 lg:h-5 w-3 h-3"
                  />
                </button>
              </div>
            </div>
          )}
        </div>
        <div>
          {previewImage[1] === undefined ? (
            <>
              <label htmlFor="file" className="z-10">
                <div className=" flex lg:m-3 m-[2px] text-[rgb(83,199,240)]">
                  <div className="bg-[#D9D9D9] rounded-lg lg:p-8 p-4">
                    <BsPlusLg className="lg:w-20 lg:h-20 w-12 h-12" />
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
            <div className=" flex lg:m-3 m-[2px] text-[rgb(83,199,240)]">
              <div className="bg-[#D9D9D9] rounded-lg lg:w-36 lg:h-36 w-20 h-20 flex justify-center items-center relative">
                <img
                  src={previewImage[1]}
                  alt="preveiwImage[1]"
                  onClick={() => selectThumnail(1)}
                  className="rounded-lg max-w-full max-h-full"
                />
                <button
                  type="button"
                  className="absolute right-1 top-1 bg-[rgb(83,199,240)] text-white p-1 rounded-full"
                >
                  <FiTrash2
                    onClick={(e) => handleDelete(e, 1)}
                    className="lg:w-5 lg:h-5 w-3 h-3"
                  />
                </button>
              </div>
            </div>
          )}
        </div>
        <div>
          {previewImage[2] === undefined ? (
            <>
              <label htmlFor="file" className="z-10">
                <div className=" flex lg:m-3 m-[2px] text-[rgb(83,199,240)]">
                  <div className="bg-[#D9D9D9] rounded-lg lg:p-8 p-4">
                    <BsPlusLg className="lg:w-20 lg:h-20 w-12 h-12" />
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
            <div className=" flex lg:m-3 m-[2px] text-[rgb(83,199,240)]">
              <div className="bg-[#D9D9D9] rounded-lg lg:w-36 lg:h-36 w-20 h-20 flex justify-center items-center relative">
                <img
                  src={previewImage[2]}
                  alt="preveiwImage[2]"
                  onClick={() => selectThumnail(2)}
                  className="rounded-lg max-w-full max-h-full"
                />
                <button
                  type="button"
                  className="absolute right-1 top-1 bg-[rgb(83,199,240)] text-white p-1 rounded-full"
                >
                  <FiTrash2
                    onClick={(e) => handleDelete(e, 2)}
                    className="lg:w-5 lg:h-5 w-3 h-3"
                  />
                </button>
              </div>
            </div>
          )}
        </div>
        <div>
          {previewImage[3] === undefined ? (
            <>
              <label htmlFor="file" className="z-10">
                <div className=" flex lg:m-3 m-[2px] text-[rgb(83,199,240)]">
                  <div className="bg-[#D9D9D9] rounded-lg lg:p-8 p-4">
                    <BsPlusLg className="lg:w-20 lg:h-20 w-12 h-12" />
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
            <div className=" flex lg:m-3 m-[2px] text-[rgb(83,199,240)]">
              <div className="bg-[#D9D9D9] rounded-lg lg:w-36 lg:h-36 w-20 h-20 flex justify-center items-center relative">
                <img
                  src={previewImage[3]}
                  alt="preveiwImage[3]"
                  onClick={() => selectThumnail(3)}
                  className="rounded-lg max-w-full max-h-full"
                />
                <button
                  type="button"
                  className="absolute right-1 top-1 bg-[rgb(83,199,240)] text-white p-1 rounded-full"
                >
                  <FiTrash2
                    onClick={(e) => handleDelete(e, 3)}
                    className="lg:w-5 lg:h-5 w-3 h-3"
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
      <div className="max-w-2xl m-auto text-end lg:text-sm text-xs text-gray-500">
        <AiOutlineInfoCircle className="inline mr-1" />
        heic/feif 파일은 다소 시간이 소요될 수 있습니다.
      </div>
      <div className="flex justify-center items-center m-auto"></div>
    </>
  );
}
