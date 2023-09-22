import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div
      className={`fixed top-0 w-full  bg-white py-6 flex justify-around items-center shadow-md mx-auto transition duration-150 ease-out z-50`}
    >
      <h1 className="font-bold text-xl">PORTOFOLIO.</h1>

      <ul className="hidden md:flex text-sm items-center uppercase font-semibold">
        <li className="mr-3">
          <a href="#" className="hover:opacity-80">
            Home
          </a>
        </li>
        <li className="mr-3">
          <a href="#about" className="hover:opacity-80">
            About
          </a>
        </li>
        <li className="mr-3">
          <a href="#work" className="hover:opacity-80">
            Work
          </a>
        </li>
        <li className="">
          <a href="#contact" className="hover:opacity-80">
            Contact
          </a>
        </li>
      </ul>
      {/* <span className="hidden md:flex items-center text-2xl cursor-pointer">
        <i className="bx bx-moon"></i>
      </span> */}
      <span className="flex items-center md:hidden text-2xl cursor-pointer z-10">
        <i className="bx bx-menu" onClick={() => setMenu(!menu)}></i>
      </span>
      {menu && (
        <ul className="absolute md:hidden text-sm items-center uppercase font-medium w-full bg-white transition duration-300 ease-in-out top-14 text-center shadow-md border-2 border-t-gray-200">
          <li className="p-4">
            <a href="#" className="hover:opacity-80">
              Home
            </a>
          </li>
          <li className="p-4">
            <a href="#about" className="hover:opacity-80">
              About
            </a>
          </li>
          <li className="p-4">
            <a href="#work" className="hover:opacity-80">
              Work
            </a>
          </li>
          <li className=" p-4">
            <a href="#contact" className="hover:opacity-80">
              Contact
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
