import React, { useState, useRef } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef(null);

  // Fungsi untuk menampilkan atau menyembunyikan menu dengan efek fade
  const toggleMenu = () => {
    if (!menu) {
      // Jika menu belum terbuka, tampilkan menu dengan efek fade in
      setMenu(true);
    } else {
      // Jika menu sudah terbuka, beri efek fade out
      menuRef.current.classList.add("animate__fadeOutUp");
      setTimeout(() => {
        setMenu(false);
        menuRef.current.classList.remove("animate__fadeOutUp");
      }, 300); // Ubah angka 300 sesuai dengan durasi animasi CSS (ms)
    }
  };

  return (
    <div
      className={`fixed top-0 w-full  bg-white py-6 flex justify-around items-center shadow-md mx-auto transition duration-150 ease-out z-50`}
    >
      <h1 className="font-bold text-xl">PORTFOLIO.</h1>

      <ul className="hidden md:flex text-sm items-center uppercase font-semibold">
        {/* Tambahkan onClick untuk menutup menu saat item menu diklik */}
        <li className="mr-3" onClick={toggleMenu}>
          <a href="#" className="hover:opacity-80">
            Home
          </a>
        </li>
        <li className="mr-3" onClick={toggleMenu}>
          <a href="#about" className="hover:opacity-80">
            About
          </a>
        </li>
        <li className="mr-3" onClick={toggleMenu}>
          <a href="#work" className="hover:opacity-80">
            Work
          </a>
        </li>
        <li className="" onClick={toggleMenu}>
          <a href="#contact" className="hover:opacity-80">
            Contact
          </a>
        </li>
      </ul>
      <span className="flex items-center md:hidden text-2xl cursor-pointer z-10">
        <i className="bx bx-menu" onClick={toggleMenu}></i>
      </span>
      {/* Tambahkan kelas 'menu-open' saat menu terbuka */}
      <ul
        ref={menuRef}
        className={`absolute md:hidden text-sm items-center uppercase font-semibold w-full bg-white top-14 text-center shadow-md border-2 border-t-gray-200 ${
          menu ? "menu-open animate__animated animate__fadeInDown" : "hidden"
        } space-y-6 py-4 rounded-b-lg`}
      >
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
    </div>
  );
};

export default Navbar;
