import React, { useState } from "react";
import Header from "../../commoncomponents/header/Header";
import Footer from "../../commoncomponents/footer/Footer";
import {
  Bank,
  Card,
  Cash,
  Dots,
  Paypal,
  Star,
  Union,
  Visa,
  Wallet,
} from "../../assets/images";
import { useCart } from "../../context/Cartcontext";
import { useNavigate } from "react-router-dom";

const Payments = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const [selectedMethod, setSelectedMethod] = useState("Card");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    navigate("/checkout");
  };

  const paymentOptions = [
    { name: "Elle Wallet", icon: Wallet },
    { name: "Card", icon: Card },
    { name: "Bank", icon: Bank },
    { name: "Paypal", icon: Paypal },
    { name: "Cash on Delivery", icon: Cash },
  ];

  return (
    <>
      <Header />
      <div className="bg-[#F3F3F3] py-6 px-4 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Payment Section */}
        <div className="col-span-2 bg-[#F3F3F3] p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            Select Payment Method
          </h2>

          {/* Payment Methods */}
          <div className="mb-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {paymentOptions.map((option) => (
                <div
                  key={option.name}
                  onClick={() => setSelectedMethod(option.name)}
                  className={`flex flex-col items-center text-center px-4 py-6 sm:py-8 cursor-pointer rounded ${
                    selectedMethod === option.name
                      ? "bg-white shadow"
                      : "bg-[#E9E9E9]"
                  }`}
                >
                  <img
                    src={option.icon}
                    alt={option.name}
                    className="w-10 h-10 mb-2"
                  />
                  <span className="text-lg sm:text-xl font-semibold mt-2">
                    {option.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Form (for Card only) */}
          {selectedMethod === "Card" && (
            <div className="bg-white p-4 sm:p-6 rounded-md shadow-md w-full mb-6">
              <div className="flex items-center gap-4 mb-4">
                <img src={Visa} alt="Visa" className="h-6" />
                <img src={Dots} alt="..." className="h-6" />
                <img src={Union} alt="Union" className="h-6" />
              </div>

              {/* Card Number */}
              <div className="flex flex-col mb-4 w-full sm:w-3/4 lg:w-3/5 font-normal text-base sm:text-lg">
                <label htmlFor="cardNumber" className="mb-1 relative">
                  Card Number
                </label>
                <div className="absolute">
                  <img src={Star} alt="star" />
                </div>
                <input
                  id="cardNumber"
                  type="text"
                  placeholder="Card Number"
                  className="border p-3 w-full"
                />
              </div>

              {/* Card Name */}
              <div className="flex flex-col mb-4 w-full sm:w-3/4 lg:w-3/5 font-normal text-base sm:text-lg">
                <label htmlFor="cardName" className="mb-1 relative">
                  Card Name
                </label>
                <div className="absolute">
                  <img src={Star} alt="star" />
                </div>
                <input
                  id="cardName"
                  type="text"
                  placeholder="Card Name"
                  className="border p-3 w-full"
                />
              </div>

              {/* Expiry and CVV */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-3/4 lg:w-3/5 font-normal text-base sm:text-lg">
                <div className="flex flex-col">
                  <label htmlFor="expiry" className="mb-1 relative">
                    Expiration Date
                  </label>
                  <div className="absolute">
                    <img src={Star} alt="star" />
                  </div>
                  <input
                    id="expiry"
                    type="date"
                    className="border p-3 w-full"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="cvv" className="mb-1 relative">
                    CVV
                  </label>
                  <div className="absolute">
                    <img src={Star} alt="star" />
                  </div>
                  <input
                    id="cvv"
                    type="text"
                    placeholder="CVV"
                    className="border p-3 w-full"
                  />
                </div>
              </div>

              {/* Save Card Option */}
              <div className="mt-6 w-full sm:w-3/4 lg:w-1/2 px-0 sm:px-4">
                <div className="flex items-center gap-2 mb-2">
                  <input type="checkbox" className="h-5 w-5" />
                  <h3 className="font-semibold text-sm sm:text-base">SAVE CARD</h3>
                </div>
                <p className="text-sm sm:text-base font-medium text-[#8C8C8C] pl-7">
                  I acknowledge that my card information is saved in my Ellie
                  account for subsequent transactions.
                </p>

                <button
                  onClick={handlePayment}
                  className="bg-[#54FF6C] text-white font-semibold py-3 px-6 w-full mt-6 text-base sm:text-lg rounded"
                >
                  PAY NOW
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Order Summary */}
        <div className="bg-[#F3F3F3] pt-6 lg:pt-[102px]">
          <div className="bg-white p-4 sm:p-6 shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between text-base sm:text-lg font-normal mb-2">
              <span>
                Subtotal ({cartItems.length} item
                {cartItems.length !== 1 ? "s" : ""})
              </span>
              <span>USD {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-base sm:text-lg font-normal">
              <span>Total Amount</span>
              <span className="font-semibold">USD {subtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payments;
