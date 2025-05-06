import React, { use } from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
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

  const handleClick = () => {
    navigate("/moreview");
  }
  return (
    <>
      <div className="relative w-fit mt-8 mb-4">
        {/* Corner Images */}
        <img
          src={Green}
          alt="Top Left"
          className="absolute top-[23px] right-[0px] left-[20px] -translate-x-full -translate-y-full"
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
          className="absolute bottom-0 right-[22px] top-[40px] translate-x-full translate-y-full"
        />

        {/* Heading */}
        <h1 className=" py-4  text-[32px] font-bold">BATH & BODY</h1>
      </div>

      <div className="w-full py-6 bg-white flex gap-4">
        <div className="w-2/3 grid grid-cols-4 gap-4">
          {[
            { img: Rectangle20, text: "BABY SHAMPOO" },
            { img: Rectangle21, text: "BABY + DIAPERS", badge: "7 size" },
            { img: Rectangle22, text: "WIPES", badge: "4 Scents" },
            {
              img: Rectangle23,
              text: "SHAMPOO & BODY WASH",
              badge: "6 Scents",
            },
            { img: Rectangle24, text: "CONDITIONER", badge: "6 Scents" },
            {
              img: Rectangle25,
              text: "GENTLE MOISTURE LOTION",
              badge: "6 Scents",
            },
            { img: Rectangle26, text: "BODY OIL", badge: "6 Scents" },
            { img: Rectangle27, text: "BUBBLE BATH", badge: "6 Scents" },
            { img: Rectangle28, text: "BODY MIST", badge: "4 Scents" },
            {
              img: Rectangle29,
              text: "DEEP MOISTURE BODY BUTTER",
              badge: "6 Scents",
            },
            { img: Rectangle30, text: "BODY SCRUB", badge: "6 Scents" },
            { img: Rectangle31, text: "BATH SALT", badge: "4 Scents" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col bg-[#F2F1F1] p-2">
              <div className="relative">
                {item.badge && item.badge.trim() !== "" && (
                  <div className="absolute top-[-8px] left-[-8px] bg-[#2E2E2E] text-white text-xs px-2 py-1 rounded-br-xl">
                    {item.badge}
                  </div>
                )}

                <img src={item.img} alt={item.text} />
              </div>
              <p className="mt-4 text-[18px] font-[600px]">{item.text}</p>
              <button className="flex items-center gap-1 text-green-600 mt-2 text-[16px] font-medium" onClick={handleClick}> 
                View All
                <IoArrowForwardSharp />
              </button>
            </div>
          ))}
        </div>

        <div className="relative w-1/3">
          <img src={Rectangle7} className="h-full w-full" alt="baby image" />

          <div className="absolute top-36 left-8 flex flex-col items-center justify-center text-black">
            <h2 className="text-5xl font-bold mb-4 text-[#343434] text-center">
              VALUE KITS & <span className="text-4xl">BUNDLE DEALS</span>
            </h2>
            <button className="bg-[#54FF6C] text-[32px]  font-medium py-2 px-4 rounded mt-100">
              View All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bath;
