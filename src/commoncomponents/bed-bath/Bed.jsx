import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import {
  babyImage,
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
  Rectangle32,
} from "../../assets/images";

const Bed = () => {
  const navigate = useNavigate();
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const handleClick = () => {
    navigate("/moreview");
  };

  const items = [
    { img: Rectangle20, text: "BABY SHAMPOO" },
    { img: Rectangle21, text: "BABY + DIAPERS" },
    { img: Rectangle22, text: "WIPES" },
    { img: Rectangle23, text: "SHAMPOO & BODY WASH" },
    { img: babyImage, text: "DIPER PACKS" },
    { img: Rectangle24, text: "CONDITIONER" },
    { img: Rectangle25, text: "GENTLE MOISTURE LOTION" },
    { img: Rectangle26, text: "BODY OIL" },
    { img: Rectangle27, text: "BUBBLE BATH" },
    { img: Rectangle32, text: "DIPERS" },
    { img: Rectangle28, text: "BODY MIST" },
    { img: Rectangle29, text: "DEEP MOISTURE BODY BUTTER" },
    { img: Rectangle30, text: "BODY SCRUB" },
    { img: Rectangle31, text: "BATH SALT" },
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
          className="absolute top-[22px] right-[22px] translate-x-full -translate-y-full"
        />
        <img
          src={Blue}
          alt="Bottom Left"
          className="absolute top-[42px] left-[17px] -translate-x-full translate-y-full"
        />
        <img
          src={Green}
          alt="Bottom Right"
          className="absolute top-[42px] left-[172px] translate-x-full translate-y-full"
        />
        {/* Heading */}
        <h1 className={`py-4 font-bold ${isMobile ? "text-xl" : "text-[32px]"}`}>BED & BATH</h1>
      </div>

      <div
        className={`grid gap-4 ${
          isMobile
            ? "grid-cols-1"
            : isTablet
            ? "grid-cols-2"
            : "grid-cols-4 xl:grid-cols-7"
        } px-4`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#F2F1F1] p-2 rounded-md"
          >
            <img src={item.img} className="h-full w-full object-cover" alt={item.text} />
            <p className="mt-4 text-[18px] font-semibold leading-snug line-clamp-3 h-28">
              {item.text}
            </p>
            <button
              className="flex items-center gap-1 text-green-600 mt-2 font-medium text-[16px]"
              onClick={handleClick}
            >
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
