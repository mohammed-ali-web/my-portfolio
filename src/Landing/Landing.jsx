import "./landing.css";
import LandingImg from "../Images/landing.png";
import { ImLinkedin } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

export default function landing() {
  return (
    <>
      <div className="landing w-full flex items-center my-4 p-8 py-[60px] bg-white shadow-md rounded-[12px] justify-between">
        <div className="landing-text w-2/4 px-8 leading-[1.2] font-[600]">
          <h1 className="title  text-[50px]">Hi! I'm Mohammed Adel</h1>
          <h3 className="badge my-5 text-[40px] font-[400]">
            I'm a{" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Content Creator",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Graphic Designer",
                1000,
                "Blogger",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontWeight: "bold", color: "#4123c6", textShadow: "0 5px 10px #4123c64f" }}
              repeat={Infinity}
            />
          </h3>
          <div className="social-links flex items-center">
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
          <div className="btn-group pt-[60px]">
            <button className="hire-me">
              <a
                href="#contact"
                className="hire-me-btn mr-[60px] py-3 px-8 bg-[#4123c6] text-white rounded-[6px] text-[18px] font-bold"
              >
                Hire me
              </a>
            </button>
            <button className="cv">
              <a
                href="#"
                className="cv-btn py-3 px-8 bg-white border-solid border-[1px] border-[#4123c6] text-[#4123c6] rounded-[6px]"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
        <Tilt>
          <img src={LandingImg} alt="landing Img" className="h-[400px] animation-bounce" />
        </Tilt>
      </div>
    </>
  );
}
