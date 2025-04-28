import React from "react";

const Discount = () => {
  return (
    <>
      <h1 className="px-12 mt-4 mb-4">DISCOUNT OFFERS</h1>
      <div className="w-full bg-white grid grid-cols-3 gap-4 px-12 ">
        <div className="relative group">
          <img
            src="src/assets/images/Rectangle 32.png"
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
            src="src/assets/images/Rectangle 24.png"
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
            src="src/assets/images/baby.png"
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
