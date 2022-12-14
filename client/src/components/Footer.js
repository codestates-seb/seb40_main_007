import { AiFillGithub } from "react-icons/ai";
import { SiNotion } from "react-icons/si";
import { TfiHelpAlt } from "react-icons/tfi";
import { SlInfo } from "react-icons/sl";
import { RiKakaoTalkFill, RiKakaoTalkLine } from "react-icons/ri";

export default function footer() {
  return (
    <footer className="w-full bg-[rgb(83,199,240)] text-white lg:px-0 px-2 pb-10">
      <div className="max-w-7xl m-auto pt-10 lg:text-base text-xs">
        <div className="grid grid-cols-4 text-sm ">
          <ul className="text-center">
            <li className="lg:text-base text-xs font-bold mb-3">
              <TfiHelpAlt className="inline lg:mr-2 mr-1 lg:w-7 lg:h-7 w-4 h-4" />
              HELP-DESK
            </li>
            <li>
              <div>
                <div className="mb-3 lg:text-base text-xs">
                  <RiKakaoTalkFill className="inline mr-1 lg:w-6 lg:h-6 w-4 h-4" />
                  <a href="https://pf.kakao.com/_gxkxmfxj">역이요 톡채널</a>
                </div>
                <div className="lg:text-base text-xs">
                  <RiKakaoTalkLine className="inline mr-1 lg:w-6 lg:h-6 w-4 h-4 ml-1" />
                  <a href="http://pf.kakao.com/_gxkxmfxj/chat">오류/문의사항</a>
                </div>
              </div>
            </li>
          </ul>
          <ul className="text-center">
            <li className="lg:text-base text-xs font-bold mb-3">
              <AiFillGithub className="inline lg:mr-2 mr-1 lg:w-8 lg:h-8 w-5 h-5" />
              FRONT-END
            </li>
            <li className="my-2 ml-2 lg:text-base text-xs">
              <a href="https://github.com/raon9401">정희찬</a>
            </li>
            <li className="my-2 ml-2 lg:text-base text-xs">
              <a href="https://github.com/Eugenius1st">안유진</a>
            </li>
          </ul>
          <ul className="text-center">
            <li className="font-bold mb-3 lg:text-base text-xs">
              <AiFillGithub className="inline lg:mr-2 mr-1 lg:w-8 lg:h-8 w-5 h-5" />
              BACK-END
            </li>
            <li className="my-2 ml-2 lg:text-base text-xs">
              <a href="https://github.com/woong-sung">조성웅</a>
            </li>
            <li className="my-2 ml-2 lg:text-base text-xs">
              <a href="https://github.com/casava840">강병재</a>
            </li>
          </ul>
          <ul className="text-center">
            <li className="lg:text-base text-xs font-bold mb-3">
              <SlInfo className="inline lg:mr-2 mr-1 lg:w-7 lg:h-7 w-4 h-4" />
              ABOUT-US
            </li>
            <li>
              <div>
                <div className="mb-3 lg:text-base text-xs">
                  <AiFillGithub className="inline mr-1 lg:w-6 lg:h-6 w-4 h-4" />
                  <a href=" https://github.com/codestates-seb/seb40_main_007">
                    yeogiyo
                  </a>
                </div>
                <div className="lg:text-base text-xs">
                  <SiNotion className="inline mr-1 lg:w-5 lg:h-5 w-4 h-4 ml-1" />
                  <a href="https://codestates.notion.site/40-Team007-f5f31466aa20417597fde76d78641813">
                    yeogiyo
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
