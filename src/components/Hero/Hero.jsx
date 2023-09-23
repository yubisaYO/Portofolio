import React, { useEffect } from "react";
import "./hero.css";
import Typed from "typed.js";

const Hero = () => {
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Developer",
        "Software Engineer",
        "Full-Stack Developer",
        "Binusian 2025",
        "CS Student",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="flex justify-center bg-blue-50 h-full "
      style={{ marginTop: "75px" }}
    >
      <div
        className="h-full w-full flex flex-col md:flex-row items-center gap-4 pt-5 md:pt-0 md:gap-10 md:justify-normal"
        style={{ maxWidth: "1250px" }}
      >
        <div
          className="
       rounded-full overflow-x-hidden border-2 border-black img bg-blue-400"
        >
          <img
            src="./HeroCover.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* 
      <div className="hidden 2xl:absolute -bottom-1/4 w-big h-big rounded-full -z-5 bg-gradient-to-t from-bg-whtie to bg-blue-200 left-16"></div> */}

        {/* animated text occupation */}
        <div className="font-semibold animate__animated animate__fadeInDown gap-2 flex flex-col desc items-center md:items-start">
          <h1 className="text-4xl md:text-5xl xl:text-6xl name">
            Hi, I&rsquo;m Charles
          </h1>
          <div className="flex items-center">
            <span
              className="text-3xl md:text-4xl xl:text-5xl text-indigo-400 job"
              ref={el}
            ></span>
          </div>

          <ul className="flex gap-4 items-center">
            <li className="rounded-full bg-black p-2 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/charles-liu-75a5b2277/"
                className="flex items-center"
                target="_blank"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </li>
            <li className="rounded-full bg-black p-2 cursor-pointer flex items-center">
              <a
                href="https://github.com/yubisaYO"
                className="flex items-center"
                target="_blank"
              >
                <i className="bx bxl-github"></i>
              </a>
            </li>
            <li className="rounded-full bg-black p-2 cursor-pointer">
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqXQFdvqBDhzvVKshvvKBNBBWmfLBTmLVbkTWrRBJVhNLRJPznKBcJpzLmLBwjSgvdncjB"
                className="flex items-center"
                target="_blank"
              >
                <i className="bx bxl-gmail"></i>
              </a>
            </li>
          </ul>
          <button className="bg-indigo-400 w-fit py-2 px-4 md:py-4 md:px-8 xl:py-6 xl:px-10 rounded-lg shadow-md font-bold text-white text-2xl mt-auto">
            See My CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
