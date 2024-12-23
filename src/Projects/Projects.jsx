import "./projects.css";
import Tilt from "react-parallax-tilt";
import Project from "../Images/project-1.png";
import { FaGithub } from "react-icons/fa";
import { IoArrowRedo } from "react-icons/io5";

export default function Projects() {
  return (
    <>
      <div className="projects w-full my-4 p-8 bg-white shadow-md rounded-[12px]" id="projects">
        <h1 className="main-title text-center font-bold text-slate-700 text-[35px] mb-6">
          Projects
        </h1>
        <div className="projects-group">
          <Tilt>
            <div className="project border-solid border-[#4123c6] border-[1px]">
              <img src={Project} alt="Project" className="w-full rounded-[8px] shadow-md" />
              <div className="made-by my-4 flex items-center">
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Next JS</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Tailwind</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">JavaScript</span>
              </div>
              <div className="title text-[24px] font-bold text-slate-700 mb-2">Burger Shop Website</div>
              <div className="desc leading-[1.6] text-slate-500 mb-6">
                modern burger shop website built with Next.js, Tailwind CSS, and
                TypeScript. This project showcases a clean, responsive design with
                a user-friendly interface for browsing the burger menu .
              </div>
              <div className="btns flex items-center">
                <button className="github mr-5 w-[50px] h-[50px] bg-slate-900 flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><FaGithub /></button>
                <button className="live-demo w-[50px] h-[50px] bg-[#4123c6] flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><IoArrowRedo /></button>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="project border-solid border-[#4123c6] border-[1px]">
              <img src={Project} alt="Project" className="w-full rounded-[8px] shadow-md" />
              <div className="made-by my-4 flex items-center">
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Next JS</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Tailwind</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">JavaScript</span>
              </div>
              <div className="title text-[24px] font-bold text-slate-700 mb-2">Burger Shop Website</div>
              <div className="desc leading-[1.6] text-slate-500 mb-6">
                modern burger shop website built with Next.js, Tailwind CSS, and
                TypeScript. This project showcases a clean, responsive design with
                a user-friendly interface for browsing the burger menu .
              </div>
              <div className="btns flex items-center">
                <button className="github mr-5 w-[50px] h-[50px] bg-slate-900 flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><FaGithub /></button>
                <button className="live-demo w-[50px] h-[50px] bg-[#4123c6] flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><IoArrowRedo /></button>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="project border-solid border-[#4123c6] border-[1px]">
              <img src={Project} alt="Project" className="w-full rounded-[8px] shadow-md" />
              <div className="made-by my-4 flex items-center">
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Next JS</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Tailwind</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">JavaScript</span>
              </div>
              <div className="title text-[24px] font-bold text-slate-700 mb-2">Burger Shop Website</div>
              <div className="desc leading-[1.6] text-slate-500 mb-6">
                modern burger shop website built with Next.js, Tailwind CSS, and
                TypeScript. This project showcases a clean, responsive design with
                a user-friendly interface for browsing the burger menu .
              </div>
              <div className="btns flex items-center">
                <button className="github mr-5 w-[50px] h-[50px] bg-slate-900 flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><FaGithub /></button>
                <button className="live-demo w-[50px] h-[50px] bg-[#4123c6] flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><IoArrowRedo /></button>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="project border-solid border-[#4123c6] border-[1px]">
              <img src={Project} alt="Project" className="w-full rounded-[8px] shadow-md" />
              <div className="made-by my-4 flex items-center">
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Next JS</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Tailwind</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">JavaScript</span>
              </div>
              <div className="title text-[24px] font-bold text-slate-700 mb-2">Burger Shop Website</div>
              <div className="desc leading-[1.6] text-slate-500 mb-6">
                modern burger shop website built with Next.js, Tailwind CSS, and
                TypeScript. This project showcases a clean, responsive design with
                a user-friendly interface for browsing the burger menu .
              </div>
              <div className="btns flex items-center">
                <button className="github mr-5 w-[50px] h-[50px] bg-slate-900 flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><FaGithub /></button>
                <button className="live-demo w-[50px] h-[50px] bg-[#4123c6] flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><IoArrowRedo /></button>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="project border-solid border-[#4123c6] border-[1px]">
              <img src={Project} alt="Project" className="w-full rounded-[8px] shadow-md" />
              <div className="made-by my-4 flex items-center">
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Next JS</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Tailwind</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">JavaScript</span>
              </div>
              <div className="title text-[24px] font-bold text-slate-700 mb-2">Burger Shop Website</div>
              <div className="desc leading-[1.6] text-slate-500 mb-6">
                modern burger shop website built with Next.js, Tailwind CSS, and
                TypeScript. This project showcases a clean, responsive design with
                a user-friendly interface for browsing the burger menu .
              </div>
              <div className="btns flex items-center">
                <button className="github mr-5 w-[50px] h-[50px] bg-slate-900 flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><FaGithub /></button>
                <button className="live-demo w-[50px] h-[50px] bg-[#4123c6] flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><IoArrowRedo /></button>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="project border-solid border-[#4123c6] border-[1px]">
              <img src={Project} alt="Project" className="w-full rounded-[8px] shadow-md" />
              <div className="made-by my-4 flex items-center">
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Next JS</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Tailwind</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">JavaScript</span>
              </div>
              <div className="title text-[24px] font-bold text-slate-700 mb-2">Burger Shop Website</div>
              <div className="desc leading-[1.6] text-slate-500 mb-6">
                modern burger shop website built with Next.js, Tailwind CSS, and
                TypeScript. This project showcases a clean, responsive design with
                a user-friendly interface for browsing the burger menu .
              </div>
              <div className="btns flex items-center">
                <button className="github mr-5 w-[50px] h-[50px] bg-slate-900 flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><FaGithub /></button>
                <button className="live-demo w-[50px] h-[50px] bg-[#4123c6] flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><IoArrowRedo /></button>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="project border-solid border-[#4123c6] border-[1px]">
              <img src={Project} alt="Project" className="w-full rounded-[8px] shadow-md" />
              <div className="made-by my-4 flex items-center">
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Next JS</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Tailwind</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">JavaScript</span>
              </div>
              <div className="title text-[24px] font-bold text-slate-700 mb-2">Burger Shop Website</div>
              <div className="desc leading-[1.6] text-slate-500 mb-6">
                modern burger shop website built with Next.js, Tailwind CSS, and
                TypeScript. This project showcases a clean, responsive design with
                a user-friendly interface for browsing the burger menu .
              </div>
              <div className="btns flex items-center">
                <button className="github mr-5 w-[50px] h-[50px] bg-slate-900 flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><FaGithub /></button>
                <button className="live-demo w-[50px] h-[50px] bg-[#4123c6] flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><IoArrowRedo /></button>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="project border-solid border-[#4123c6] border-[1px]">
              <img src={Project} alt="Project" className="w-full rounded-[8px] shadow-md" />
              <div className="made-by my-4 flex items-center">
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Next JS</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Tailwind</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">JavaScript</span>
              </div>
              <div className="title text-[24px] font-bold text-slate-700 mb-2">Burger Shop Website</div>
              <div className="desc leading-[1.6] text-slate-500 mb-6">
                modern burger shop website built with Next.js, Tailwind CSS, and
                TypeScript. This project showcases a clean, responsive design with
                a user-friendly interface for browsing the burger menu .
              </div>
              <div className="btns flex items-center">
                <button className="github mr-5 w-[50px] h-[50px] bg-slate-900 flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><FaGithub /></button>
                <button className="live-demo w-[50px] h-[50px] bg-[#4123c6] flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><IoArrowRedo /></button>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="project border-solid border-[#4123c6] border-[1px]">
              <img src={Project} alt="Project" className="w-full rounded-[8px] shadow-md" />
              <div className="made-by my-4 flex items-center">
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Next JS</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Tailwind</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">JavaScript</span>
              </div>
              <div className="title text-[24px] font-bold text-slate-700 mb-2">Burger Shop Website</div>
              <div className="desc leading-[1.6] text-slate-500 mb-6">
                modern burger shop website built with Next.js, Tailwind CSS, and
                TypeScript. This project showcases a clean, responsive design with
                a user-friendly interface for browsing the burger menu .
              </div>
              <div className="btns flex items-center">
                <button className="github mr-5 w-[50px] h-[50px] bg-slate-900 flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><FaGithub /></button>
                <button className="live-demo w-[50px] h-[50px] bg-[#4123c6] flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><IoArrowRedo /></button>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="project border-solid border-[#4123c6] border-[1px]">
              <img src={Project} alt="Project" className="w-full rounded-[8px] shadow-md" />
              <div className="made-by my-4 flex items-center">
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Next JS</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Tailwind</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">JavaScript</span>
              </div>
              <div className="title text-[24px] font-bold text-slate-700 mb-2">Burger Shop Website</div>
              <div className="desc leading-[1.6] text-slate-500 mb-6">
                modern burger shop website built with Next.js, Tailwind CSS, and
                TypeScript. This project showcases a clean, responsive design with
                a user-friendly interface for browsing the burger menu .
              </div>
              <div className="btns flex items-center">
                <button className="github mr-5 w-[50px] h-[50px] bg-slate-900 flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><FaGithub /></button>
                <button className="live-demo w-[50px] h-[50px] bg-[#4123c6] flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><IoArrowRedo /></button>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="project border-solid border-[#4123c6] border-[1px]">
              <img src={Project} alt="Project" className="w-full rounded-[8px] shadow-md" />
              <div className="made-by my-4 flex items-center">
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Next JS</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Tailwind</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">JavaScript</span>
              </div>
              <div className="title text-[24px] font-bold text-slate-700 mb-2">Burger Shop Website</div>
              <div className="desc leading-[1.6] text-slate-500 mb-6">
                modern burger shop website built with Next.js, Tailwind CSS, and
                TypeScript. This project showcases a clean, responsive design with
                a user-friendly interface for browsing the burger menu .
              </div>
              <div className="btns flex items-center">
                <button className="github mr-5 w-[50px] h-[50px] bg-slate-900 flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><FaGithub /></button>
                <button className="live-demo w-[50px] h-[50px] bg-[#4123c6] flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><IoArrowRedo /></button>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="project border-solid border-[#4123c6] border-[1px]">
              <img src={Project} alt="Project" className="w-full rounded-[8px] shadow-md" />
              <div className="made-by my-4 flex items-center">
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Next JS</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Tailwind</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">JavaScript</span>
              </div>
              <div className="title text-[24px] font-bold text-slate-700 mb-2">Burger Shop Website</div>
              <div className="desc leading-[1.6] text-slate-500 mb-6">
                modern burger shop website built with Next.js, Tailwind CSS, and
                TypeScript. This project showcases a clean, responsive design with
                a user-friendly interface for browsing the burger menu .
              </div>
              <div className="btns flex items-center">
                <button className="github mr-5 w-[50px] h-[50px] bg-slate-900 flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><FaGithub /></button>
                <button className="live-demo w-[50px] h-[50px] bg-[#4123c6] flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><IoArrowRedo /></button>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="project border-solid border-[#4123c6] border-[1px]">
              <img src={Project} alt="Project" className="w-full rounded-[8px] shadow-md" />
              <div className="made-by my-4 flex items-center">
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Next JS</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Tailwind</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">JavaScript</span>
              </div>
              <div className="title text-[24px] font-bold text-slate-700 mb-2">Burger Shop Website</div>
              <div className="desc leading-[1.6] text-slate-500 mb-6">
                modern burger shop website built with Next.js, Tailwind CSS, and
                TypeScript. This project showcases a clean, responsive design with
                a user-friendly interface for browsing the burger menu .
              </div>
              <div className="btns flex items-center">
                <button className="github mr-5 w-[50px] h-[50px] bg-slate-900 flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><FaGithub /></button>
                <button className="live-demo w-[50px] h-[50px] bg-[#4123c6] flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><IoArrowRedo /></button>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="project border-solid border-[#4123c6] border-[1px]">
              <img src={Project} alt="Project" className="w-full rounded-[8px] shadow-md" />
              <div className="made-by my-4 flex items-center">
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Next JS</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">Tailwind</span>
                <span className="skill py-1 px-4  bg-[#4123c6] text-white font-[600] rounded-[6px] text-[14px] mr-[10px]">JavaScript</span>
              </div>
              <div className="title text-[24px] font-bold text-slate-700 mb-2">Burger Shop Website</div>
              <div className="desc leading-[1.6] text-slate-500 mb-6">
                modern burger shop website built with Next.js, Tailwind CSS, and
                TypeScript. This project showcases a clean, responsive design with
                a user-friendly interface for browsing the burger menu .
              </div>
              <div className="btns flex items-center">
                <button className="github mr-5 w-[50px] h-[50px] bg-slate-900 flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><FaGithub /></button>
                <button className="live-demo w-[50px] h-[50px] bg-[#4123c6] flex items-center justify-center text-[24px] rounded-[8px] text-white transition-all transition-[0.2s] hover:translate-y-[-5px]"><IoArrowRedo /></button>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </>
  );
}
