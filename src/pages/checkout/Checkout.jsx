import React from "react";
import Header from "../../commoncomponents/header/Header";
import Footer from "../../commoncomponents/footer/Footer";
import Todaydeals from "../../commoncomponents/todaydeals/Todaydeals";
import {
  Bill,
  Call,
  Location,
  Mail,
  Rectangle56,
  Truck,
} from "../../assets/images";
import { useNavigate } from "react-router";

const Checkout = () => {
  const Navigate = useNavigate();

const handlePay = () => {
  Navigate("/payments");
}

  return (
    <>
      <Header />
      <div className="bg-[#F3F3F3] min-h-screen py-6 px-12">
        {/* Grid layout with two sections */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2  gap-4 bg-[#F1F2F3]">
            {/* Delivery and Product Section */}
            <div className="flex flex-col gap-4">
              {/* Header for cart summary */}
              <div className="bg-white px-12 py-4 rounded shadow w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 w-2/3">
                    <p>1 ITEM</p>
                  </div>
                  <div>
                    <p>PRICE</p>
                  </div>
                  <div>
                    <p>QUANTITY</p>
                  </div>
                </div>
              </div>

              <div className="bg-white py-4 px-12 rounded shadow w-full">
                {/* Delivery Option */}
                <h1 className="py-4 font-semibold text-lg">
                  Preferred Delivery Option
                </h1>
                <div className="flex items-center gap-4 bg-[#F1F2F3] border w-1/3 p-4 mb-6">
                  <input
                    type="checkbox"
                    className="accent-blue-600 w-6 h-6 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">Delivery Fee. $2</p>
                      <img src={Truck} alt="truck" />
                    </div>
                    <p className="text-sm text-gray-500">Standard</p>
                    <p className="text-xs text-gray-400">
                      Get by 22-24 Apr 2022
                    </p>
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex items-start justify-between pt-4">
                  <div className="flex gap-4">
                    <img
                      src={Rectangle56}
                      alt="Body Scrub"
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div>
                      <p className="font-semibold">
                        BODY SCRUB BEST QULITY PACK
                      </p>
                      <p className="text-sm text-gray-500">
                        No Brand, Family Color, Best Quality
                      </p>
                      <p className="text-xs text-green-500 mt-1">30% OFF</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-blue-600 font-semibold">$28.00</p>
                    <p className="text-sm text-gray-400 line-through">$38.00</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>Qty:1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="bg-white p-4 rounded shadow h-fit">
            <h2 className="text-lg font-semibold mb-4 ">shipping & billing</h2>
            <div className="mb-4">
              <h1 className="flex items-center gap-2 text-xl font-semibold">
                <span>
                  <img src={Location} alt="img" />
                </span>
                Home Address
              </h1>

              <div className="flex items-center gap-4 mt-2">
                <p className="flex-1 flex items-center gap-2 text-sm pl-[32px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid iusto velit inventore cum sequi nesciunt quibusdam repellat
                  
                </p>
                <button className="underline text-[#0702FF]">Edit</button>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-4 mt-2">
                <p className="flex-1 flex items-center gap-2 text-sm">
                  <img src={Bill} alt="bill" />
                  Bill To The Same Address
                </p>
                <button className="underline text-[#0702FF]">Edit</button>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center gap-4 mt-2">
                <p className="flex-1 flex items-center gap-2 text-sm">
                  <img src={Call} alt="call" />
                  (888) 355-4336
                </p>
                <button className="underline text-[#0702FF]">Edit</button>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center gap-4 mt-2">
                <p className="flex-1 flex items-center gap-2 text-sm">
                  <img src={Mail} alt="email" />
                  support@elliebathbedandbaby.com
                </p>
                <button className="underline text-[#0702FF]">Edit</button>
              </div>
            </div>

            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal (1 items)</span>
              <span className="font-semibold">USD.28.00</span>
            </div>
            <div className="flex justify-between mb-2 text-right">
              <span>Shopping Fee</span>
              <span className="font-semibold">USD.2.00</span>
            </div>
            <div className="flex mb-4 space-x-4">
              <input
                type="text"
                placeholder="Enter Voucher Code"
                className="flex-1  px-3 py-1 rounded-l outline-0 bg-[#F1F2F3]"
              />
              <button className="bg-blue-500 text-white px-4 rounded-r">
                APPLY
              </button>
            </div>
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="font-semibold">USD.30.00</span>
            </div>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded" onClick={handlePay}>
              Proceed to pay
            </button>
          </div>
        </div>
      </div>
      <Todaydeals />
      <Footer />
    </>
  );
};

export default Checkout;
