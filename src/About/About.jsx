import "./about.css";
import AboutImg from "../Images/about.png";

export default function About() {
  return (
    <>
      <div className="about w-full my-4 p-8 bg-white shadow-md rounded-[12px]" id="about">
        <h1 className="main-title text-center font-bold text-slate-700 text-[35px]">
          About us
        </h1>
        <div className="about-content flex justify-between items-center">
          <img
            src={AboutImg}
            alt="About Img"
            className="h-[450px] mr-[100px]"
          />
          <div className="about-text">
            <p className="leading-[1.7] text-[20px] text-slate-600 font-[600]">
              Hi there! I'm Mohammed Adel, a passionate web developer dedicated to
              creating exceptional digital experiences. I specialize in crafting
              high-performance applications with modern designs that bring ideas
              to life and deliver real value.
            </p>
            <button className="contact-us-btn mt-[60px]">
              <a
                href="#contact"
                className="contact-us-link py-3 px-8 bg-white border-solid border-[1px] border-[#4123c6] text-[#4123c6] rounded-[6px]"
              >
                Contact us
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
