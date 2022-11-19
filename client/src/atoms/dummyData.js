import { atom } from "recoil";

// 게시글 더미데이터 입니다. 통신되면 삭제 바랍니다.
export const postDummyState = atom({
  key: "postDummy",
  default: [
    {
      boardId: 1,
      title: "돼지국밥",
      review: "크으 이게 국밥이여 부추여",
      star: 1,
      thumbnail:
        "https://d12zq4w4guyljn.cloudfront.net/20220215014519053_photo_79460f6e0b30.jpg",
      dibs: false,
      address: "교동짬뽕",
      latitude: 35.11645769146161,
      longitude: 129.04139799578658,
      timeFromStation: 627,
      tags: {
        detailTag: "한식",
        moodTag: ["아늑한", "정겨운", "깔끔한", "뷰가 좋은"],
        priceTag: "만원 초과 2만원 이하",
      },
    },
    {
      boardId: 2,
      title: "돼지국밥",
      review: "크으 이게 국밥이지",
      star: 2,
      thumbnail:
        "https://d12zq4w4guyljn.cloudfront.net/20220215014519053_photo_79460f6e0b30.jpg",
      dibs: false,
      address: "교동짬뽕",
      latitude: 35.11635608020627,
      longitude: 129.0407428939328,
      timeFromStation: 627,
      tags: {
        detailTag: "한식",
        moodTag: ["아늑한", "정겨운", "깔끔한", "뷰가 좋은"],
        priceTag: "만원 초과 2만원 이하",
      },
    },
    {
      boardId: 3,
      title: "돼지국밥",
      review: "크으 이게 부추국밥이지 맛이따",
      star: 3,
      thumbnail:
        "https://d12zq4w4guyljn.cloudfront.net/20220215014519053_photo_79460f6e0b30.jpg",
      dibs: false,
      address: "교동짬뽕",
      latitude: 35.11571319416307,
      longitude: 129.03958624555747,
      timeFromStation: 627,
      tags: {
        detailTag: "한식",
        moodTag: ["아늑한", "정겨운", "깔끔한", "뷰가 좋은"],
        priceTag: "만원 초과 2만원 이하",
      },
    },
    {
      boardId: 4,
      title: "케이크",
      review: "Um~ So Sweet~~!",
      star: 3,
      thumbnail:
        "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Gluten-Free-Kahlua-Dessert_exps49655_THHC1997839C05_20_6bC_RMS.jpg",
      dibs: false,
      address: "교동짬뽕",
      latitude: 35.11772513089556,
      longitude: 129.04265800483046,
      timeFromStation: 627,
      tags: {
        detailTag: "한식",
        moodTag: ["아늑한", "정겨운", "깔끔한", "뷰가 좋은"],
        priceTag: "만원 초과 2만원 이하",
      },
    },
    {
      boardId: 5,
      title: "해변",
      review: "여기 오니 바다가보여요!",
      star: 3,
      thumbnail:
        "https://images.pexels.com/photos/2882660/pexels-photo-2882660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      dibs: false,
      address: "교동짬뽕",
      latitude: 35.11235748754287,
      longitude: 129.05046406147986,
      timeFromStation: 627,
      tags: {
        detailTag: "한식",
        moodTag: ["아늑한", "정겨운", "깔끔한", "뷰가 좋은"],
        priceTag: "만원 초과 2만원 이하",
      },
    },
    {
      boardId: 6,
      title: "훠궈",
      review: "첫 입은 고기 두번째도 고기",
      star: 4,
      thumbnail:
        "https://blog.kakaocdn.net/dn/lO5kQ/btq8somGkmv/UXvTvKyzAT8fzZtk1FJ9o1/img.jpg",
      dibs: false,
      address: "교동짬뽕",
      latitude: 35.11329426323349,
      longitude: 129.03833875444985,
      timeFromStation: 627,
      tags: {
        detailTag: "한식",
        moodTag: ["아늑한", "정겨운", "깔끔한", "뷰가 좋은"],
        priceTag: "만원 초과 2만원 이하",
      },
    },
  ],
});
