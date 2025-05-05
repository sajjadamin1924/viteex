import React from "react";
import { useNavigate } from "react-router";
import Header from "../../commoncomponents/header/Header";
import Footer from "../../commoncomponents/footer/Footer";
import Todaydeals from "../../commoncomponents/todaydeals/Todaydeals";
import { Bill, Call, Location, Mail, Truck } from "../../assets/images";
import { useCart } from "../../context/Cartcontext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

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
      <div className="bg-[#F3F3F3] min-h-screen py-6 px-12">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 gap-4 bg-[#F1F2F3]">
            <div className="flex flex-col gap-4">
              {/* Header for cart summary */}
              <div className="bg-white px-12 py-4 rounded shadow w-full">
                <div className="flex items-center justify-between">
                  <p>{cartItems.length} ITEM{cartItems.length !== 1 && "S"}</p>
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                </div>
              </div>

              {/* Cart Items */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white py-4 px-12 rounded shadow w-full"
                >
                  <div className="flex items-start justify-between pt-4">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded"
                      />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          No Brand, Family Color, Best Quality
                        </p>
                        <p className="text-xs text-green-500 mt-1">30% OFF</p>
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="text-blue-600 font-semibold">
                        ${item.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-400 line-through">
                        $38.00
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p>Qty: {item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Delivery Option */}
              <div className="bg-white py-4 px-12 rounded shadow w-full mt-4">
                <h1 className="py-4 font-semibold text-lg">
                  Preferred Delivery Option
                </h1>
                <div className="flex gap-4 bg-[#F1F2F3] border w-1/3 p-4 mb-6">
                  <label className="relative inline-block w-6 h-6">
                    <input
                      type="checkbox"
                      className="peer appearance-none w-8 h-8 rounded-full border border-gray-400 bg-white checked:bg-blue-600 checked:border-blue-600"
                      defaultChecked
                    />
                    <svg
                      className="absolute top-1 left-1 w-6 h-6 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
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
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">Delivery Fee. $2</p>
                      <img src={Truck} alt="truck" />
                    </div>
                    <p className="text-sm text-gray-500">Standard</p>
                    <p className="text-xs text-gray-400">Get by 22-24 Apr 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="bg-white p-4 rounded shadow h-fit">
            <h2 className="text-lg font-semibold mb-4">Shipping & Billing</h2>

            <div className="mb-4">
              <h1 className="flex items-center gap-2 text-xl font-semibold">
                <img src={Location} alt="Location" />
                Home Address
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <p className="flex-1 text-sm pl-[32px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <button className="underline text-[#0702FF]">Edit</button>
              </div>
            </div>

            <div className="mb-4 flex items-center gap-4 mt-2">
              <p className="flex-1 flex items-center gap-2 text-sm">
                <img src={Bill} alt="Bill" />
                Bill To The Same Address
              </p>
              <button className="underline text-[#0702FF]">Edit</button>
            </div>

            <div className="mb-4 flex items-center gap-4 mt-2">
              <p className="flex-1 flex items-center gap-2 text-sm">
                <img src={Call} alt="Call" />
                (888) 355-4336
              </p>
              <button className="underline text-[#0702FF]">Edit</button>
            </div>

            <div className="mb-4 flex items-center gap-4 mt-2">
              <p className="flex-1 flex items-center gap-2 text-sm">
                <img src={Mail} alt="Mail" />
                support@elliebathbedandbaby.com
              </p>
              <button className="underline text-[#0702FF]">Edit</button>
            </div>

            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal ({cartItems.length} item{cartItems.length !== 1 && "s"})</span>
              <span className="font-semibold">USD. {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping Fee</span>
              <span className="font-semibold">USD. {deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex mb-4 space-x-4">
              <input
                type="text"
                placeholder="Enter Voucher Code"
                className="flex-1 px-3 py-1 rounded-l outline-0 bg-[#F1F2F3]"
              />
              <button className="bg-blue-500 text-white px-4 rounded-r">
                APPLY
              </button>
            </div>
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="font-semibold">USD. {total.toFixed(2)}</span>
            </div>
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
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
