import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver, SiSpring, SiTailwindcss } from "react-icons/si";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { FaJava, FaReact, FaAws } from "react-icons/fa";

export default function footer() {
  return (
    <footer className="w-full pb-5 pt-5 bg-[rgb(83,199,240)] text-white">
      <div className="border-b-[0.1px] border-sky-400 pb-5 text-center">
        <img
          src="images/footerlogo.png"
          alt="footerlogo"
          className="w-8 h-8 inline mr-2"
        />
      </div>
      <div className="max-w-5xl m-auto py-10">
        <div className="grid grid-cols-5 text-sm">
          <ul>
            <li className="text-base font-bold mb-3">INTRO</li>
            <li>Home</li>
            <li>Login</li>
            <li>Signup</li>
            <li>Main</li>
            <li>Detail</li>
            <li>My</li>
          </ul>
          <ul>
            <li className="text-base font-bold mb-3">POLICY</li>
            <li>개인정보</li>
            <li>이용약관</li>
            <li>사용자정책</li>
          </ul>
          <ul>
            <li className="text-base font-bold mb-3">FRONT-END</li>
            <li>
              <FaReact className="inline mr-1" />
              React
            </li>
            <li>
              <SiTailwindcss className="inline mr-1" />
              TailwindCSS
            </li>
            <li>Recoil</li>
            <li>React-Query</li>
            <li>axios</li>
            <li>React-Query</li>
          </ul>
          <ul>
            <li className="text-base font-bold mb-3">BACK-END</li>
            <li>
              <FaJava className="inline mr-1" />
              Java
            </li>
            <li>
              <SiSpring className="inline mr-1" />
              Spring
            </li>
            <li></li>
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
        <div className="flex justify-between pt-10">
          <div>
            <AiFillGithub className="inline mr-1" size={32} />
            https://github.com/codestates-seb/seb40_main_007
          </div>
          <div>
            <FaAws className="inline mr-1" size={32} />
            배포링크
          </div>
        </div>
      </div>
    </footer>
  );
}
