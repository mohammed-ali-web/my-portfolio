import "./footer.css";
import { ImLinkedin } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

export default function Footer() {
  return (
    <>
      <div className="footer w-full my-4 p-8 bg-white shadow-md rounded-[12px] flex flex-col justify-center items-center">
        <h2 className="text-[24px] font-bold text-slate-700 mb-2">Mohammed Adel</h2>
        <ul className="footer-list flex flex-wrap items-center justify-center mb-4">
          <li className="list-item px-4 py-2 text-[18px] font-bold text-slate-600">
            <a href="#about" className="item-link px-2 py-2 text-[18px] font-bold text-slate-600 transition-all transition-[0.2s] hover:text-[#4123c6]">About</a>
          </li>
          <li className="list-item">
            <a href="#services" className="item-link px-2 py-2 text-[18px] font-bold text-slate-600 transition-all transition-[0.2s] hover:text-[#4123c6]">Services</a>
          </li>
          <li className="list-item">
            <a href="#projects" className="item-link px-2 py-2 text-[18px] font-bold text-slate-600 transition-all transition-[0.2s] hover:text-[#4123c6]">Projects</a>
          </li>
          <li className="list-item">
            <a href="#contact" className="item-link px-2 py-2 text-[18px] font-bold text-slate-600 transition-all transition-[0.2s] hover:text-[#4123c6]">Contact</a>
          </li>
        </ul>
        <div className="social-links flex items-center mb-4">
          <a
            href="https://www.linkedin.com/in/mohammed-adel-web/"
            className="link mr-3 w-[35px] h-[35px] rounded-[50%] border-solid border-[2px] border-[#4123c6] text-[#4123c6] flex justify-center items-center transition-all transition-[0.2s] hover:bg-[#4123c6] hover:text-white"
          >
            <ImLinkedin />
          </a>
          <a
            href="https://www.facebook.com/mohammed.adel711/"
            className="link mr-3 w-[35px] h-[35px] rounded-[50%] border-solid border-[2px] border-[#4123c6] text-[#4123c6] flex justify-center items-center transition-all transition-[0.2s] hover:bg-[#4123c6] hover:text-white"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/mohamed_ali_web"
            className="link mr-3 w-[35px] h-[35px] rounded-[50%] border-solid border-[2px] border-[#4123c6] text-[#4123c6] flex justify-center items-center transition-all transition-[0.2s] hover:bg-[#4123c6] hover:text-white"
          >
            <BsTwitterX />
          </a>
          <a
            href="https://www.instagram.com/mohammed_ali_web/"
            className="link mr-3 w-[35px] h-[35px] rounded-[50%] border-solid border-[2px] border-[#4123c6] text-[#4123c6] flex justify-center items-center transition-all transition-[0.2s] hover:bg-[#4123c6] hover:text-white"
          >
            <GrInstagram />
          </a>
        </div>
        <div className="copyrights font-bold text-slate-500 text-[14px]">&copy; 2024 Mohammed Adel. All rights reserved.</div>
      </div>
    </>
  );
}
