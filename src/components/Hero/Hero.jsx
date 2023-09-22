import React, { useEffect } from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="relative h-full">
      <img
        src="./HeroCover.png"
        alt=""
        className="absolute h-5/6 bottom-0 object-cover z-10 left-64"
      />

      <div className="absolute -bottom-1/4 w-big h-big rounded-full -z-5 bg-gradient-to-t from-bg-whtie to bg-blue-200 left-16"></div>

      {/* animated text occupation */}
      <div className="absolute font-semibold animate__animated animate__fadeInDown top-0 bottom-0 m-auto h-fit right-56 flex flex-col gap-4">
        <h1 className="text-5xl">Hello</h1>
        <h1 className="text-6xl">I am Charles</h1>
        <span className="text-3xl text-indigo-400">
          Computer Science Student
        </span>
        <ul className="flex gap-4 items-center">
          <li className="rounded-full bg-black p-2 cursor-pointer">
            <a
              href="https://www.linkedin.com/in/charles-liu-75a5b2277/"
              className="flex items-center"
            >
              <i className="bx bxl-linkedin bx-md text-white"></i>
            </a>
          </li>
          <li className="rounded-full bg-black p-2 cursor-pointer flex items-center">
            <a
              href="https://www.linkedin.com/in/charles-liu-75a5b2277/"
              className="flex items-center"
            >
              <i className="bx bxl-github bx-md text-white"></i>
            </a>
          </li>
          <li className="rounded-full bg-black p-2 cursor-pointer">
            <a
              href="https://www.linkedin.com/in/charles-liu-75a5b2277/"
              className="flex items-center"
            >
              <i className="bx bxl-gmail bx-md text-white"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
