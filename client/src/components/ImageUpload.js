/*eslint-disable*/
import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import ReactFileReader from "react-file-reader";
import { FiTrash2 } from "react-icons/fi";

export default function ImageUpload() {
  // 대표 사진 인덱스번호
  const [index, setIndex] = useState(0);
  // 이미지 주소 배열
  const [url, setUrl] = useState([]);

  // 파일 추가
  const handleFiles = (files) => {
    console.log(files);
    // const formData = new FormData();
    // formData.append("file", files[0]);
    let fileUrl = files.base64;
    setUrl([...url, fileUrl]);
  };
  console.log(url);

  // 파일 삭제
  const handleDelete = (idx) => {
    let copyUrl = url.slice();
    copyUrl.splice(idx, 1);
    setUrl(copyUrl);
    console.log(copyUrl);
  };

  return (
    <ul className="w-fit flex m-3 text-[rgb(83,199,240)]">
      <li
        className={
          index === 0 && url[0]
            ? "border-4 border-[rgb(83,199,240)] rounded-xl m-1"
            : "m-1"
        }
        onClick={() => {
          if (url[0] !== undefined) setIndex(0);
        }}
      >
        {!url[0] ? (
          <div className="bg-[#D9D9D9] rounded-lg sm:p-8 p-2">
            <ReactFileReader
              fileTypes={[".png", ".jpg", ".jpeg", ".heic"]}
              base64={true}
              handleFiles={handleFiles}
            >
              <BsPlusLg className="sm:w-20 sm:h-20 w-16 h-16" />
            </ReactFileReader>
          </div>
        ) : (
          <div className="bg-[#D9D9D9] rounded-lg w-32 h-32 flex justify-center items-center relative">
            {index === 0 && url[0] ? (
              <span className="text-xs px-2 top-1 left-1 bg-[rgb(83,199,240)] text-white p-1 rounded-xl absolute">
                대표
              </span>
            ) : null}
            <button className="absolute right-1 top-1 bg-[rgb(83,199,240)] text-white p-1 rounded-full">
              <FiTrash2 onClick={() => handleDelete(0)} />
            </button>
            <img src={url[0]} alt="PRE" className="max-w-20 max-h-20" />
          </div>
        )}
      </li>

      <li
        className={
          index === 1 && url[1]
            ? "border-4 border-[rgb(83,199,240)] rounded-xl m-1"
            : "m-1"
        }
        onClick={() => {
          if (url[1] !== undefined) setIndex(1);
        }}
      >
        {!url[1] ? (
          <div className="bg-[#D9D9D9] rounded-lg sm:p-8 p-2">
            <ReactFileReader
              fileTypes={[".png", ".jpg", ".jpeg", ".heic"]}
              base64={true}
              handleFiles={handleFiles}
            >
              <BsPlusLg className="sm:w-20 sm:h-20 w-16 h-16" />
            </ReactFileReader>
          </div>
        ) : (
          <div className="bg-[#D9D9D9] rounded-lg w-32 h-32 flex justify-center items-center relative">
            {index === 1 && url[1] ? (
              <span className="text-xs px-2 top-1 left-1 bg-[rgb(83,199,240)] text-white p-1 rounded-xl absolute">
                대표
              </span>
            ) : null}
            <button className="absolute right-1 top-1 bg-[rgb(83,199,240)] text-white p-1 rounded-full">
              <FiTrash2 onClick={() => handleDelete(1)} />
            </button>
            <img src={url[1]} alt="PRE" className="max-w-20 max-h-20" />
          </div>
        )}
      </li>

      <li
        className={
          index === 2 && url[2]
            ? "border-4 border-[rgb(83,199,240)] rounded-xl m-1"
            : "m-1"
        }
        onClick={() => {
          if (url[2] !== undefined) setIndex(2);
        }}
      >
        {!url[2] ? (
          <div className="bg-[#D9D9D9] rounded-lg sm:p-8 p-2 ">
            <ReactFileReader
              fileTypes={[".png", ".jpg", ".jpeg", ".heic"]}
              base64={true}
              handleFiles={handleFiles}
            >
              <BsPlusLg className="sm:w-20 sm:h-20 w-16 h-16" />
            </ReactFileReader>
          </div>
        ) : (
          <div className="bg-[#D9D9D9] rounded-lg w-32 h-32 flex justify-center items-center relative">
            {index === 2 && url[2] ? (
              <span className="text-xs px-2 top-1 left-1 bg-[rgb(83,199,240)] text-white p-1 rounded-xl absolute">
                대표
              </span>
            ) : null}
            <button className="absolute right-1 top-1 bg-[rgb(83,199,240)] text-white p-1 rounded-full">
              <FiTrash2 onClick={() => handleDelete(2)} />
            </button>
            <img src={url[2]} alt="PRE" className="max-w-20 max-h-20" />
          </div>
        )}
      </li>

      <li
        className={
          index === 3 && url[3]
            ? "border-4 border-[rgb(83,199,240)] rounded-xl m-1"
            : "m-1"
        }
        onClick={() => {
          if (url[3] !== undefined) setIndex(3);
        }}
      >
        {!url[3] ? (
          <div className="bg-[#D9D9D9] rounded-lg sm:p-8 p-2">
            <ReactFileReader
              fileTypes={[".png", ".jpg", ".jpeg", ".heic"]}
              base64={true}
              handleFiles={handleFiles}
            >
              <BsPlusLg className="sm:w-20 sm:h-20 w-16 h-16" />
            </ReactFileReader>
          </div>
        ) : (
          <div className="bg-[#D9D9D9] rounded-lg w-32 h-32 flex justify-center items-center relative">
            {index === 3 && url[3] ? (
              <span className="text-xs px-2 top-1 left-1 bg-[rgb(83,199,240)] text-white p-1 rounded-xl absolute">
                대표
              </span>
            ) : null}
            <button className="absolute right-1 top-1 bg-[rgb(83,199,240)] text-white p-1 rounded-full ">
              <FiTrash2 onClick={() => handleDelete(3)} />
            </button>
            <img src={url[3]} alt="PRE" className="max-w-20 max-h-20" />
          </div>
        )}
      </li>
    </ul>
  );
}
