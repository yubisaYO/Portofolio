import React from "react";
import "./about.css";
const About = () => {
  return (
    <div
      className="flex flex-col md:flex-row w-full mx-auto pt-5 gap-5 md:gap-10 items-center content bg-red-500"
      style={{ maxWidth: "1250px" }}
    >
      <div className="flex-1 h-1/2 md:h-full flex flex-col gap-5 order-2 md:order-1">
        <div className="w-fit">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2 font-bold">
            About Me
          </h1>
          <div className="w-1/2 h-2 bg-indigo-400"></div>
        </div>
        <p className="md:text-md lg:text-xl">
          I am an enthusiast in the field of technology, particularly in the
          realm of front-end development. This passion led me to pursue a degree
          in computer science, allowing me to delve deeper into the world of
          technology. My specialization in software engineering and web
          development has equipped me with a profound understanding of
          programming. However, my journey doesn&rsquo;t stop there. I have also
          taken on additional challenges, such as embarking on an internship
          project with a Shariah-compliant bank and engaging in various other
          endeavors. These experiences include creating full-stack websites and
          crafting captivating designs, all of which have enriched my skill set
          and broadened my horizons in the ever-evolving tech landscape.
        </p>
      </div>
      <div className="flex-1 h-1/2 w-full  md:h-full rounded-3xl overflow-hidden order-1 md:order-2">
        <img
          src="./portoImg2.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default About;
