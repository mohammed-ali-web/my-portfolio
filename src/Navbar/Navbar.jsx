import "./navbar.css";
import Logo from "../Images/logo.jpg";

export default function Navbar() {
  return (
    <>
      <nav className="navbar flex justify-between items-center w-full bg-white rounded-[12px] shadow-md px-8">
        <img src={Logo} alt="Logo" className="h-[50px] my-4" />
        <ul className="nav-list flex items-center">
          <li className="list-item">
            <a href="#about" className="item-link px-6 py-3 text-slate-800 font-bold transition-all transition-[0.2s] hover:text-[#4123c6]">
              About
            </a> 
          </li>
          <li className="list-item">
            <a href="#services" className="item-link px-6 py-3 text-slate-800 font-bold transition-all transition-[0.2s] hover:text-[#4123c6]">
              Services
            </a>
          </li>
          <li className="list-item">
            <a href="#projects" className="item-link px-6 py-3 text-slate-800 font-bold transition-all transition-[0.2s] hover:text-[#4123c6]">
              Projects
            </a>
          </li>
          <li className="list-item">
            <a href="#contact" className="item-link px-6 py-3 text-slate-800 font-bold transition-all transition-[0.2s] hover:text-[#4123c6]">
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
