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
    <div className="flex justify-center py-16">
      <div className="grid grid-cols-3 gap-12">
        <div className="text-center">
          <h1 className="text-[#3F72AF] lg:text-5xl font-bold">{count}++</h1>
          <p className="font-bold lg:text-3xl text-[#3F72AF]">Client</p>
        </div>
        <div className="text-center">
          <h1 className="text-[#3F72AF] lg:text-5xl font-bold">{count}++</h1>
          <p className="font-bold lg:text-3xl text-[#3F72AF]">Partner</p>
        </div>
        <div className="text-center">
          <h1 className="text-[#3F72AF] lg:text-5xl font-bold">{count}++</h1>
          <p className="font-bold lg:text-3xl text-[#3F72AF]">Region</p>
        </div>
      </div>
    </div>
  );
};

export default Total;
