import { atom } from "recoil";
import { v1 } from "uuid";

export const postTrainStationState = atom({
  key: `trainStation/${v1()}`,
  default: "기차역",
});
//  const [trainStation, setTrainStation] = useRecoilState(postTrainStationState);

export const postAdressState = atom({
  key: `adress/${v1()}`,
  default: "주소",
});

export const postpostionState = atom({
  key: `position/${v1()}`,
  default: "위도",
});

export const postTitleState = atom({
  key: `title/${v1()}`,
  default: "제목",
});

export const postImageState = atom({
  key: `postImage/${v1()}`,
  default: [],
});

export const postCategoryState = atom({
  key: `postCategory/${v1()}`,
  default: "",
});

export const postRelatedState = atom({
  key: `postRelated/${v1()}`,
  default: "관련태그기본",
});

export const postRelatedAtmasState = atom({
  key: `postAtmos/${v1()}`,
  default: "분위기기본",
});

export const postRelatedPriceState = atom({
  key: `postPrice/${v1()}`,
  default: "가격기본",
});

export const postStarState = atom({
  key: `postStar/${v1()}`,
  default: "0",
});

export const postCommentState = atom({
  key: `postComment/${v1()}`,
  default: "",
});

//post 페이지 정보 (기차역, 주소, 카테고리 태그, 관련 카테고리 태그, 분위기태그, 가격태그)
// 명명구조 (페이지이름 + 정보 + State)
// WriteModal 에서 카테고리 정보 넘기고 PostTrainSelect 모달에서 기차역 정보 선택
