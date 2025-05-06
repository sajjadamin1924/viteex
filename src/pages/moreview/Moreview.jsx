import React from "react";
import Header from "../../commoncomponents/header/Header";
import Footer from "../../commoncomponents/footer/Footer";
import { Rectangle56 } from "../../assets/images";
import { GoTriangleDown } from "react-icons/go";

const Moreview = () => {
  const products = Array(18).fill({
    name: "BODY SCRUB",
    price: 28.0,
    oldPrice: 38.0,
    image: Rectangle56,
  });
  return (
    <>
      <Header />

       <div className="w-full px-12 py-6">
              <div className="flex w-full flex-row">
                {/* Sidebar - 1/3 */}
                <div className="w-1/3 px-12">
                  {/* Categories and Filters */}
                  <div className="space-y-6">
                    {/* Categories */}
                    <div className="border">
                      <h2 className="font-semibold text-[32px] mb-2 bg-[#F1F2F3] px-4">
                        Categories
                      </h2>
      
                      <ul className="space-y-6 text-black text-2xl font-normal px-4 underline mt-4 mb-6">
                        <li className="flex items-center justify-between  cursor-pointer">
                          <span>Sales & Discounts</span>
                          <GoTriangleDown className="text-[#444444]" />
                        </li>
                        <li className="flex items-center justify-between  cursor-pointer">
                          <span>Bath & Body</span>
                          <GoTriangleDown className="text-[#444444]" />
                        </li>
                        <li className="flex items-center justify-between  cursor-pointer">
                          <span>Diapers</span>
                          <GoTriangleDown className="text-[#444444]" />
                        </li>
                        <li className="flex items-center justify-between  cursor-pointer">
                          <span>Wipes</span>
                          <GoTriangleDown className="text-[#444444]" />
                        </li>
                        <li className="flex items-center justify-between  cursor-pointer">
                          <span>Gifts</span>
                          <GoTriangleDown className="text-[#444444]" />
                        </li>
                        <li className="flex items-center justify-between  cursor-pointer ">
                          <span>More</span>
                          <GoTriangleDown className="text-[#444444]" />
                        </li>
                      </ul>
                    </div>
      
                    <div className="border">
                      <h2 className="font-semibold text-[32px] mb-2 bg-[#F1F2F3] px-4 ">
                        Filter
                      </h2>
      
                      <div className="mt-6 px-4">
                        <label className="block mb-1 text-2xl font-semibold underline">
                          Price
                        </label>
      
                        {/* Buttons Row */}
                        <div className="flex gap-4 px-8 mt-4 items-center justify-center">
                          <button className="bg-[#F1F2F3] text-[#8A8A8A] text-xl font-normal px-8 py-2 rounded">
                            Min
                          </button>
                          <button className="bg-[#F1F2F3] text-[#8A8A8A] text-xl font-normal px-8 py-2 ">Max</button>
                        </div>
      
                        {/* Range Input */}
                        <input
                          type="range"
                          min="0"
                          max="50000"
                          className="w-full mt-8"
                        />
                      </div>
      
                      <div className="mb-4 mt-6 px-4">
                        <label className="block font-semibold text-2xl underline mb-4">
                          Availability
                        </label>
                        <div className="space-y-2 mt-1">
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              className="w-5 h-5 bg-[#F1F2F3] appearance-none  checked:bg-blue-500"
                            />
      
                            <span className="text-xl font-normal text-[#343434]">In Stock (18)</span>
                          </label>
      
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              className="w-5 h-5 bg-[#F1F2F3] appearance-none checked:bg-blue-500"
                            />
      
                            <span className="text-xl font-normal text-[#343434]">Out of Stock (15)</span>
                          </label>
                        </div>
                      </div>
      
                      <div className="mb-4 px-4">
                        <label className="block font-semibold text-2xl underline mb-4">Color</label>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {[
                            "bg-[#1E171C]",
                            "bg-[#571111]",
                            "bg-[#805AEB]",
                            "bg-[#89BFE5]",
                            "bg-[#62F1F7]",
                            "bg-[#9419BF]",
                            "bg-[#FF0000]",
                            "bg-[#BF1A8C]",
                            "bg-[#FF8E8E]",
                            "bg-[#8082A5]",
                            "bg-[#197ABF]",
                            "bg-[#55CC66]",
                            "bg-[#197ABF]",
                            "bg-[#55CC66]",
                          ].map((color, index) => (
                            <div key={index} className={`${color} w-5 h-5 border`} />
                          ))}
                        </div>
                      </div>
      
                      <div className="px-4 mb-4">
                        <label className="block font-semibold text-2xl underline">Color</label>
                        <div className="flex gap-3 mt-1 mb-4 text-[30px] font-normal text-[#000000]">
                          {["S", "M", "L", "XL"].map((size) => (
                            <span key={size} className=" px-2 py-1 text-sm">
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="w-2/3">
                  <div className="flex justify-between mb-4">
                    <span className="text-xl font-[500px]">Showing <span className="font-[600px]">12 of 12</span> products</span>
                    <div className="flex items-center gap-2">
                    <span className="text-[25px] font-semibold">Sort By:</span>
                    <select className="outline-0 p-2 text-xl font-normal bg-[#eeeeee] text-[#8A8A8A]">
                      <option>Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                    </select>
                    </div>
                  </div>
      
                  <div className="grid grid-cols-3 gap-4">
                    {products.map((product, index) => (
                      <div key={index}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-72"
                        />
                        <p className="font-semibold text-[28px] mt-4">{product.name}</p>
                        <div className="text-xl flex items-center gap-4">
                          <span className="text-[#0c2dfe] font-medium">
                            <span className="text-[#1caa24]">$</span>{product.price.toFixed(2)}
                          </span>
                          <span className="line-through text-[#CFCFCF] text-[18px] font-medium">
                            ${product.oldPrice.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            

      <Footer />
    </>
  );
};

export default Moreview;
