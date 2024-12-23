import "./navbar.css";
import Logo from "../Images/logo.jpg";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";

export default function Navbar() {
  const [exchange, setExchange] = useState(false);

  return (
    <>
      <nav className="navbar relative flex justify-between items-center w-full bg-white rounded-[12px] shadow-md px-8">
        <div className="exchanger flex justify-between items-center">
          <img src={Logo} alt="Logo" className="h-[50px] my-4" />
          <button className="exchange-btn hidden text-[28px]" onClick={() => setExchange(!exchange)}><CgMenuRight /></button>
        </div>
        <ul className={`nav-list flex items-center transition-all delay-[0.2s] ${exchange === true ? "h-fit-important" : "h-0-important"}`}>
          <li className="list-item">
            <a href="#about" className="item-link px-6 py-3 text-slate-800 font-bold transition-all delay-[0.2s] hover:text-[#4123c6]">
              About
            </a> 
          </li>
          <li className="list-item">
            <a href="#services" className="item-link px-6 py-3 text-slate-800 font-bold transition-all delay-[0.2s] hover:text-[#4123c6]">
              Services
            </a>
          </li>
          <li className="list-item">
            <a href="#projects" className="item-link px-6 py-3 text-slate-800 font-bold transition-all delay-[0.2s] hover:text-[#4123c6]">
              Projects
            </a>
          </li>
          <li className="list-item">
            <a href="#contact" className="item-link px-6 py-3 text-slate-800 font-bold transition-all delay-[0.2s] hover:text-[#4123c6]">
              Contact
            </a>
          </li>
          <li className="list-item">
            <a href="#download" className="item-link hire-me bg-[#4123c6] text-white px-[20px] py-2 rounded-[6px] shadow-[#de290a]">
              Hire me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
