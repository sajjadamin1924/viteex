import { babyImage, Blue, Green } from "../assets/images";
import React from "react";
import { useMediaQuery } from "react-responsive";

const KidsCollection = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div className="px-4">
      {/* Fancy Heading with corner icons */}
      <div className="relative w-fit my-8">
        <h1 className={`py-4 mt-4 mb-4 ${isMobile ? "text-2xl" : "text-[32px]"}`}>
          Find Kid's{" "}
          <span className="relative inline-block font-bold">
            <img
              src={Green}
              alt="Top Left"
              className="absolute top-[10px] left-[20px] -translate-x-full -translate-y-full"
            />
            <img
              src={Blue}
              alt="Top Right"
              className="absolute top-[12px] right-[30px] translate-x-full -translate-y-full"
            />
            <img
              src={Blue}
              alt="Bottom Left"
              className="absolute bottom-[10px] right-[160px] translate-x-full translate-y-full"
            />
            <img
              src={Green}
              alt="Bottom Right"
              className="absolute top-[28px] left-[120px] translate-x-full translate-y-full"
            />
            Collection
          </span>
        </h1>
      </div>

      {/* Main Section */}
      <div
        className={`w-full rounded-[40px] overflow-hidden flex ${isTabletOrMobile ? "flex-col" : "flex-row"}`}
        style={{
          background: "linear-gradient(100deg, #0702FF, #54FF6C)",
        }}
      >
        {/* Text Section */}
        <div className={`${isTabletOrMobile ? "w-full text-center" : "w-1/2 text-left"} text-white px-6 py-10 md:px-16 md:py-16`}>
          <h1 className={`${isMobile ? "text-3xl" : isTabletOrMobile ? "text-4xl" : "text-[64px]"} font-bold leading-tight`}>
            Best Style <br />
            Collection for your Kids
          </h1>

          <p className={`mt-4 font-semibold ${isMobile ? "text-base" : "text-xl"}`}>
            Get special offers just for you
          </p>
          <button className={`bg-[#54FF6C] text-white rounded-full ${isMobile ? "py-2 px-6 text-base" : "py-3 px-10 text-2xl"} font-semibold mt-10`}>
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className={`${isTabletOrMobile ? "w-full" : "w-1/2"} flex justify-center items-center p-4`}>
          <div className="rounded-3xl border-[12px] border-[#C4C4C4] overflow-hidden max-w-[400px] w-full">
            <img
              src={babyImage}
              alt="Baby"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsCollection;
