import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { FaAws } from "react-icons/fa";

export default function footer() {
  return (
    <footer className="w-full pb-5 pt-5 bg-[rgb(83,199,240)] text-white">
      <div className="max-w-5xl m-auto pt-10 pb-5">
        <div className="grid grid-cols-5 text-sm">
          <ul>
            <li className="text-base font-bold mb-3">INTRO</li>
            <li>
              <img
                src="/images/notfound_icon_w.png"
                alt="footerlogo"
                className="w-10 inline my-3"
              />
            </li>
          </ul>
          <ul>
            <li className="text-base font-bold mb-3">POLICY</li>
            <li>이용약관</li>
            <li>사용자정책</li>
            <li>개인정보 수집·제공</li>
          </ul>
          <ul>
            <li className="text-base font-bold mb-3">FRONT-END</li>
            <li className="my-2">
              <a href="https://github.com/raon9401">
                <AiFillGithub size={32} className="inline" /> 정희찬
              </a>
            </li>
            <li className="my-2">
              <a href="https://github.com/Eugenius1st">
                <AiFillGithub size={32} className="inline" /> 안유진
              </a>
            </li>
          </ul>
          <ul>
            <li className="text-base font-bold mb-3">BACK-END</li>
            <li className="my-2">
              <a href="https://github.com/woong-sung">
                <AiFillGithub size={32} className="inline" /> 조성우
              </a>
            </li>
            <li className="my-2">
              <a href="https://github.com/casava840">
                <AiFillGithub size={32} className="inline" /> 강병재
              </a>
            </li>
          </ul>
          <ul>
            <li className="text-base font-bold mb-3">GET TO KNOW US</li>
            <li>
              <AiOutlineGoogle className="inline mr-2" size={32} />
              <SiNaver className="inline mr-2 rounded-lg" size={32} />
              <RiKakaoTalkFill className="inline mr-1" size={32} />
            </li>
          </ul>
        </div>
        <div className="flex justify-between pt-24">
          <div>
            <AiFillGithub className="inline mr-1" size={32} />
            <a href=" https://github.com/codestates-seb/seb40_main_007">
              https://github.com/역이요_007
            </a>
          </div>
          <div>
            <FaAws className="inline mr-1" size={32} />
          </div>
        </div>
      </div>
    </footer>
  );
}
