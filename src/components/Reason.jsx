import React from "react";
import { Accordion } from "flowbite-react";
import konstruksi from "../assets/konstruksi.jpg";
import { useSelector } from "react-redux";
import { selectLanguageData } from "../redux-toolkit/languageSlice";

const Reason = () => {
  const languageData = useSelector(selectLanguageData);
  return (
    <>
      <div className="w-full lg:h-screen py-10 lg:px-20 px-4 bg-[#F9F7F7]">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6">
          <div>
            <h1 className="font-serif py-2">{languageData.why}</h1>
            <h1 className="text-blue-900 font-bold text-4xl py-2">
              {languageData.closer}
            </h1>
            <p className="text-justify py-2 text-lg">{languageData.reason}</p>
            <Accordion className="mt-6">
              <Accordion.Panel>
                <Accordion.Title>
                  {languageData.accordion_title_1}
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {languageData.accordion_1}
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  {languageData.accordion_title_2}
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {languageData.accordion_2}
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  {languageData.accordion_title_3}
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {languageData.accordion_3}
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
          <div className="flex justify-end text-left">
            <img
              className="w-full h-[500px] rounded-xl"
              src={konstruksi}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reason;
