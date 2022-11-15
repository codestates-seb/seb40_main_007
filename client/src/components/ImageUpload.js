/*eslint-disable*/
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import LoginHeader from "../components/LoginHeader";

export default function ImageUpload() {
  const [index, setIndex] = useState("");
  const [images, setImages] = useState([]);
  const onImageChange = (e) => {
    let imageName = e.target.value;
    setImages([...images, imageName]);
  };
  console.log(images);
  const selectStyle = "border-4 border-[rgb(83,199,240)] rounded-xl m-1";

  return (
    <>
      <LoginHeader />
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
    </>
  );
}
