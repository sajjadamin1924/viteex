import React from "react";
import { useMediaQuery } from "react-responsive";
import { babyImage, Blue, Green, Rectangle24, Rectangle32 } from "../../assets/images";

const Discount = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <>
      <div className="relative w-fit mt-8 mb-4 ">
        {/* Corner Images */}
        <img src={Green} alt="Top Left" className="absolute top-[24px] left-[26px] -translate-x-full -translate-y-full" />
        <img src={Blue} alt="Top Right" className="absolute top-[24px] right-[26px] translate-x-full -translate-y-full" />
        <img src={Blue} alt="Bottom Left" className="absolute top-[40px] left-[23px] -translate-x-full translate-y-full" />
        <img src={Green} alt="Bottom Right" className="absolute bottom-0 right-0 left-[280px] top-[40px] translate-x-full translate-y-full" />
        
        {/* Heading */}
        <h1 className={`py-4  font-bold ${isMobile ? "text-xl" : isTabletOrMobile ? "text-2xl" : "text-[32px]"}`}>
          DISCOUNT OFFERS
        </h1>
      </div>

      <div
        className={`w-full bg-white grid gap-4 px-4 ${
          isMobile ? "grid-cols-1" : isTabletOrMobile ? "grid-cols-2" : "grid-cols-3"
        } ${isMobile ? "h-auto" : "h-[700px]"}`}
      >
        {/* Card 1 */}
        <div className="relative group overflow-hidden">
          <img src={Rectangle32} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-opacity-50 opacity-0 text-center group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-[22px] font-bold text-[#54FF6C] mt-6">Product</h1>
            <h1 className="text-white text-[32px] lg:text-[62px] font-bold mt-4">Featured</h1>
            <p className="text-white text-[18px] lg:text-[22px] mt-4">Top ten products of the week</p>
            <p className="text-white text-[18px] lg:text-[22px] underline mt-4">Explore item</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group overflow-hidden">
          <img src={Rectangle24} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-center text-[22px] font-bold text-[#54FF6C] mt-6">Product</h1>
            <h2 className="text-white text-[32px] lg:text-[62px] font-bold mt-4 leading-tight text-center">
              Sale Off Baby Things
            </h2>
            <p className="text-white text-[18px] lg:text-[22px] mt-4 text-center">Top ten products of the week</p>
            <p className="text-white text-[72px] lg:text-[142px] font-bold mt-4 text-center">70%</p>
            <div className="flex justify-center items-center mt-4">
              <button className="text-white text-[18px] lg:text-[22px] font-bold underline border-2 border-white rounded-md px-6 py-2">
                Explore items
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group overflow-hidden">
          <img src={babyImage} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-[22px] font-bold text-[#54FF6C] mt-6 text-center">Product</h1>
            <h1 className="text-white text-[32px] lg:text-[62px] font-bold mt-4 text-center">Sell</h1>
            <p className="text-white text-[18px] lg:text-[22px] mt-4 text-center">Top ten products of the week</p>
            <p className="text-white text-[18px] lg:text-[22px] font-bold underline mt-4 text-center">Explore item</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
