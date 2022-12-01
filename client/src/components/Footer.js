import { AiFillGithub } from "react-icons/ai";
import { SiNotion } from "react-icons/si";
import { SlInfo, SlCheck } from "react-icons/sl";

export default function footer() {
  return (
    <footer className="w-full bg-[rgb(83,199,240)] text-white lg:px-0 px-2 pb-10">
      <div className="max-w-7xl m-auto pt-10 lg:text-base text-xs">
        <div className="grid grid-cols-4 text-sm ">
          <ul className="text-center">
            <li className="lg:text-base text-xs font-bold mb-3">
              <SlCheck className="inline lg:mr-2 mr-1 lg:w-7 lg:h-7 w-4 h-4" />
              INTRO
            </li>
            <a href="http://yeogiyo.site/">
              <li>
                <img
                  src="/images/notfound_icon_w.png"
                  alt="footerlogo"
                  className="lg:w-8 w-8 inline text-center mt-2"
                />
              </li>
              <li className="lg:text-xs text-[10px] mt-2">
                http://yeogiyo.site/
              </li>
            </a>
          </ul>
          <ul className="text-center">
            <li className="lg:text-base text-xs font-bold mb-3">
              <AiFillGithub className="inline lg:mr-2 mr-1 lg:w-8 lg:h-8 w-5 h-5" />
              FRONT-END
            </li>
            <li className="my-2 ml-2 lg:text-xl text-sm">
              <a href="https://github.com/raon9401">정희찬</a>
            </li>
            <li className="my-2 ml-2 lg:text-xl text-sm">
              <a href="https://github.com/Eugenius1st">안유진</a>
            </li>
          </ul>
          <ul className="text-center">
            <li className="font-bold mb-3 lg:text-base text-xs">
              <AiFillGithub className="inline lg:mr-2 mr-1 lg:w-8 lg:h-8 w-5 h-5" />
              BACK-END
            </li>
            <li className="my-2 ml-2 lg:text-xl text-sm">
              <a href="https://github.com/woong-sung">조성웅</a>
            </li>
            <li className="my-2 ml-2 lg:text-xl text-sm">
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
                  <a href="https://topaz-land-b32.notion.site/3ff18439ae114b828c2c5ff482f18506">
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
