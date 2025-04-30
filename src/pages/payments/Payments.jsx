import React from "react";
import Header from "../../commoncomponents/header/Header";
import Footer from "../../commoncomponents/footer/Footer";
import {
  Bank,
  Card,
  Cash,
  Dots,
  Paypal,
  Union,
  Visa,
  Wallet,
} from "../../assets/images";

const Payments = () => {
  return (
    <>
      <Header />
      <div className="bg-[#F3F3F3] py-10 px-12 grid grid-cols-3 gap-6">
        {/* Left Side: Payment Section */}
        <div className="col-span-2 bg-[#F3F3F3] p-8">
          <h2 className="text-xl font-semibold mb-6">Select Payment Method</h2>

          {/* Payment Methods */}
          <div className="mb-6">
            <div className="grid grid-cols-5 gap-4">
              <div className="flex flex-col items-center text-center bg-[#E9E9E9] px-6 py-10">
                <img src={Wallet} alt="Wallet" className="w-10 h-10 mb-2" />
                <span className="text-sm font-medium">Elle Wallet</span>
              </div>
              <div className="flex flex-col items-center text-center bg-white px-6 py-10">
                <img src={Card} alt="Card" className="w-10 h-10 mb-2" />
                <span className="text-sm font-medium">Debit/Credit Card</span>
              </div>
              <div className="flex flex-col items-center text-center bg-[#E9E9E9] px-6 py-10">
                <img src={Bank} alt="Bank" className="w-10 h-10 mb-2" />
                <span className="text-sm font-medium">Bank Account</span>
              </div>
              <div className="flex flex-col items-center text-center bg-[#E9E9E9] px-6 py-10">
                <img src={Paypal} alt="Paypal" className="w-10 h-10 mb-2" />
                <span className="text-sm font-medium">Paypal</span>
              </div>
              <div className="flex flex-col items-center text-center bg-[#E9E9E9] px-6 py-10">
                <img src={Cash} alt="Cash" className="w-10 h-10 mb-2" />
                <span className="text-sm font-medium">Cash on Delivery</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white p-6 rounded-md shadow-md w-full mb-6">
            <div className="flex items-center gap-4 mb-4">
              <img src={Visa} alt="Visa" className="h-6" />
              <img src={Dots} alt="..." className="h-6" />
              <img src={Union} alt="Union" className="h-6" />
            </div>
            <div className="flex flex-col mb-4 w-1/2">
              <label htmlFor="cardNumber" className="mb-1 text-sm font-medium">
                Card Number
              </label>
              <input
                id="cardNumber"
                type="text"
                placeholder="Card Number"
                className="border p-3 w-full"
              />
            </div>

            <div className="flex flex-col mb-4 w-1/2">
              <label htmlFor="cardName" className="mb-1 text-sm font-medium">
                Card Name
              </label>
              <input
                id="cardName"
                type="text"
                placeholder="Card Name"
                className="border p-3 w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 w-1/2">
              <div className="flex flex-col">
                <label htmlFor="expiry" className="mb-1 text-sm font-medium">
                  Expiration Date
                </label>
                <input id="expiry" type="date" className="border p-3 w-full" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="cvv" className="mb-1 text-sm font-medium">
                  CVV
                </label>
                <input
                  id="cvv"
                  type="text"
                  placeholder="CVV"
                  className="border p-3 w-full"
                />
              </div>
            </div>

            <div className="mt-6 w-1/2 px-6">
              <div className="flex text-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <h3 className="font-semibold text-sm ">SAVE CARD</h3>
              </div>
              <p className="text-xs text-gray-600 pl-[23px]">
                I acknowledge that my card information is saved in my Ellie
                account for subsequent transactions.
              </p>
              <button className="mt-6 bg-[#54FF6C] text-white font-semibold py-3 px-6 w-full hover:bg-green-500 transition-all duration-200">
              PAY NOW
            </button>
            </div>

            {/* Pay Button */}
            
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="bg-[#F3F3F3]">
          <div className="bg-white p-8 shadow-md">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="flex justify-between text-sm mb-4">
              <span>Subtotal (1 item)</span>
              <span className="font-semibold">USD 28.00</span>
            </div>
            <div className="flex justify-between text-base">
              <span>Total Amount</span>
              <span className="font-semibold">USD 28.00</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Payments;
