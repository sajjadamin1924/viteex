import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import {
  Blue,
  Green,
  Rectangle20,
  Rectangle21,
  Rectangle22,
  Rectangle23,
  Rectangle24,
  Rectangle25,
  Rectangle26,
  Rectangle27,
  Rectangle28,
  Rectangle29,
  Rectangle30,
  Rectangle31,
  Rectangle7,
} from "../../assets/images";

const Bath = () => {
  const navigate = useNavigate();
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const handleClick = () => {
    navigate("/moreview");
  };

  const items = [
    { img: Rectangle20, text: "BABY SHAMPOO" },
    { img: Rectangle21, text: "BABY + DIAPERS", badge: "7 size" },
    { img: Rectangle22, text: "WIPES", badge: "4 Scents" },
    { img: Rectangle23, text: "SHAMPOO & BODY WASH", badge: "6 Scents" },
    { img: Rectangle24, text: "CONDITIONER", badge: "6 Scents" },
    { img: Rectangle25, text: "GENTLE MOISTURE LOTION", badge: "6 Scents" },
    { img: Rectangle26, text: "BODY OIL", badge: "6 Scents" },
    { img: Rectangle27, text: "BUBBLE BATH", badge: "6 Scents" },
    { img: Rectangle28, text: "BODY MIST", badge: "4 Scents" },
    { img: Rectangle29, text: "DEEP MOISTURE BODY BUTTER", badge: "6 Scents" },
    { img: Rectangle30, text: "BODY SCRUB", badge: "6 Scents" },
    { img: Rectangle31, text: "BATH SALT", badge: "4 Scents" },
  ];

  return (
    <>
      <div className="relative w-fit mt-8 mb-4">
        {/* Corner Images */}
        <img
          src={Green}
          alt="Top Left"
          className="absolute top-[23px] left-[20px] -translate-x-full -translate-y-full"
        />
        <img
          src={Blue}
          alt="Top Right"
          className="absolute top-[25px] right-[23px] translate-x-full -translate-y-full"
        />
        <img
          src={Blue}
          alt="Bottom Left"
          className="absolute top-[42px] left-[15px] -translate-x-full translate-y-full"
        />
        <img
          src={Green}
          alt="Bottom Right"
          className="absolute top-[40px] right-[22px] translate-x-full translate-y-full"
        />
        <h1 className={`py-4 font-bold ${isMobile ? "text-xl" : "text-[32px]"}`}>BATH & BODY</h1>
      </div>

      {/* Responsive Main Layout */}
      <div className={`w-full py-6 bg-white flex ${isTablet ? "flex-col" : "flex-row"} gap-4 px-4`}>
        <div className={`${isTablet ? "w-full" : "w-2/3"} grid ${isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-4"} gap-4`}>
          {items.map((item, index) => (
            <div key={index} className="flex flex-col bg-[#F2F1F1] p-2 rounded-md">
              <div className="relative">
                {item.badge && item.badge.trim() !== "" && (
                  <div className="absolute top-[-8px] left-[-8px] bg-[#2E2E2E] text-white text-xs px-2 py-1 rounded-br-xl">
                    {item.badge}
                  </div>
                )}
                <img src={item.img} alt={item.text} className="w-full" />
              </div>
              <p className="mt-4 text-[18px] font-semibold leading-snug line-clamp-2 h-[48px]">
                {item.text}
              </p>
              <button
                className="flex items-center gap-1 text-green-600 mt-2 text-[16px] font-medium"
                onClick={handleClick}
              >
                View All <IoArrowForwardSharp />
              </button>
            </div>
          ))}
        </div>

        {/* Side Image Section */}
        <div className={`${isTablet ? "w-full mt-8" : "w-1/3"}`}>
          <div className="relative h-full">
            <img src={Rectangle7} className="h-full w-full object-cover rounded-md" alt="baby image" />

            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-black text-center px-4">
              <h2 className={`${isMobile ? "text-2xl" : "text-4xl"} font-bold text-[#343434] mb-4`}>
                VALUE KITS & <br />
                <span className="text-2xl">BUNDLE DEALS</span>
              </h2>
              <button className="bg-[#54FF6C] text-white text-lg font-medium py-2 px-6 rounded">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bath;
