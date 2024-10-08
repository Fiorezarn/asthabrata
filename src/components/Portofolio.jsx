import React from "react";
import Konstruksi1 from "../assets/konstruksi.jpg";
import Konstruksi2 from "../assets/konstruksi2.jpg";
import Konstruksi3 from "../assets/konstruksi3.jpg";
import Konstruksi4 from "../assets/konstruksi4.jpg";
import { useSelector } from "react-redux";
import { selectLanguageData } from "../redux-toolkit/languageSlice";

const Portofolio = () => {
  const languageData = useSelector(selectLanguageData);
  return (
    <>
      <div
        className="w-full py-10 px-8 sm:px-36 bg-[#3F72AF]"
        id="documentation"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4">
          <div className="col-span-1 md:col-span-1 row-span-2 justify-center items-center relative">
            <img
              src={Konstruksi1}
              alt=""
              className="w-full h-full object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="col-span-1 md:col-span-1 row-span-1 items-center relative">
            <img
              src={Konstruksi2}
              alt=""
              className="w-full h-full object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="col-span-1 md:col-span-1 row-span-1 justify-center items-center relative">
            <img
              src={Konstruksi3}
              alt=""
              className="w-full h-full object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="col-span-1 md:col-span-1 row-span-1 justify-center items-center relative">
            <img
              src={Konstruksi4}
              alt=""
              className="w-full h-full object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2 row-start-1 row-span-2">
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-white font-serif text-2xl text-center md:text-left">
                {languageData.portofolio_title}
              </h1>
              <h1 className="text-white font-bold text-4xl text-center md:text-left">
                <span className="text-[#F9F7F7]">
                  {languageData.documentation}
                </span>{" "}
                & <span className="text-[#112D4E]">Portofolio</span>
              </h1>
              <p className="text-gray-300 text-center md:text-left">
                {languageData.portofolio_content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portofolio;
