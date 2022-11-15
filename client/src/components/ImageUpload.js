/*eslint-disable*/
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import ReactFileReader from "react-file-reader";

export default function ImageUpload() {
  const [index, setIndex] = useState("");

  const selectStyle = "border-4 border-[rgb(83,199,240)] rounded-xl m-1";

  const [url, setUrl] = useState("");

  const handleFiles = (files) => {
    console.log(files);
    const formData = new FormData();
    formData.append("file", files[0]);
    setUrl(files.base64);
  };

  return (
    <div className="">
      <img src={url} alt="PRE" />

      <ReactFileReader
        fileTypes={[".png", ".jpg", ".jpeg", ".heic"]}
        base64={true}
        handleFiles={handleFiles}
      >
        <BsPlusLg size={64} />
      </ReactFileReader>

      <ul className="w-fit flex m-3 text-[rgb(83,199,240)]">
        <li
          className={index === 0 ? selectStyle : "m-1"}
          onClick={() => setIndex(0)}
        >
          <div className="bg-[#D9D9D9] rounded-lg p-8">
            <label htmlFor="file">
              <BsPlusLg size={64} />
            </label>
            <input
              type="file"
              accept="image/*"
              id="file"
              className="hidden"
              onChange={(e) => onImageChange(e)}
            />
          </div>
        </li>

        <li
          className={index === 1 ? selectStyle : "m-1"}
          onClick={() => setIndex(1)}
        >
          <div className="bg-[#D9D9D9]  rounded-lg p-8">
            <label htmlFor="file">
              <BsPlusLg size={64} />
            </label>
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={(e) => onImageChange(e)}
            />
          </div>
        </li>

        <li
          className={index === 2 ? selectStyle : "m-1"}
          onClick={() => setIndex(2)}
        >
          <div className="bg-[#D9D9D9]  rounded-lg p-8">
            <label htmlFor="file">
              <BsPlusLg size={64} />
            </label>
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={(e) => onImageChange(e)}
            />
          </div>
        </li>

        <li
          className={index === 3 ? selectStyle : "m-1"}
          onClick={() => setIndex(3)}
        >
          <div className="bg-[#D9D9D9] rounded-lg p-8">
            <label htmlFor="file">
              <BsPlusLg size={64} />
            </label>
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={(e) => onImageChange(e)}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
