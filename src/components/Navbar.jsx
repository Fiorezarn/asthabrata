import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Beranda", brand: "/#Home" },
    { id: 2, text: "Tentang Kami", brand: "/About/#About" },
    { id: 3, text: "Hubungi Kami" },
  ];

  return (
    <div
      className={`w-full fixed z-20 flex justify-between items-center h-24 mx-auto px-12 text-white ${
        navbar
          ? "bg-[#3F72AF] transition duration-500 ease-in-out"
          : "bg-transparent transition duration-500 ease-in-out"
      }`}
    >
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#F9F7F7]">Astha Brata.</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex flex-grow justify-end items-center">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#112D4E] rounded-xl cursor-pointer duration-300"
            style={{ minWidth: "fit-content" }}
          >
            <Link
              to={item.brand}
              className="text-white hover:text-white font-bold"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed z-10 md:hidden left-0 top-0 w-[60%] h-screen bg-[#3F72AF] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#F9F7F7] m-4">
          Astha Brata
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#112D4E] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            <Link
              to={item.brand}
              className="text-white hover:text-white font-bold"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
