/* eslint-disable react/no-unescaped-entities */
import { Blockquote } from "flowbite-react";
import Visi from "../assets/vision.svg";
import Misi from "../assets/mission.svg";

const VisiMisi = () => {
  return (
    <>
      <div className="w-full py-10 px-4 lg:px-28">
        <div className="lg:flex lg:flex-cols">
          <div className="lg:my-20">
            <h1 className="font-bold text-3xl">Visi Astha Brata</h1>
            <Blockquote className="my-4 border-l-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">
              "Menjadi mitra terpercaya dalam menyediakan layanan andalakun yang
              memadukan keahlian teknologi dan kebijaksanaan bisnis untuk
              memenuhi kebutuhan klien kami."
            </Blockquote>
          </div>
          <img className="w-[580px] h-[330px]" src={Visi} alt="" />
        </div>
        <div className="lg:flex lg:flex-cols">
          <img className="w-[580px] h-[330px]" src={Misi} alt="" />
          <div className="lg:my-20 lg:ml-10">
            <h1 className="font-bold text-3xl">Misi Astha Brata</h1>
            <ul className="divide-y divide-slate-900 mt-2">
              <li className="flex items-center gap-4 py-3">
                <div className="flex items-center self-center text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-label="Dashboard icon"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                  </svg>
                </div>

                <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
                  <h4 className="text-base text-slate-700 ">
                    Menjadi mitra terpercaya dalam menyediakan layanan
                    andalalin.
                  </h4>
                </div>
              </li>
              <li className="flex items-center gap-4 py-3">
                <div className="flex items-center self-center text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-label="User icon"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
                  <h4 className="text-base text-slate-700 ">
                    Menggabungkan keahlian teknologi dan kebijaksanaan bisnis.
                  </h4>
                </div>
              </li>
              <li className="flex items-center gap-4 py-3">
                <div className="flex items-center self-center text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-label="Analytics icon"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                </div>
                <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
                  <h4 className="text-base text-slate-700 ">
                    Memenuhi kebutuhan klien kami dengan solusi yang terbaik.
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisiMisi;
