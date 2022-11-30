import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { FaAws } from "react-icons/fa";

export default function footer() {
  return (
    <footer className="w-full lg:py5 bg-[rgb(83,199,240)] text-white lg:px-0 px-2">
      <div className="max-w-5xl m-auto pt-10 pb-5 lg:text-base text-xs">
        <div className="grid grid-cols-4 text-sm">
          <ul>
            <li className="lg:text-base text-xs font-bold mb-3">INTRO</li>
            <li>
              <img
                src="/images/notfound_icon_w.png"
                alt="footerlogo"
                className="lg:w-10 w-7 inline lg:my-3"
              />
            </li>
          </ul>
          <ul>
            <li className="lg:text-base text-xs font-bold mb-3">FRONT-END</li>
            <li className="my-2">
              <a href="https://github.com/raon9401">
                <AiFillGithub className="inline lg:w-10 lg:h-10 w-4 h-4 mr-1 lg:text-base text-[10px]" />
                정희찬
              </a>
            </li>
            <li className="my-2">
              <a href="https://github.com/Eugenius1st">
                <AiFillGithub className="inline lg:w-10 lg:h-10 w-4 h-4 mr-1 lg:text-base text-[10px]" />
                안유진
              </a>
            </li>
          </ul>
          <ul>
            <li className="font-bold mb-3 lg:text-base text-xs">BACK-END</li>
            <li className="my-2">
              <a href="https://github.com/woong-sung">
                <AiFillGithub className="inline lg:w-10 lg:h-10 w-4 h-4 mr-1 lg:text-base text-[10px]" />
                조성우
              </a>
            </li>
            <li className="my-2">
              <a href="https://github.com/casava840">
                <AiFillGithub className="inline lg:w-10 lg:h-10 w-4 h-4 mr-1 lg:text-base text-[10px]" />
                강병재
              </a>
            </li>
          </ul>
          <ul>
            <li className="font-bold mb-3 lg:text-base text-xs">
              GET TO KNOW US
            </li>
            <li>
              <AiOutlineGoogle className="inline lg:mr-2 mr-1 lg:w-10 lg:h-10 w-4 h-4" />
              <SiNaver className="inline lg:mr-2 mr-1 rounded-lg lg:w-10 lg:h-10 w-4 h-4" />
              <RiKakaoTalkFill className="inline lg:mr-1 lg:w-10 lg:h-10 w-4 h-4" />
            </li>
          </ul>
        </div>
        <div className="flex justify-between lg:pt-24 pt-7">
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
