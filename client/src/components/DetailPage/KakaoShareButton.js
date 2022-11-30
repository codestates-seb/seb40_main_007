import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { detailData } from "../../atoms/detailPageData";
import { trainInfo } from "../../atoms/trainInfo";
import { categoryInfoList } from "../../atoms/tagsInfo";
const KakaoShareButton = () => {
  const detailInfo = useRecoilValue(detailData);
  const trainStationInfo = useRecoilValue(trainInfo);
  const categoryInfo = useRecoilValue(categoryInfoList);

  useEffect(() => {
    createKakaoButton();
  }, []);
  const createKakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 내 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAOMAP_API);
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: "역이요",
          description: `#${
            trainStationInfo[detailInfo?.stationId - 1]?.train
          } #${categoryInfo[detailInfo?.categoryId]} #${detailInfo?.title}`,
          imageUrl: "IMAGE_URL", // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        social: {
          likeCount: 77,
          commentCount: 55,
          sharedCount: 333,
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: "앱으로 보기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };
  return (
    <button
      type="button"
      id="kakao-link-btn"
      className="lg:w-8 lg:h-8 w-6 h-6 rounded-full mx-[1px]"
    >
      <img src="/images/kakao.png" alt="kakao-share-icon" />
    </button>
  );
};
export default KakaoShareButton;
