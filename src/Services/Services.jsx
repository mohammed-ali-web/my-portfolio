import React from "react";
import WebApplications from "../Images/web-applications.svg";
import EcommerceWebsites from "../Images/ecommerce-websites.svg";
import RealTimeFeatures from "../Images/real-time-features.svg";
import UserInterfaces from "../Images/user-interfaces.svg";
import FullStackDeveloper from "../Images/full-stack-developer.svg";
import WebsiteManagement from "../Images/website-management.svg";
import SpeedOptimization from "../Images/speed-optimization.svg";
import BackEndDeveloper from "../Images/back-end-developer.svg";
import Tilt from "react-parallax-tilt";
import "./services.css";

export default function Services() {
  const serviceBoxes = [
    {
      img: WebApplications,
      title: "Web Applications",
      desc: "Tailored web apps built with the latest technologies",
      height: "100px",
    },
    {
      img: EcommerceWebsites,
      title: "E-commerce Websites",
      desc: "Secure online stores with user-friendly shopping and payments.",
      height: "100px",
    },
    {
      img: RealTimeFeatures,
      title: "Real-time Features",
      desc: "Add live chat, notifications, and real-time data updates.",
      height: "100px",
    },
    {
      img: UserInterfaces,
      title: "User Interfaces",
      desc: "Engaging, responsive front-end designs for better user experiences.",
      height: "100px",
    },
    {
      img: FullStackDeveloper,
      title: "Full-stack Developer",
      desc: "Full-stack web applications using modern technologies ensuring high performance.",
      height: "100px",
    },
    {
      img: WebsiteManagement,
      title: "Website Management",
      desc: "Easy content management systems with flexible controls.",
      height: "100px",
    },
    {
      img: SpeedOptimization,
      title: "Speed Optimization",
      desc: "oost performance with faster load times and optimization",
      height: "100px",
    },
    {
      img: BackEndDeveloper,
      title: "Back End Developer",
      desc: "Building back-end systems using modern technologies ensuring high performance, security",
      height: "100px",
    },
  ];

  return (
    <>
      <div className="services w-full my-4 p-8 bg-white shadow-md rounded-[12px]">
        <h1 className="main-title text-center font-bold text-slate-700 text-[35px]">
          Services
        </h1>
        <div className="box-group">
          {serviceBoxes.map((box, index) => (
            <>
              <Tilt>
                <div
                  className="service-box px-5 pb-[30px] pt-[40px]"
                  key={index}
                >
                  <img
                    src={box.img}
                    alt="Service"
                    width={"200px"}
                    className="mx-auto"
                  />
                  <div className="info mt-6">
                    <h2 className="title text-[20px] font-bold text-slate-700 mb-2">
                      {box.title}
                    </h2>
                    <p className="desc leading-[1.6] text-slate-500">
                      {box.desc}
                    </p>
                  </div>
                </div>
              </Tilt>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
