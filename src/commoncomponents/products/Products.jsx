import React from "react";
import { useMediaQuery } from "react-responsive";
import { Rectangle56 } from "../../assets/images";

const Products = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const products = Array(9).fill({
    img: Rectangle56,
    text: "BODY SCRUB",
    price: "28.00",
    oldPrice: "38.00",
  });

  // Responsive column layout
  const gridCols = isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-3";

  return (
    <div className="bg-[#f1f1f2] mt-24 mb-24 px-4">
      <div className="text-center justify-center mt-4">
        <h1 className={`text-center font-bold py-12 ${isMobile ? "text-3xl" : isTablet ? "text-4xl" : "text-[58px]"}`}>
          PRODUCT COLLECTIONS
        </h1>
      </div>

      <div className={`grid ${gridCols} gap-4 mt-6`}>
        {products.map((item, index) => (
          <div key={index} className="flex flex-col bg-[#F2F1F1] p-4 shadow-md rounded-md">
            <img src={item.img} className="w-full object-cover" alt="product" />
            <p className={`mt-4 font-semibold ${isMobile ? "text-xl" : "text-[28px]"}`}>{item.text}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="flex items-center">
                <span className="text-green-600 font-semibold">$</span>
                <span className="text-blue-600 font-semibold">{item.price}</span>
              </span>
              <span className="text-gray-400 line-through text-sm">${item.oldPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
