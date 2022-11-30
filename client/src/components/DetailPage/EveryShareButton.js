import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

export default function EveryShareButton() {
  const currentUrl = "http://localhost:3000";
  return (
    <>
      <FacebookShareButton style={{ marginRight: "1px" }} url={currentUrl}>
        <FacebookIcon
          round={true}
          borderRadius={24}
          className="lg:w-9 lg:h-9 w-6 h-6"
        ></FacebookIcon>
      </FacebookShareButton>
      <TwitterShareButton style={{ marginRight: "1px" }} url={currentUrl}>
        <TwitterIcon
          className="lg:w-9 lg:h-9 w-6 h-6"
          round={true}
          borderRadius={24}
        ></TwitterIcon>
      </TwitterShareButton>
      <LineShareButton url={currentUrl}>
        <LineIcon
          className="lg:w-9 lg:h-9 w-6 h-6"
          round={true}
          borderRadius={24}
        ></LineIcon>
      </LineShareButton>
    </>
  );
}
