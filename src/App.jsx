import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div className="font-mons bg-red-400">
      {/*  Home   */}

      <section id="#" className="h-screen overflow-hidden">
        <div className="h-full w-full bg-blue-50">
          <Navbar />
          <Hero />
        </div>
      </section>

      <section id="sec" className="h-screen">
        asd
      </section>
      <h1 className="text-red-500 font-mons">test</h1>
    </div>
  );
};

export default App;
