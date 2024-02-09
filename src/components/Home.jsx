import backgroundImage from "../assets/background.jpeg";
import { FaDiceD6, FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Total from "../components/Total";

const Home = () => {
  return (
    <>
      <div className="hero relative w-full text-white">
        <div className="absolute space-x-6 right-4 bottom-6">
          <a
            className="text-white hover:text-purple-400 text-3xl"
            href="https://github.com/fiorezarn"
          >
            <FaGithub />
          </a>
          <a
            className="text-white hover:text-purple-400 text-3xl"
            href="https://www.linkedin.com/in/fiorezarn"
          >
            <FaLinkedin />
          </a>
          <a
            className="text-white hover:text-purple-400 text-3xl"
            href="https://www.instagram.com/fiorezaa/"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="content-hero absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Selamat Datang di Astha Brata
          </h1>
          <p className="text-2xl text-justify mb-8">
            Solusi Terpercaya untuk Perizinan dan Analisis Dampak Lalu Lintas
          </p>
          <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded border border-blue-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-blue-200 transition duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-sm hover:shadow-blue-200 focus:border-blue-700 focus:text-blue-700 focus:shadow-sm focus:shadow-blue-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:text-blue-300 disabled:shadow-none">
            <span>Explore Now</span>
            <span className="text-xs">
              <FaExternalLinkAlt />
            </span>
          </button>
          <Total />
        </div>
        <img className="w-full h-[730px]" src={backgroundImage} alt="" />
      </div>
      <div className="divider flex justify-center">
        <a
          className="text-5xl mobile:text-4xl absolute mt-[-30px] p-[6px] text-red rounded-full shadow-lg shadow-indigo-500/40 bg-white text-blue-800 animate-bounce"
          href="/"
        >
          <FaDiceD6 />
        </a>
      </div>
    </>
  );
};

export default Home;
