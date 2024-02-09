import { useState, useEffect } from "react";

const Total = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 700) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 5); // Sesuaikan kecepatan penghitungan di sini
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-3 gap-12 mt-10">
        <div className="text-center">
          <h1 className="text-[#F9F7F7] text-xl lg:text-5xl font-bold">
            {count}++
          </h1>
          <p className="font-bold text-2xl lg:text-3xl text-[#F9F7F7]">
            Client
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-[#F9F7F7] text-xl lg:text-5xl font-bold">
            {count}++
          </h1>
          <p className="font-bold text-2xl lg:text-3xl text-[#F9F7F7]">
            Client
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-[#F9F7F7] text-xl lg:text-5xl font-bold">
            {count}++
          </h1>
          <p className="font-bold text-2xl lg:text-3xl text-[#F9F7F7]">
            Client
          </p>
        </div>
      </div>
    </div>
  );
};

export default Total;
