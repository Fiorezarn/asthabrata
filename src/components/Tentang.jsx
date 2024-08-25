import Konstruksi1 from "../assets/konstruksi.jpg";
import Konstruksi2 from "../assets/broco.png";
import Konstruksi3 from "../assets/konstruksi3.jpg";
import Background from "../assets/backgroundgradient.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const Tentang = () => {
  return (
    <>
      <div
        className="w-full bg-gradient-to-br from-[#0D2143] to-[#3F72AF] py-32 lg:py-28 px-8 sm:px-36 relative"
        id="About"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:grid-rows-2 gap-4">
          <div className="col-span-2 md:col-span-1 row-span-1 flex justify-start items-start relative">
            <div>
              <h1 className="text-white font-serif text-2xl md:text-3xl">
                Tentang Kami
              </h1>
              <h2 className="text-[#F9F7F7] font-bold text-4xl md:text-5xl">
                <span className="text-blue-200">Astha</span>{" "}
                <span className="text-blue-400">Brata</span>
              </h2>
              <p className="text-gray-300 md:text-lg text-justify mt-">
                <span className="font-bold text-blue-400">Astha Brata</span>{" "}
                memiliki tenaga ahli yang profesional, dengan pengalaman dan
                komitmen keras atas pekerjaanya. Perusahaan dengan segala
                dukungan konsultan dan kemitraannya dan siap pada apa yang
                dikerjakannya , karena hal tersebut{" "}
                <span className="font-bold text-blue-400">Astha Brata</span>{" "}
                selaku perusahaan yang menaungi mereka, menjalankan proses
                manajerial yang profesional.
              </p>
              <button className="mt-6 inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded border border-blue-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-blue-200 transition duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-sm hover:shadow-blue-200 focus:border-blue-700 focus:text-blue-700 focus:shadow-sm focus:shadow-blue-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:text-blue-300 disabled:shadow-none">
                <span>Explore Now</span>
                <span className="text-xs">
                  <FaExternalLinkAlt />
                </span>
              </button>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 flex justify-center items-center relative">
            <img
              src={Konstruksi1}
              alt=""
              className="w-full md:max-h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 md:col-span-1 row-span-1 flex justify-center items-center relative">
            <img
              src={Konstruksi2}
              alt=""
              className="w-full md:max-h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 md:col-span-1 row-span-1 flex justify-center items-center relative">
            <img
              src={Konstruksi3}
              alt=""
              className="w-full md:max-h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tentang;
