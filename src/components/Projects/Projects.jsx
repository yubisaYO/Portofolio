import React, { useState } from "react";
import Project from "../Project/Project";
import "./projects.css";

const dataProject = [
  {
    id: 1,
    title: "Shopping Notes",
    description: "A simple website to notes that can record our shopping list",
    using: ["reactjs", "css"],
    img: "./project-1.png",
    git: "https://github.com/yubisaYO/ShoppingNote",
    view: "https://shopping-note.vercel.app/",
  },
  {
    id: 2,
    title: "Movie API",
    description: "A movie website that using API to search for list movie",
    using: ["react js", "tmdb api", "css"],
    img: "./project-2.png",
    git: "https://github.com/yubisaYO/MovieAPI",
    view: "https://movie-api-green-delta.vercel.app/",
  },
  {
    id: 3,
    title: "Restaurant",
    description: "A full landing page UI of restaurant website",
    using: ["html", "css"],
    img: "./project-3.png",
    git: "https://github.com/yubisaYO/Restaurant",
    view: "https://restaurant-site-pearl.vercel.app/",
  },

  {
    id: 4,
    title: "Game",
    description: "A simple game that can move up down left right by arrow",

    using: ["html", "css", "js"],
    img: "./project-4.png",
    git: "https://github.com/yubisaYO/GameSimple",
    view: "https://game-simple.vercel.app/",
  },
  {
    id: 5,
    title: "FreeMoney",
    description: "A simple system that recording transaction IN and OUT",

    using: ["reactjs", "css"],
    img: "./project-5.png",
    git: "https://github.com/yubisaYO/FreeMoney",
    view: "https://free-money-three.vercel.app/",
  },
  {
    id: 6,
    title: "ANOTHER FULL STACK WEB",
    description: "I CANT DEPLOY BUT HERE IS THE GITHUB REPOSITORY",

    using: ["mongoose", "mysql", "js"],
    img: "./project-6.png",
    git: "https://github.com/yubisaYO",
    view: "https://github.com/yubisaYO",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col pt-16 font-bold w-full max-w-screen-lg mx-auto text-center gap-20 h-full">
      <h1 className="text-5xl text-white">
        <span className="text-indigo-400">Project</span> I Have Made
      </h1>

      <div className="grid gap-x-3 gap-y-6 justify-items-center animate__animated animate__fadeInLeft projects">
        {dataProject.map((project) => (
          <Project data={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
