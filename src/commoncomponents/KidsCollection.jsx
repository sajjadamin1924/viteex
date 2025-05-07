import { babyImage, Blue, Green } from "../assets/images";
import React from "react";

const KidsCollection = () => {
  return (
    <div>
      {/* Fancy Heading with corner icons */}
      <div className="relative w-fit my-8">
        <h1 className="py-4 mt-4 mb-4 text-[32px]">
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
              className="absolute bottom-[10px] left-[20px]translate-x-full translate-y-full"
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
        className="w-full rounded-[40px] flex overflow-hidden"
        style={{
          background: "linear-gradient(100deg, #0702FF, #54FF6C)",
        }}
      >
        {/* Text Section */}
        <div className="w-1/2 text-white px-16 py-16">
          <h1 className="text-[64px] font-bold">
            Best Style <br />
            Collection for your Kids
          </h1>

          <p className="text-xl font-semibold mt-4">
            Get special offers just for you
          </p>
          <button className="bg-[#54FF6C] text-white rounded-full py-3 px-10 text-2xl font-semibold mt-16">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="w-1/2 flex justify-center items-center p-8">
          <div className="rounded-3xl border-[12px] border-[#C4C4C4] overflow-hidden">
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
