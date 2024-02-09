import Card from "./Card";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { Icon } from "@iconify/react";


const Service = () => {
  const icon1 = <Icon icon="fluent-emoji:building-construction" />;
  const icon2 = <Icon icon="noto:horizontal-traffic-light" />;
  const icon3 = <Icon icon="twemoji:cityscape" />;

  return (
    <>
      <div className="w-full py-20 bg-[#F9F7F7]">
        <div className="content text-[#3F72AF]">
          <h1 className="text-3xl text-center font-bold">Our Service</h1>
          <span className="line"></span>
          <h1 className="text-3xl text-center font-bold text-red">
            Pelayanan Bidang Konsultan Transportasi, Konstruksi & Teknologi
          </h1>
          <div className="lg:flex justify-center gap-5 mt-14">
            <Card
              parent="px-5 py-10 text-center max-w-sm border-0 border-blue-700 border-b-4 lg:border-r-4 lg:border-b-0 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:duration-700 border"
              child1="bg-silver hover:bg-[#F9F7F7]"
              child2="text-5xl flex justify-center"
              h1="text-2xl font-bold text-red"
              p="text-gray-700 text-base"
              title={icon1}
              content="ANDALALIN"
              footer="Dokumen Analisis Dampak Lalu Lintas, sebagai panduan pengembang"
            />
            <Card
              parent="px-5 py-10 text-center max-w-sm border-0 border-blue-700 border-b-4 lg:border-r-4 lg:border-b-0 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:duration-700 border"
              child1="bg-silver hover:bg-[#F9F7F7]"
              child2="text-5xl flex justify-center"
              h1="text-2xl font-bold text-red"
              p="text-gray-700 text-base"
              title={icon2}
              content="MRL"
              footer="Manajemen Rekayasa Lalu Lintas dari kondisi eksisting untuk dilakukan mitigasi"
            />
            <Card
              parent="px-5 py-10 text-center max-w-sm border-0 border-blue-700 border-b-4 lg:border-r-4 lg:border-b-0 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:duration-700 border"
              child1="bg-silver hover:bg-[#F9F7F7]"
              child2="text-5xl flex justify-center"
              h1="text-2xl font-bold text-red"
              p="text-gray-700 text-base"
              title={icon3}
              content="KAJIAN TRANSPORTASI"
              footer="Mengkaji transportasi dari berbagai sisi, efisiensi, keamanan dan bisnis"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
