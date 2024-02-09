import React from "react";
import { Accordion } from "flowbite-react";
import konstruksi from "../assets/konstruksi.jpg";

const Reason = () => {
  return (
    <>
      <div className="w-full lg:h-screen py-10 lg:px-20 px-4 bg-[#F9F7F7]">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6">
          <div>
            <h1 className="font-serif py-2">Kenapa Harus Kami?</h1>
            <h1 className="text-blue-900 font-bold text-4xl py-2">
              Proses Manajerial Profesional
            </h1>
            <p className="text-justify py-2 text-lg">
              <span className="font-bold text-blue-900">Astha Brata</span>{" "}
              memiliki sumber daya manusia yang profesional, berpengalaman atas
              pekerjaan yang dibidanginya. Kekuatan dari perusahaan konsultan
              adalah sumber daya manusianya, karena hal tersebut{" "}
              <span className="font-bold text-blue-900">Astha Brata</span>{" "}
              selaku perusahaan yang menaungi mereka, menjalankan proses
              manajerial yang profesional.
            </p>
            <Accordion className="mt-6">
              <Accordion.Panel>
                <Accordion.Title>Komitmen Terhadap Kualitas</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Kami tidak hanya berkomitmen untuk memberikan layanan yang
                    berkualitas tinggi, tetapi juga untuk menjaga kualitas
                    tersebut melalui proses pengembangan dan pemeliharaan yang
                    cermat.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Tim Profesional</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Tim kami terdiri dari para profesional berpengalaman yang
                    memiliki pengetahuan yang mendalam dalam berbagai bidang
                    teknologi informasi. Mereka siap untuk memberikan solusi
                    terbaik untuk menunjang kesuksesan bisnis Anda.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Keahlian yang Teruji</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Tim ahli kami memiliki pengalaman yang luas dan keahlian
                    yang teruji dalam bidang perizinan dan analisis dampak lalu
                    lintas.
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
