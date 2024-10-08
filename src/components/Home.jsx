import backgroundImage from "../assets/highway.jpg";
import { FaDiceD6, FaExternalLinkAlt } from "react-icons/fa";
import { Icon } from "@iconify/react";
import Total from "../components/Total";
import { useSelector } from "react-redux";
import { selectLanguageData } from "../redux-toolkit/languageSlice";

const Home = () => {
  const languageData = useSelector(selectLanguageData);

  return (
    <>
      <div className="hero relative w-full text-white" id="Home">
        <div className="absolute space-x-6 right-4 bottom-6">
          <a
            className="text-white text-3xl"
            href="https://github.com/fiorezarn"
          >
            <Icon icon="logos:whatsapp-icon" />
          </a>
          <a
            className="text-white text-3xl"
            href="https://www.linkedin.com/in/fiorezarn"
          >
            <Icon icon="skill-icons:linkedin" />
          </a>
          <a
            className="text-white text-3xl"
            href="https://www.instagram.com/fiorezaa/"
          >
            <Icon icon="skill-icons:instagram" />
          </a>
        </div>
        <div className="content-hero absolute top-1/2 w-full px-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold mb-4">{languageData.welcome}</h1>
          <p className="text-xl lg:text-2xl text-center mb-8">
            <span className="text-[#DBE2EF]">Astha Brata</span> -{" "}
            {languageData.hero}
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
