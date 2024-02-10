import { useState, useEffect } from "react";

const Total = () => {
  const [client, setclient] = useState(0);
  const [project, setProject] = useState(0);
  const [city, setCity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (client < 36) {
        setclient((prevclient) => prevclient + 1);
      } else {
        clearInterval(interval);
      }
    }, 5); // Sesuaikan kecepatan penghitungan di sini
    return () => clearInterval(interval);
  }, [client]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (project < 160) {
        setProject((prevProject) => prevProject + 1);
      } else {
        clearInterval(interval);
      }
    }, 5); // Sesuaikan kecepatan penghitungan di sini
    return () => clearInterval(interval);
  }, [project]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (city < 14) {
        setCity((prevCity) => prevCity + 1);
      } else {
        clearInterval(interval);
      }
    }, 50); // Sesuaikan kecepatan penghitungan di sini
    return () => clearInterval(interval);
  }, [city]);

  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-3 gap-12 mt-10">
        <div className="text-center">
          <h1 className="text-[#F9F7F7] text-xl lg:text-5xl font-bold">
            {client}+
          </h1>
          <p className="font-bold text-2xl lg:text-3xl text-[#F9F7F7]">
            Client
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-[#F9F7F7] text-xl lg:text-5xl font-bold">
            {project}+
          </h1>
          <p className="font-bold text-2xl lg:text-3xl text-[#F9F7F7]">
            Project
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-[#F9F7F7] text-xl lg:text-5xl font-bold">
            {city}+
          </h1>
          <p className="font-bold text-2xl lg:text-3xl text-[#F9F7F7]">City</p>
        </div>
      </div>
    </div>
  );
};

export default Total;
