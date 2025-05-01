import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { babyImage, Blue, Green, Rectangle20, Rectangle21, Rectangle22, Rectangle23, Rectangle24, Rectangle25, Rectangle26, Rectangle27, Rectangle28, Rectangle29, Rectangle30, Rectangle31, Rectangle32 } from "../../assets/images";

import { useNavigate } from "react-router-dom";

const Bed = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/moreview");
  }
  return (
    <>
      <div className="relative w-fit mt-4 mb-8">
        {/* Corner Images */}
        <img src={Green} alt="Top Left" className="absolute top-[12px] right-[30px] left-[45px] -translate-x-full -translate-y-full" />
        <img src={Blue} alt="Top Right" className="absolute top-[12px] right-[40px] translate-x-full -translate-y-full" />
        <img src={Blue} alt="Bottom Left" className="absolute top-[34px] left-[41px] -translate-x-full translate-y-full" />
        <img src={Green} alt="Bottom Right" className="absolute bottom-0 right-0 left-[180px] top-[36px] translate-x-full translate-y-full" />
      
        {/* Heading */}
        <h1 className="px-12 py-4  text-2xl font-bold">BED & BATH</h1>
      </div>

      <div className="grid grid-cols-7 gap-4 px-12">
        {[
          { img: Rectangle20, text: "BABY SHAMPOO" },
          { img: Rectangle21, text: "BABY + DIAPERS" },
          { img: Rectangle22, text: "WIPES" },
          {
            img: Rectangle23,
            text: "SHAMPOO & BODY WASH",
          },
          { img: babyImage, text: "DIPER PACKS" },
          { img: Rectangle24, text: "CONDITIONER" },
          {
            img: Rectangle25,
            text: "GENTLE MOISTURE LOTION",
          },
          { img: Rectangle26, text: "BODY OIL" },
          { img: Rectangle27, text: "BUBBLE BATH" },
          { img: Rectangle32, text: "DIPERS" },
          { img: Rectangle28, text: "BODY MIST" },
          {
            img: Rectangle29,
            text: "DEEP MOISTURE BODY BUTTER",
          },
          { img: Rectangle30, text: "BODY SCRUB" },
          { img: Rectangle31, text: "BATH SALT" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col bg-[#F2F1F1] p-2">
            <img src={item.img} className="h-full" alt="" />
            <p className="mt-4 text-sm">{item.text}</p>
            <button className="flex items-center gap-1 text-green-600 mt-2" onClick={handleClick}>
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
