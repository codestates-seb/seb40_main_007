import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { FaAws } from "react-icons/fa";

export default function footer() {
  return (
    <footer className="w-full lg:py5 bg-[rgb(83,199,240)] text-white lg:px-0 px-2">
      <div className="max-w-5xl m-auto pt-10 pb-5 lg:text-base text-xs">
        <div className="grid grid-cols-5 text-sm">
          <ul>
            <li className="lg:text-base text-xs font-bold mb-3">INTRO</li>
            <li>
              <img
                src="/images/notfound_icon_w.png"
                alt="footerlogo"
                className="w-10 inline lg:my-3"
              />
            </li>
          </ul>
          <ul className="lg:text-base text-xs">
            <li className="lg:text-base text-xs font-bold mb-3">POLICY</li>
            <li>이용약관</li>
            <li>사용자정책</li>
            <li>개인정보 수집</li>
          </ul>
          <ul>
            <li className="lg:text-base text-xs font-bold mb-3">FRONT-END</li>
            <li className="my-2">
              <a href="https://github.com/raon9401">
                <AiFillGithub className="inline lg:w-10 lg:h-10 w-5 h-5" />
                정희찬
              </a>
            </li>
            <li className="my-2">
              <a href="https://github.com/Eugenius1st">
                <AiFillGithub className="inline lg:w-10 lg:h-10 w-5 h-5" />
                안유진
              </a>
            </li>
          </ul>
          <ul>
            <li className="font-bold mb-3 lg:text-base text-xs">BACK-END</li>
            <li className="my-2">
              <a href="https://github.com/woong-sung">
                <AiFillGithub className="inline lg:w-10 lg:h-10 w-5 h-5" />
                조성우
              </a>
            </li>
            <li className="my-2">
              <a href="https://github.com/casava840">
                <AiFillGithub className="inline lg:w-10 lg:h-10 w-5 h-5" />
                강병재
              </a>
            </li>
          </ul>
          <ul>
            <li className="font-bold mb-3 lg:text-base text-xs">
              GET TO KNOW US
            </li>
            <li>
              <AiOutlineGoogle className="inline mr-2 lg:w-10 lg:h-10 w-5 h-5" />
              <SiNaver className="inline mr-2 rounded-lg lg:w-10 lg:h-10 w-5 h-5" />
              <RiKakaoTalkFill className="inline mr-1 lg:w-10 lg:h-10 w-5 h-5" />
            </li>
          </ul>
        </div>
        <div className="flex justify-between pt-24">
          <div>
            <AiFillGithub className="inline mr-1 lg:w-10 lg:h-10 w-5 h-5" />
            <a href=" https://github.com/codestates-seb/seb40_main_007">
              https://github.com/역이요_007
            </a>
          </div>
          <div>
            <FaAws className="inline mr-1 lg:w-10 lg:h-10 w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
