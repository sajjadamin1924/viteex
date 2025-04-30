import React, { useState } from "react";
import Header from "../../commoncomponents/header/Header";
import Footer from "../../commoncomponents/footer/Footer";
import { Rectangle56 } from "../../assets/images";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(3);

  const handleQuantityChange = (increment) => {
    setQuantity((prev) => Math.max(1, prev + increment));
  };

  return (
    <>
      <Header />
      <div className="p-10 bg-gray-50 min-h-screen">
        {/* Product Section */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Images */}
          <div className="flex flex-col items-center flex-1 max-w-xl">
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
          <div className="flex-1 max-w-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              BODY SCRUB BEST QUALITY PACK
            </h2>

            <div className="text-lg mb-4">
              <span className="text-green-600 font-bold mr-2">$28.00</span>
              <span className="line-through text-gray-400">$38.00</span>
            </div>
            <div className="space-x-4">
            <button className="text-gray-500 mb-4">♡ Add to Favorites</button>
            <button className="text-gray-500 mb-4">♡ Add to Favorites</button>
            </div>

            

            {/* Colors */}
            <div className="mb-4">
              <span className="block font-semibold mb-1">Color:</span>
              <div className="flex gap-2">
                {["bg-purple-300", "bg-purple-500", "bg-gray-400", "bg-green-800", "bg-green-500"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className={`w-6 h-6  ${color} border cursor-pointer`}
                    />
                  )
                )}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-4">
              <span className="block font-semibold mb-1">Size:</span>
              <div className="flex gap-4">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="border px-3 py-1 rounded hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-4">
              <span className="block font-semibold mb-1">Qty:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-1 border rounded"
                >
                  -
                </button>
                <span className="min-w-[24px] text-center">
                  {quantity.toString().padStart(2, "0")}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-1 border rounded"
                >
                  +
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <span className="inline-block bg-green-500 text-white px-2 py-1 rounded text-sm mb-2">
                Description
              </span>
              <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
                ADD TO CART
              </button>
              <button className="border border-blue-700 text-blue-700 px-6 py-2 rounded-full hover:bg-blue-50">
                BUY IT NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
