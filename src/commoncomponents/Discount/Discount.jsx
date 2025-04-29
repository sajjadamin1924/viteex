import React from "react";
import { babyImage, Blue, Green, Rectangle24, Rectangle32 } from "../../assets/images";

const Discount = () => {
  return (
    <>
      <div className="relative w-fit mt-8 mb-4">
        {/* Corner Images */}
        <img src={Green} alt="Top Left" className="absolute top-[12px] right-[30px] left-[45px] -translate-x-full -translate-y-full" />
        <img src={Blue} alt="Top Right" className="absolute top-[12px] right-[40px] translate-x-full -translate-y-full" />
        <img src={Blue} alt="Bottom Left" className="absolute top-[34px] left-[41px] -translate-x-full translate-y-full" />
        <img src={Green} alt="Bottom Right" className="absolute bottom-0 right-0 left-[253px] top-[36px] translate-x-full translate-y-full" />
      
        {/* Heading */}
        <h1 className="px-12 py-4  text-2xl font-bold">DISCOUNT OFFERS</h1>
      </div>
      <div className="w-full bg-white grid grid-cols-3 gap-4 px-12 ">
        <div className="relative group">
          <img
            src={Rectangle32}
            className="w-full h-full"
            alt=""
          />
          <div className="absolute inset-0 opacity-0 text-center group-hover:opacity-100 ">
            <h1 className="text-center text-xl font-bold text-[#54FF6C] mt-6">
              Product
            </h1>
            <h1 className="text-center text-white text-2xl font-bold mt-4">
              Featured
            </h1>
            <p className="text-center text-white mt-4">
              Top ten products of the week
            </p>
            <p className="text-center text-white underline mt-4">
              Explore item
            </p>
          </div>
        </div>
        <div className="relative group">
          <img
            src={Rectangle24}
            className="w-full h-full"
            alt=""
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
            <h1 className="text-center text-xl font-bold text-[#54FF6C] mt-6">
              Product
            </h1>
            <h1 className="text-center text-white text-2xl font-bold mt-4">
              Sale Off Baby Things
            </h1>
            <p className="text-center text-white m-4">
              Top ten products of the week
            </p>
            <p className="text-center text-white text-6xl font-bold mt-4">70%</p>
            <div className="flex justify-center items-center mt-8 ">
              <button className="text-white underline mt-6 border-2 border-white rounded-md px-8 py-2">
                Explore items
              </button>
            </div>
          </div>
        </div>
        <div className="relative group">
          <img
            src={babyImage}
            className="w-full h-full"
            alt=""
          />
          <div className="absolute inset-0 opacity-0  group-hover:opacity-100">
            <h1 className="text-center text-xl font-bold text-[#54FF6C] mt-6">
              Product
            </h1>
            <h1 className="text-center text-white text-2xl font-bold mt-4">
              Sell
            </h1>
            <p className="text-center text-white mt-4">
              Top ten products of the week
            </p>
            <p className="text-center text-white underline mt-4">
              Explore item
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
