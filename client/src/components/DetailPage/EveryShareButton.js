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
        <FacebookIcon size={33} round={true} borderRadius={24}></FacebookIcon>
      </FacebookShareButton>
      <TwitterShareButton style={{ marginRight: "1px" }} url={currentUrl}>
        <TwitterIcon size={33} round={true} borderRadius={24}></TwitterIcon>
      </TwitterShareButton>
      <LineShareButton url={currentUrl}>
        <LineIcon size={33} round={true} borderRadius={24}></LineIcon>
      </LineShareButton>
    </>
  );
}
