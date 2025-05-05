import React from "react";
import { useNavigate } from "react-router";
import Header from "../../commoncomponents/header/Header";
import Footer from "../../commoncomponents/footer/Footer";
import Todaydeals from "../../commoncomponents/todaydeals/Todaydeals";
import { Delete, Truck } from "../../assets/images";
import { useCart } from "../../context/Cartcontext";

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

  return (
    <>
      <Header />
      <div className="bg-[#F3F3F3] min-h-screen p-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="col-span-2 px-4 gap-4 bg-[#F1F2F3]">
            <div className="flex flex-col gap-4">
              {/* Delivery Option */}
              <div className="bg-white p-4 rounded shadow">
                <h1 className="py-4 font-semibold text-lg">
                  Preferred Delivery Option
                </h1>
                <div className="flex gap-4 bg-[#F1F2F3] border w-1/3 p-4">
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

            {/* Select All & Delete */}
            <div className="mt-6 bg-white p-4 rounded shadow">
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <input type="checkbox" className="accent-blue-600" />
                  SELECT ALL ({cartItems.length} ITEM{cartItems.length !== 1 ? "S" : ""})
                </label>
                <div className="flex gap-4 items-center">
                  <img src={Delete} alt="delete" />
                  <button className="text-sm" onClick={handleDeleteAll}>DELETE</button>
                </div>
              </div>
            </div>

            {/* Cart Items List */}
            {cartItems.length === 0 ? (
              <p className="mt-6 text-center text-gray-600 text-lg">
                Your cart is empty.
              </p>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded shadow w-full mt-6"
                >
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
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          No Brand, Family Color, Best Quality
                        </p>
                        <p className="text-xs text-green-500 mt-1">30% OFF</p>
                      </div>
                    </div>

                    {/* Price & Quantity */}
                    <div className="text-right">
                      <p className="text-blue-600 font-semibold">
                        ${item.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-400 line-through">$38.00</p>
                      <div className="flex items-center gap-2 mt-2 justify-end">
                        <button
                          className="px-2 rounded bg-[#C4C4C4]"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="px-2 rounded bg-[#C4C4C4]"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Delete */}
                    <div className="flex flex-col items-center justify-center gap-2">
                      <img src={Delete} alt="delete" />
                      <button
                        className="text-sm"
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
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>
                Subtotal ({cartItems.length} item
                {cartItems.length !== 1 ? "s" : ""})
              </span>
              <span className="font-semibold">USD. {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Enter Voucher Code"
                className="flex-1 border px-3 py-1 rounded-l"
              />
              <button className="bg-blue-500 text-white px-4 rounded-r">
                APPLY
              </button>
            </div>
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="font-semibold">USD. {subtotal.toFixed(2)}</span>
            </div>
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <Todaydeals />
      <Footer />
    </>
  );
};

export default Mycart;
