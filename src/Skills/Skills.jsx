import "./skills.css";
import Tilt from "react-parallax-tilt";
import HTMLImg from "../Images/html.png";
import CSSImg from "../Images/css.png";
import JSImg from "../Images/js.png";
import TSImg from "../Images/ts.png";
import SASSImg from "../Images/sass.png";
import ReactImg from "../Images/react.png";
import NextImg from "../Images/nextjs.png";
import ReduxImg from "../Images/redux.png";
import TailwindImg from "../Images/tailwind.png";
import UIImg from "../Images/material-ui.png";
import BootstrapImg from "../Images/bootstrap.png";
import shadcnImg from "../Images/shadcn.png";
import NodeImg from "../Images/nodejs.png";
import ExpressImg from "../Images/expressjs.png";
import FirebaseImg from "../Images/firebase.png";
import PostgreImg from "../Images/postgresql.png";
import StrapiImg from "../Images/strapi.png";
import CPPImg from "../Images/c++.png";
import CImg from "../Images/c.png";
import JavaScriptImg from "../Images/js.png";
import PythonImg from "../Images/python.png";
import TypeScriptImg from "../Images/ts.png";
import PHPImg from "../Images/php.png";
import GitImg from "../Images/git.png";
import GithubImg from "../Images/github.png";
import VSCodeImg from "../Images/vscode.png";
import MongoCompassImg from "../Images/mongodbcompass.png";
import StripeImg from "../Images/strapi.png";


export default function Skills() {
  const SkillsContent = [
    {
      title: "Front End",
      content: [
        {
          skill: "HTML",
          img: HTMLImg,
        },
        {
          skill: "CSS",
          img: CSSImg,
        },
        {
          skill: "JavaScript",
          img: JSImg,
        },
        {
          skill: "TypeScript",
          img: TSImg,
        },
        {
          skill: "SASS",
          img: SASSImg,
        },
        {
          skill: "React JS",
          img: ReactImg,
        },
        {
          skill: "Next JS",
          img: NextImg,
        },
        {
          skill: "Redux",
          img: ReduxImg,
        },
        {
          skill: "Tailwind CSS",
          img: TailwindImg,
        },
        {
          skill: "Material UI",
          img: UIImg,
        },
        {
          skill: "Bootstrap",
          img: BootstrapImg,
        },
        {
          skill: "shadcn/ui",
          img: shadcnImg,
        },
      ]
    },
    {
      title: "Back End",
      content: [
        {
          skill: "Node JS",
          img: NodeImg,
        },
        {
          skill: "Express JS",
          img: ExpressImg,
        },
        {
          skill: "Firebase",
          img: FirebaseImg,
        },
        {
          skill: "Postgre SQL",
          img: PostgreImg,
        },
        {
          skill: "Strapi",
          img: StrapiImg,
        },
      ]
    },
    {
      title: "Languages",
      content: [
        {
          skill: "C++",
          img: CPPImg,
        },
        {
          skill: "C",
          img: CImg,
        },
        {
          skill: "JavaScript",
          img: JavaScriptImg,
        },
        {
          skill: "Python",
          img: PythonImg,
        },
        {
          skill: "TypeScript",
          img: TypeScriptImg,
        },
        {
          skill: "PHP",
          img: PHPImg,
        },
      ]
    },
    {
      title: "Tools",
      content: [
        {
          skill: "Git",
          img: GitImg,
        },
        {
          skill: "Github",
          img: GithubImg,
        },
        {
          skill: "VS Code",
          img: VSCodeImg,
        },
        {
          skill: "MongoDB Compass",
          img: MongoCompassImg,
        },
        {
          skill: "Stripe",
          img: StripeImg,
        },
      ]
    }
  ]

  return (
    <>
      <div className="skills w-full my-4 p-8 bg-white shadow-md rounded-[12px]">
        <h1 className="main-title text-center font-bold text-slate-700 text-[35px] mb-6">
          Skills
        </h1>
        {SkillsContent.map((SkillContent, index) => (
          <>
            <Tilt scale={0.9}>
              <div className="row w-full mb-5 p-[40px] border-solid border-[1px] border-[#4123c6] rounded-[8px] shadow-md bg-slate-100" key={index}>
                <div className="title mb-4 font-bold text-[24px] text-slate-600">{SkillContent.title}</div>
                <div className="row-content flex items-center flex-wrap gap-[15px]">
                  {SkillContent.content.map((Skill, index) => (
                    <>
                      <div className="skill flex items-center py-3 px-4 shadow-md border-solid border-slate-300 border-[2px] rounded-[6px] w-fit bg-white" key={index}>
                        <img src={Skill.img} alt="Skill" width={"25px"} />
                        <span className="ml-3">{Skill.skill}</span>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </Tilt>
          </>
        ))}
      </div>
    </>
  );
}