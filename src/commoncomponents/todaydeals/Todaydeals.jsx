import React from 'react';
import { Rectangle56 } from '../../assets/images';

const Todaydeals = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-8 md:px-12">
      {/* Heading */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
        Today's Deals
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { img: Rectangle56, text: "BODY SCRUB", price: "28.00", oldPrice: "38.00" },
          { img: Rectangle56, text: "BODY SCRUB", price: "28.00", oldPrice: "38.00" },
          { img: Rectangle56, text: "BODY SCRUB", price: "28.00", oldPrice: "38.00" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col bg-white shadow-md rounded-lg p-4">
            <img src={item.img} alt={item.text} className="w-full h-64 object-cover rounded" />
            <p className="mt-4 text-xl sm:text-2xl font-semibold">{item.text}</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-green-600 font-semibold text-lg sm:text-xl">
                ${item.price}
              </span>
              <span className="text-gray-400 line-through text-sm sm:text-base">
                ${item.oldPrice}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todaydeals;
