import "./contact.css";
import Tilt from "react-parallax-tilt";

export default function Contact() {
  return (
    <>
      <div className="contact w-full my-4 p-8 bg-white shadow-md rounded-[12px]">
        <h1 className="main-title text-center font-bold text-slate-700 text-[35px] mb-6">
          Contact me
        </h1>
        <Tilt>
          <form action="#" className="contact-form w-[650px] flex flex-col mx-auto border-solid border-[#4123c6] border-[1px] p-[30px] rounded-[8px] shadow-md">
            <span className="email-me text-[30px] font-bold text-slate-700 mb-[12px]">Email me 🚀</span>
            <input type="email" name="email" placeholder="Your Email" className="contact-input text-slate-700" />
            <input type="text" name="name" placeholder="Your Name" className="contact-input text-slate-700" />
            <input type="text" name="subject" placeholder="Subject" className="contact-input text-slate-700" />
            <textarea name="" id="" rows="2" className="contact-input" placeholder="Message"></textarea>
            <button className="send w-full py-4 bg-[#4123c6] mt-4 text-white rounded-[8px] text-[18px] font-bold transition-all transition-[0.2s] hover:translate-y-[-5px]">Send</button>
          </form>
        </Tilt>
      </div>
    </>
  )
}