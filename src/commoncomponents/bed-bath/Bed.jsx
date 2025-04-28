import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

const Bed = () => {
  return (
    <>
      <h1 className="px-4 mt-4 mb-4">BED & BATH</h1>

      <div className="grid grid-cols-7 gap-2 px-12">
        {[
          { img: "src/assets/images/Rectangle 20.png", text: "BABY SHAMPOO" },
          { img: "src/assets/images/Rectangle 21.png", text: "BABY + DIAPERS" },
          { img: "src/assets/images/Rectangle 22.png", text: "WIPES" },
          {
            img: "src/assets/images/Rectangle 23.png",
            text: "SHAMPOO & BODY WASH",
          },
          { img: "src/assets/images/baby.png", text: "DIPER PACKS" },
          { img: "src/assets/images/Rectangle 24.png", text: "CONDITIONER" },
          {
            img: "src/assets/images/Rectangle 25.png",
            text: "GENTLE MOISTURE LOTION",
          },
          { img: "src/assets/images/Rectangle 26.png", text: "BODY OIL" },
          { img: "src/assets/images/Rectangle 27.png", text: "BUBBLE BATH" },
          { img: "src/assets/images/Rectangle 32.png", text: "DIPERS" },
          { img: "src/assets/images/Rectangle 28.png", text: "BODY MIST" },
          {
            img: "src/assets/images/Rectangle 29.png",
            text: "DEEP MOISTURE BODY BUTTER",
          },
          { img: "src/assets/images/Rectangle 30.png", text: "BODY SCRUB" },
          { img: "src/assets/images/Rectangle 31.png", text: "BATH SALT" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col bg-[#F2F1F1] p-2">
            <img src={item.img} className="h-full" alt="" />
            <p className="mt-4 text-sm">{item.text}</p>
            <button className="flex items-center gap-1 text-green-600 mt-2">
              View All
              <IoArrowForwardSharp />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bed;
