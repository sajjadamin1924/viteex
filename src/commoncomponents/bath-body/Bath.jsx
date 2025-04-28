import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

const Bath = () => {
  return (
    <>
      <h1 className="px-12 mt-4 mb-4">BATH & BODY</h1>

      <div className="w-full py-6 bg-white flex gap-4 px-12">
      <div className="w-2/3 grid grid-cols-4 gap-2">
  {[
    { img: "src/assets/images/Rectangle 20.png", text: "BABY SHAMPOO" },
    { img: "src/assets/images/Rectangle 21.png", text: "BABY + DIAPERS" },
    { img: "src/assets/images/Rectangle 22.png", text: "WIPES" },
    { img: "src/assets/images/Rectangle 23.png", text: "SHAMPOO & BODY WASH" },
    { img: "src/assets/images/Rectangle 24.png", text: "CONDITIONER" },
    { img: "src/assets/images/Rectangle 25.png", text: "GENTLE MOISTURE LOTION" },
    { img: "src/assets/images/Rectangle 26.png", text: "BODY OIL" },
    { img: "src/assets/images/Rectangle 27.png", text: "BUBBLE BATH" },
    { img: "src/assets/images/Rectangle 28.png", text: "BODY MIST" },
    { img: "src/assets/images/Rectangle 29.png", text: "DEEP MOISTURE BODY BUTTER" },
    { img: "src/assets/images/Rectangle 30.png", text: "BODY SCRUB" },
    { img: "src/assets/images/Rectangle 31.png", text: "BATH SALT" },
  ].map((item, index) => (
    <div key={index} className="flex flex-col bg-[#F2F1F1] p-2">
      <img src={item.img} alt="" />
      <p className="mt-4 text-sm">{item.text}</p>
      <button className="flex items-center gap-1 text-green-600 mt-2">
        View All
        <IoArrowForwardSharp />
      </button>
    </div>
  ))}
</div>


<div className="relative w-1/3">
  <img src="src/assets/images/Rectangle 7.png" className="h-full w-full" alt="baby image" />
  
  
  <div className="absolute top-36 left-8 flex flex-col items-center justify-center text-black">
    <h2 className="text-2xl font-bold mb-4">VALUE KITS & BUNDLE DEALS</h2>
    <button className="bg-[#54FF6C]  text-white font-bold py-2 px-4 rounded mt-100">
      View All
    </button>
  </div>
</div>

      </div>
    </>
  );
};

export default Bath;
