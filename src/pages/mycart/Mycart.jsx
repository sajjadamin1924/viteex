import React from "react";
import { useNavigate } from "react-router";
import Header from "../../commoncomponents/header/Header";
import Footer from "../../commoncomponents/footer/Footer";
import Todaydeals from "../../commoncomponents/todaydeals/Todaydeals";
import { Delete, Minus, Plus, Truck } from "../../assets/images";
import { useCart } from "../../context/Cartcontext";
import { FaMinus } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const Mycart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleCheckout = () => navigate("/checkout");

  const handleDeleteAll = () => {
    cartItems.forEach(item => removeFromCart(item.id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      <Header />
      <div className="bg-[#F3F3F3] min-h-screen p-6">
        <div className={`grid gap-6 ${isDesktop ? "grid-cols-3" : "grid-cols-1"}`}>
          {/* Cart Items Section */}
          <div className={`${isDesktop ? "col-span-2" : ""} px-4 gap-4 bg-[#F1F2F3]`}>
            <div className="flex flex-col gap-4">
              {/* Delivery Option */}
              <div className="bg-white p-4 rounded shadow">
                <h1 className="py-4 font-medium text-[22px]">Preferred Delivery Option</h1>
                <div className="flex gap-4 bg-[#F1F2F3] border p-4">
                  <label className="relative inline-block w-6 h-6">
                    <input
                      type="checkbox"
                      className="peer appearance-none w-8 h-8 rounded-full border border-gray-400 bg-white checked:bg-blue-600 checked:border-blue-600"
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
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <p className="font-semibold text-lg">Delivery Fee. $2</p>
                      <img src={Truck} alt="truck" className="w-8 h-8" />
                    </div>
                    <p className="text-lg font-medium text-[#474747]">Standard</p>
                    <p className="text-[17px] font-medium text-[#717171]">Get by 22-24 Apr 2022</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Select All & Delete */}
            <div className="mt-6 bg-white p-4 rounded shadow">
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center gap-2 text-lg font-medium text-[#444444]">
                  <input type="checkbox" className="accent-blue-600" />
                  SELECT ALL ({cartItems.length} ITEM{cartItems.length !== 1 ? "S" : ""})
                </label>
                <div className="flex gap-2 items-center">
                  <img src={Delete} alt="delete" />
                  <button className="text-lg font-medium text-[#292929]" onClick={handleDeleteAll}>
                    DELETE
                  </button>
                </div>
              </div>
            </div>

            {/* Cart Items List */}
            {cartItems.length === 0 ? (
              <p className="mt-6 text-center text-gray-600 text-lg">Your cart is empty.</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded shadow w-full mt-6">
                  <div className="flex justify-between pt-4">
                    {/* Item Info */}
                    <div className="flex gap-4">
                      <input type="checkbox" />
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded"
                      />
                      <div>
                        <p className="font-semibold text-xl">{item.name}</p>
                        <p className="text-lg font-light text-[#5C5C5C]">No Brand, Family Color, Best Quality</p>
                        <p className="text-lg font-semibold text-[#5C5C5C] mt-1">30% OFF</p>
                      </div>
                    </div>

                    {/* Price & Quantity */}
                    <div className="text-left">
                      <p className="text-[#0702FF] font-semibold text-xl">
                        <span className="text-[#1CAA24]">$</span> {''}{item.price.toFixed(2)}
                      </p>
                      <p className="text-lg font-semibold line-through text-[#A4A4A4]">${' '}38.00</p>
                      <div className="flex items-center gap-2 mt-2 justify-end">
                        <button
                          className=" bg-[#C4C4C4] text-2xl font-semibold"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <FaMinus className="text-2xl font-semibold bg-[#C4C4C4] w-8 h-8 p-2" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className=" bg-[#C4C4C4] text-2xl font-semibold"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <img className="w-8 h-8 p-2" src={Plus} alt="img" />
                        </button>
                      </div>
                    </div>

                    {/* Delete */}
                    <div className="flex items-center justify-center gap-2">
                      <img src={Delete} alt="delete" />
                      <button
                        className="text-lg font-medium text-[#292929]"
                        onClick={() => removeFromCart(item.id)}
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white p-4 rounded shadow h-fit">
            <h2 className="text-[28px] font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2 text-xl font-normal">
              <span>
                Subtotal ({cartItems.length} item
                {cartItems.length !== 1 ? "s" : ""})
              </span>
              <span>USD. {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex mb-4 gap-4">
              <input
                type="text"
                placeholder="Enter Voucher Code"
                className="flex-1 bg-[#F3F3F3] px-3 py-1 text-[18px] font-normal outline-0"
              />
              <button className="bg-[#197CC0] text-white px-4 text-[18px] font-medium">
                APPLY
              </button>
            </div>
            <div className="flex justify-between mb-4 font-normal text-[28px]">
              <span>Total</span>
              <span>USD. {subtotal.toFixed(2)}</span>
            </div>
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white text-[25px] font-semibold py-2 rounded"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      {!isMobile && <Todaydeals />}
      <Footer />
    </>
  );
};

export default Mycart;
