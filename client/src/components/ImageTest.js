import { useState } from "react";

export default function ImageTest() {
  // const [uploadList, setUploadList] = useState();
  const [imageList, setImageList] = useState([]); // 미리보기 이미지
  // 이벤트 발생한 직전 파일 리스트 담기
  const [fileList, setFileList] = useState([]);

  // 이미지 업로드 버튼이 눌렀을 때
  const insertImg = (e) => {
    let fileImage = e.target.files[0];
    setFileList([...fileList, fileImage]);
    console.log("fileImage", fileImage); // 단일 이미지
    console.log("fileList", fileList); // 여러 이미지

    let reader = new FileReader(); // 파일 읽기
    if (fileImage) {
      reader.readAsDataURL(fileImage);
    }
    reader.onloadend = () => {
      const preveiwUrl = reader.result;
      setImageList([...imageList, preveiwUrl]); // 미리보기 이미지
    };
  };

  // const uploadImg = () => {
  //   const formData = new FormData();
  //   for (const file of fileList) {
  //     formData.append("file", file);
  //   }
  // };

  return (
    // form태그에 encType을 multipart/form-data로 지정해준다.
    <>
      <form encType="multipart/form-data">
        <label htmlFor="file">이미지업로드</label>
        <input
          type="file"
          id="file"
          multiple
          accept="image/jpg, image/jpeg, image/png, image/heif, image/heic"
          onChange={(e) => insertImg(e)}
        />
        <label htmlFor="file">이미지업로드</label>
        <input
          type="file"
          id="file"
          accept="image/jpg, image/jpeg, image/png, image/heif, image/heic"
          onChange={(e) => insertImg(e)}
        />
        <label htmlFor="file">이미지업로드</label>
        <input
          type="file"
          multiple
          id="file"
          accept="image/jpg, image/jpeg, image/png, image/heif, image/heic"
          onChange={(e) => insertImg(e)}
        />
        {/* FileReader객체를 통해서 img태그 src에 들어갈 정보를 얻을 것이다.
      FileReader 객체는 웹 애플리케이션이 비동기적으로 데이터를 읽기 위하여 읽을 파일을 가리키는File 혹은 Blob 객체를 이용해
      파일의 내용을(혹은 raw data버퍼로) 읽고 사용자의 컴퓨터에 저장하는 것을 가능하게 해줍니다.*/}
        {imageList && <img src={imageList[0]} alt="img" />}
        {imageList && <img src={imageList[1]} alt="img" />}
        {imageList && <img src={imageList[2]} alt="img" />}
      </form>
    </>
  );
}
