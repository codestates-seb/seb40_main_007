import { useState } from "react";
export default function ImageTest() {
  const [imageList, setImageList] = useState();

  const fileList = [];
  // 이미지 업로드 버튼이 눌렀을 때
  const insertImg = (e) => {
    let fileImage = e.target.files[0];
    fileList.push(fileImage);
    console.log(fileImage);

    const formData = new FormData();
    formData.append("file", fileList);
    console.log(formData.file);

    // const formData = new FormData();
    // formData.append("file", fileImage);
    // console.log("fileImage", fileImage);
    // console.log("여이요", formData.get("file"));
    // formData.append(
    //   "movie",
    //   // 얘는 new File  객체보다 뭔가 더 부족한 녀석..
    //   new Blob([JSON.stringify(fileImage)], {
    //     type: "application/json",
    //   })
    // );
    // console.log(formData.movie);

    let reader = new FileReader();
    // readAsDataURL메서드는, 컨테츠를 특정 Blob이나 File에서 읽어오는 역할을 하게되고, 읽어오는 read가 종료되는 경우에, readyState의 상태가 DONE이 되고, loadend이벤트가 트리거 되면서, base64 인코딩된 스트링 데이터가 result에 담겨지게 된다.
    if (fileImage) {
      reader.readAsDataURL(fileImage);
    }
    reader.onloadend = () => {
      const preveiwUrl = reader.result;
      setImageList(preveiwUrl);
    };
  };

  return (
    // form태그에 encType을 multipart/form-data로 지정해준다.

    <form encType="multipart/form-data">
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
        id="file"
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
      {/* FileReader객체를 통해서 img태그 src에 들어갈 정보를 얻을 것이다.
      FileReader 객체는 웹 애플리케이션이 비동기적으로 데이터를 읽기 위하여 읽을 파일을 가리키는File 혹은 Blob 객체를 이용해
      파일의 내용을(혹은 raw data버퍼로) 읽고 사용자의 컴퓨터에 저장하는 것을 가능하게 해줍니다.*/}
      {imageList && <img src={imageList} alt="img" />}
    </form>
  );
}
