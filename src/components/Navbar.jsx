import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import astha from "../assets/logo_nav.svg";
import flagen from "../assets/flag_en.svg";
import flagid from "../assets/flag_id.svg";
import {
  setLanguage,
  selectLanguageData,
} from "../redux-toolkit/languageSlice";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [selected, setSelected] = useState("ID");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const languageData = useSelector(selectLanguageData);

  const handleSelect = (value) => {
    setSelected(value);
    switchLanguage(value);
    setOpen(false);
  };

  const switchLanguage = (value) => {
    if (value === "ID") {
      dispatch(setLanguage("id"));
    } else {
      dispatch(setLanguage("en"));
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // useEffect to set the background when the page loads or when switching pages
  useEffect(() => {
    changeBackground(); // Check background on load
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: languageData.home, brand: "/" },
    { id: 2, text: languageData.about, brand: "/About" },
    { id: 3, text: languageData.contact, brand: "/Contact" },
  ];

  return (
    <div
      className={`w-full fixed z-20 flex justify-between items-center h-24 mx-auto px-12 text-white ${
        navbar
          ? "bg-[#112D4E] transition duration-500 ease-in-out"
          : "bg-transparent transition duration-500 ease-in-out"
      }`}
    >
      {/* Logo */}
      <div className="flex">
        <img className="w-72 items-center" src={astha} alt="LOGO" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex flex-grow justify-end items-center gap-6">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#10AED1] rounded-xl cursor-pointer duration-300"
            style={{ minWidth: "fit-content" }}
          >
            <Link
              to={item.brand}
              className="text-white hover:text-white font-bold font-roboto"
            >
              {item.text}
            </Link>
          </li>
        ))}
        <div className="relative inline-block w-20">
          <div
            className="text-black font-bold rounded-md bg-white p-2 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {selected === "ENG" ? (
              <>
                <img className="inline-block mr-2" src={flagen} alt="" />
                ENG
              </>
            ) : (
              <>
                <img className="inline-block mr-2" src={flagid} alt="" />
                ID
              </>
            )}
          </div>
          {open && (
            <ul className="absolute w-full bg-white border rounded-md mt-1 text-black">
              <li
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelect("ENG")}
              >
                <img className="inline-block mr-2" src={flagen} alt="" />
                ENG
              </li>
              <li
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelect("ID")}
              >
                <img className="inline-block mr-2" src={flagid} alt="" />
                ID
              </li>
            </ul>
          )}
        </div>
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
        <div className="ml-4 mt-2 relative inline-block w-20">
          <div
            className="text-black font-bold rounded-md bg-white p-2 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {selected === "ENG" ? (
              <>
                <img className="inline-block mr-2" src={flagen} alt="" />
                ENG
              </>
            ) : (
              <>
                <img className="inline-block mr-2" src={flagid} alt="" />
                ID
              </>
            )}
          </div>
          {open && (
            <ul className="absolute w-full bg-white border rounded-md mt-1 text-black">
              <li
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelect("ENG")}
              >
                <img className="inline-block mr-2" src={flagen} alt="" />
                ENG
              </li>
              <li
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelect("ID")}
              >
                <img className="inline-block mr-2" src={flagid} alt="" />
                ID
              </li>
            </ul>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
