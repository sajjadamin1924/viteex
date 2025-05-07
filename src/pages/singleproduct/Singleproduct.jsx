import React, { useState } from "react";
import Header from "../../commoncomponents/header/Header";
import Footer from "../../commoncomponents/footer/Footer";
import { Heart, Rectangle56, Single } from "../../assets/images";
import { useCart } from "../../context/Cartcontext";
import { useNavigate } from "react-router";
import Todaydeals from "../../commoncomponents/todaydeals/Todaydeals";
import { useMediaQuery } from "react-responsive";

const Singleproduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, cartItems } = useCart();
  const Navigate = useNavigate();

  const product = {
    id: 1,
    name: "BODY SCRUB BEST QUALITY PACK",
    price: 28.0,
    image: Rectangle56,
    oldPrice: 28.0,
  };

  const handleQuantityChange = (increment) => {
    setQuantity((prev) => Math.max(1, prev + increment));
  };
  const handleMyCart = () => {
    Navigate("/mycart");
  };

  // Media queries
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 769px) and (max-width: 1024px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });

  return (
    <>
      <Header />
      <div className="p-10 bg-gray-50 min-h-screen">
        {/* Product Section */}
        <div className={`flex flex-col ${isDesktop ? 'lg:flex-row' : 'flex-col'} gap-10`}>
          {/* Left: Images */}
          <div className={`flex ${isMobile ? 'flex-col items-center' : 'flex-col items-start'} flex-1 max-w-xl`}>
            <img
              src={Rectangle56}
              alt="Body Scrub"
              className="w-full h-96 object-cover rounded-xl"
            />
            <div className="flex mt-4 gap-2">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={Rectangle56}
                  alt="Thumbnail"
                  className="w-28 h-28 object-cover rounded-md border border-gray-200"
                />
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className={`flex-1 max-w-xl ${isMobile ? 'text-center' : 'text-left'}`}>
            <h2 className="text-[35px] font-semibold text-[#343434] mb-2">
              BODY SCRUB BEST QUALITY PACK
            </h2>

            <p className="font-semibold text-[28px] mt-4">{product.name}</p>
            <div className="text-xl flex items-center gap-4 justify-center">
              <span className="text-[#0c2dfe] font-semibold text-[35px]">
                <span className="text-[#1caa24]">$</span>
                {product.price.toFixed(2)}
              </span>
              <span className="line-through text-[#CFCFCF] text-[25px] font-medium">
                ${product.oldPrice.toFixed(2)}
              </span>
            </div>
            <div className="space-x-6 flex justify-center text-[#444444]">
              <button className="flex items-center text-2xl font-normal mb-4">
                <img
                  src={Heart}
                  className="w-6 h-6 mr-2 text-[#444444]"
                  alt="heart"
                />
                Add to Favorites
              </button>

              <button className="flex items-center mb-4 text-2xl font-normal">
                <img
                  src={Single}
                  className="w-6 h-6 mr-2 text-[#444444]"
                  alt="heart"
                />
                Add to Favorites
              </button>
            </div>

            {/* Colors */}
            <div className="mb-4 flex items-center gap-4 justify-center">
              <span className="block font-bold text-2xl mb-1">Color:</span>
              <div className="flex gap-2">
                {[
                  "bg-[#C1A6B9]",
                  "bg-[#5A4F4F]",
                  "bg-[#9497C6]",
                  "bg-[#193950]",
                  "bg-[#257B31]",
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 ${color} cursor-pointer`}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-4 flex items-center gap-4 justify-center">
              <span className="block font-bold text-2xl mb-1">Size:</span>
              <div className="flex gap-4 text-[28px] font-normal">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="px-3 py-1 rounded hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-4 flex items-center gap-4 justify-center">
              <span className="block font-bold text-2xl mb-1">Qty:</span>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-1 text-2xl font-normal"
                >
                  -
                </button>
                <span className="min-w-[24px] text-center bg-[#F3F3F3] text-[28px] font-normal">
                  {quantity.toString().padStart(2, "0")}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-1 text-2xl font-normal"
                >
                  +
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <span className="inline-block bg-[#54FF6C] text-[#292929] px-4 py-2 text-xl font-bold mb-2">
                Description
              </span>
              <p className="text-[#444444] text-2xl font-normal w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <button
                className="bg-[#54FF6C] text-white px-8 py-4 rounded-full font-bold text-[22px]"
                onClick={() => {
                  addToCart(product, quantity);
                  handleMyCart();
                }}
              >
                ADD TO CART
              </button>

              <button className="border border-[#343434] text-[#0702FF] px-8 py-4 rounded-full font-bold text-[22px]">
                BUY IT NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <Todaydeals />
      <Footer />
    </>
  );
};

export default Singleproduct;
