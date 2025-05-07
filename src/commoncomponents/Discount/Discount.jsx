import React from "react";
import { babyImage, Blue, Green, Rectangle24, Rectangle32 } from "../../assets/images";

const Discount = () => {
  return (
    <>
      <div className="relative w-fit mt-8 mb-4">
        {/* Corner Images */}
        <img src={Green} alt="Top Left" className="absolute top-[24px] left-[26px]  -translate-x-full -translate-y-full" />
        <img src={Blue} alt="Top Right" className="absolute top-[24px] right-[26px] translate-x-full -translate-y-full" />
        <img src={Blue} alt="Bottom Left" className="absolute top-[40px] left-[23px] -translate-x-full translate-y-full" />
        <img src={Green} alt="Bottom Right" className="absolute bottom-0 right-0 left-[280px] top-[40px] translate-x-full translate-y-full" />
      
        {/* Heading */}
        <h1 className="py-4  text-[32px] font-bold">DISCOUNT OFFERS</h1>
      </div>
      <div className="w-full bg-white grid grid-cols-3 gap-4 h-[700px] ">
        <div className="relative group overflow-hidden">
          <img
            src={Rectangle32}
            className="w-full h-full"
            alt=""
          />
          <div className="absolute inset-0 opacity-0 text-center group-hover:opacity-100 ">
            <h1 className="text-center text-[22px] font-bold text-[#54FF6C] mt-6">
              Product
            </h1>
            <h1 className="text-center text-white text-[62px] font-bold mt-4">
              Featured
            </h1>
            <p className="text-center text-white text-[22px] font-[400px] mt-4">
              Top ten products of the week
            </p>
            <p className="text-center text-white text-[22px] font-[400px]  underline mt-4">
              Explore item
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden">
          <img
            src={Rectangle24}
            className="w-full h-full"
            alt=""
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
            <h1 className="text-center text-[22px] font-bold text-[#54FF6C] mt-6">
              Product
            </h1>
            <h2 className="text-center text-white text-[62px] font-bold mt-4 leading-14">
              Sale Off Baby Things
            </h2>
            <p className="text-center text-white text-[22px] font-[400px] m-4">
              Top ten products of the week
            </p>
            <p className="text-center text-white text-[142px] font-bold mt-4">70%</p>
            <div className="flex justify-center items-center mt-8 ">
              <button className="text-white text-[22px] font-bold underline mt-6 border-2 border-white rounded-md px-8 py-2">
                Explore items
              </button>
            </div>
          </div>
        </div>
        <div className="relative group overflow-hidden">
          <img
            src={babyImage}
            className="w-full h-full"
            alt=""
          />
          <div className="absolute inset-0 opacity-0  group-hover:opacity-100">
            <h1 className="text-center text-[22px] font-bold text-[#54FF6C] mt-6">
              Product
            </h1>
            <h1 className="text-center text-white text-[62px] font-bold mt-4">
              Sell
            </h1>
            <p className="text-center text-white mt-4 text-[22px] font-[400px]">
              Top ten products of the week
            </p>
            <p className="text-center text-white text-[22px] font-bold underline mt-4">
              Explore item
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
