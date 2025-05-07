import React from "react";
import { useNavigate } from "react-router";
import Header from "../../commoncomponents/header/Header";
import Footer from "../../commoncomponents/footer/Footer";
import Todaydeals from "../../commoncomponents/todaydeals/Todaydeals";
import { Bill, Call, Location, Mail, Truck } from "../../assets/images";
import { useCart } from "../../context/Cartcontext";
import { useMediaQuery } from "react-responsive";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });

  const handlePay = () => {
    navigate("/payments");
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryFee = 2;
  const total = subtotal + deliveryFee;

  return (
    <>
      <Header />
      <div
        className={`bg-[#F3F3F3] min-h-screen py-6 ${
          isMobile ? "px-4" : isTablet ? "px-8" : "px-12"
        }`}
      >
        <div
          className={`${
            isMobile || isTablet ? "flex flex-col" : "grid grid-cols-3 gap-6"
          }`}
        >
          <div
            className={`${
              isMobile || isTablet ? "w-full" : "col-span-2"
            } gap-4 bg-[#F1F2F3]`}
          >
            <div className="flex flex-col gap-4">
              {/* Cart Summary Header */}
              <div className="bg-white px-6 py-4 rounded shadow w-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <p className="text-xl font-medium">
                    {cartItems.length} ITEM{cartItems.length !== 1 && "S"}
                  </p>
                  <div className="flex gap-6 text-lg font-medium">
                    <p>PRICE</p>
                    <p>QUANTITY</p>
                  </div>
                </div>
              </div>

              {/* Delivery Option */}
              <div className="bg-white py-4 px-6 rounded shadow w-full mt-4">
                <h1 className="py-4 font-medium text-[22px]">
                  Preferred Delivery Option
                </h1>
                <div
                  className={`flex flex-col sm:flex-row gap-4 bg-[#F1F2F3] border border-[#AAAAAA] w-full ${
                    isDesktop ? "w-[70%]" : ""
                  } p-4 mb-6 rounded-md`}
                >
                  <label className="relative inline-block w-6 h-6">
                    <input
                      type="checkbox"
                      className="peer appearance-none w-6 h-6 rounded-full border border-gray-400 bg-white checked:bg-blue-600 checked:border-blue-600"
                      defaultChecked
                    />
                    <svg
                      className="absolute top-1 left-1 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                  <div>
                    <div className="flex items-center gap-4">
                      <p className="font-semibold text-lg text-[#282828]">
                        Delivery Fee. $2
                      </p>
                      <img
                        className="w-[40px] h-[30px]"
                        src={Truck}
                        alt="truck"
                      />
                    </div>
                    <p className="text-lg font-medium text-[#474747]">
                      HOME Delivery
                    </p>
                    <p className="text-[17px] text-[#717171] font-medium">
                      Get by 22-24 Apr 2022
                    </p>
                  </div>
                </div>

                {/* Cart Items */}
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white py-4 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between pt-4 gap-4">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded"
                        />
                        <div>
                          <p className="font-semibold text-xl">{item.name}</p>
                          <p className="text-lg text-[#5c5c5c] font-light">
                            No Brand, Family Color, Best Quality
                          </p>
                          <p className="text-lg font-semibold text-[#5c5c5c] mt-1">
                            30% OFF
                          </p>
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="text-[#0702da] font-semibold text-xl">
                          <span className="text-[#1CAA24]">$</span>{" "}
                          {item.price.toFixed(2)}
                        </p>
                        <p className="text-lg font-semibold text-[#A4A4A4] line-through">
                          $ {item.oldPrice.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p>Qty: {item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="bg-white p-4 rounded shadow h-fit w-full">
            <h2 className="text-[24px] sm:text-[28px] font-semibold mb-6">
              Shipping & Billing
            </h2>

            {/* Address Sections */}
            {[
              {
                icon: Location,
                label: "Home Address",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
              },
              { icon: Bill, label: "Bill To The Same Address" },
              { icon: Call, label: "(888) 355-4336" },
              { icon: Mail, label: "support@elliebathbedandbaby.Com" },
            ].map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start gap-4 mt-2">
                  <p className="flex items-start gap-2 text-lg sm:text-xl font-normal break-all w-full">
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="shrink-0 mt-1"
                    />
                    {item.content || item.label}
                  </p>
                  <button className="shrink-0 underline text-[#0702FF] text-lg font-normal">
                    Edit
                  </button>
                </div>
              </div>
            ))}

            {/* Order Summary */}
            <h2 className="text-[24px] sm:text-[28px] font-semibold mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between mb-2 font-normal text-[20px] sm:text-[22px]">
              <span>
                Subtotal ({cartItems.length} item{cartItems.length !== 1 && "s"}
                )
              </span>
              <span>USD. {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2 font-normal text-[20px] sm:text-[22px]">
              <span>Shipping Fee</span>
              <span>USD. {deliveryFee.toFixed(2)}</span>
            </div>

            <div className="flex flex-col sm:flex-row mb-4 gap-2 w-full">
              <input
                type="text"
                placeholder="Enter Voucher Code"
                className="flex-1 min-w-0 px-3 py-2 outline-0 bg-[#F1F2F3] text-lg font-normal"
              />
              <button className="w-full sm:w-auto bg-[#197CC0] text-white px-4 py-2 text-lg font-medium">
                APPLY
              </button>
            </div>

            <div className="flex justify-between mb-4 text-[20px] sm:text-[22px] font-normal">
              <span>Total</span>
              <span>USD. {total.toFixed(2)}</span>
            </div>

            <button
              className="w-full bg-[#54ff6c] text-xl sm:text-2xl font-semibold text-white py-2 rounded"
              onClick={handlePay}
            >
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
