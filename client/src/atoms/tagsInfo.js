import { atom } from "recoil";

// ---------------------------------
//   숫자 -> 문자
// ---------------------------------

// 카테고리 아이디 정보
// --- 임시정보
// const kategorieInfo = useRecoilValue(kategorieInfoList);
export const kategorieInfoList = atom({
  key: "kategorieInfo",
  default: {
    1: "식당",
    2: "볼거리",
    3: "숙소",
  },
});

// 태그 아이디 정보
// --- 임시 정보
// const tagsInfo = useRecoilValue(tagsInfoList);
export const tagsInfoList = atom({
  key: "tagsInfo",
  default: {
    // 1~20 detail_tag
    1: "한식",
    2: "중식",
    3: "양식",
    4: "일식",
    5: "분식",
    6: "디저트",
    7: "호텔",
    8: "모텔",
    9: "펜션",
    10: "캠핑",
    11: "게스트하우스",
    12: "자연",
    13: "문화",
    14: "유적",
    15: "공연",
    16: "놀거리",
    17: "---",
    18: "---",
    19: "---",
    20: "---",
    // 21~40 price_tag
    21: "무료",
    22: "만원 이하",
    23: "2만원 이하",
    24: "3만원 이하",
    25: "4만원 이하",
    26: "5만원 이하",
    27: "5만원 초과",
    28: "10만원 이하",
    29: "15만원 이하",
    30: "20만원 이하",
    31: "20만원 초과",
    32: "---",
    33: "---",
    34: "---",
    35: "---",
    36: "---",
    37: "---",
    38: "---",
    39: "---",
    40: "---",
    // 41~50 mood_tag
    41: "아늑한",
    42: "활기찬",
    43: "정겨운",
    44: "깔끔한",
    45: "뷰가 좋은",
    46: "---",
    47: "---",
    48: "---",
    49: "---",
    50: "---",
  },
});

// ---------------------------------
//   문자 -> 숫자
// ---------------------------------

// 카테고리 아이디 정보
// const kategorieInfoToNum = useRecoilValue(kategorieInfoToNumList);
export const kategorieInfoToNumList = atom({
  key: "kategorieInfoToNum",
  default: {
    식당: 1,
    볼거리: 2,
    숙소: 3,
  },
});

// 태그 아이디 정보 : 문자 -> 숫자
// const tagsInfoToNum = useRecoilValue(tagsInfoToNumList);
export const tagsInfoToNumList = atom({
  key: "tagsInfoToNum",
  default: {
    // 1~20 detail_tag
    한식: 1,
    중식: 2,
    양식: 3,
    일식: 4,
    분식: 5,
    디저트: 6,
    호텔: 7,
    모텔: 8,
    펜션: 9,
    캠핑: 10,
    게스트하우스: 11,
    자연: 12,
    문화: 13,
    유적: 14,
    공연: 15,
    놀거리: 16,
    // 21~40 price_tag
    무료: 21,
    "만원 이하": 22,
    "2만원 이하": 23,
    "3만원 이하": 24,
    "4만원 이하": 25,
    "5만원 이하": 26,
    "5만원 초과": 27,
    "10만원 이하": 28,
    "15만원 이하": 29,
    "20만원 이하": 30,
    "20만원 초과": 31,
    // 41~50 mood_tag
    아늑한: 41,
    활기찬: 42,
    정겨운: 43,
    깔끔한: 44,
    "뷰가 좋은": 45,
  },
});
