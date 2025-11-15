"use client";

import { ToastContainer } from "react-toastify";
import { useCart } from "../context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 bg-[#FFF9F2] min-h-screen mt-12">
      <h1 className="text-4xl font-extrabold text-[#603809] mb-10">
        Your Cart 🛒
      </h1>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">Your cart is empty.</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT: Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition"
              >
                <div className="flex gap-5 items-center">
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-xl border"
                  />

                  {/* Details */}
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-[#603809]">
                      {item.name}
                    </h2>
                    <p className="text-gray-600 mt-1">{item.category}</p>

                    <p className="text-lg font-bold text-[#603809] mt-3">
                      ${item.price}
                    </p>

                    {/* Quantity Controller */}
                    <div className="flex items-center mt-4 gap-3">
                      <button className="p-2 border rounded-lg hover:bg-gray-100">
                        <Minus size={18} />
                      </button>

                      <span className="font-medium text-lg">1</span>

                      <button className="p-2 border rounded-lg hover:bg-gray-100">
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:bg-red-100 p-3 rounded-full transition"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Order Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-20 h-fit">
            <h2 className="text-2xl font-bold text-[#603809] mb-5">
              Order Summary
            </h2>

            <div className="flex justify-between mb-3 text-gray-700">
              <span>Subtotal</span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-3 text-gray-700">
              <span>Delivery Fee</span>
              <span className="font-semibold">$2.50</span>
            </div>

            <div className="flex justify-between border-t pt-3 text-[#603809] font-bold text-lg">
              <span>Total</span>
              <span>${(totalPrice + 2.5).toFixed(2)}</span>
            </div>

            {/* Coupon */}
            <div className="mt-6">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="w-full border rounded-xl p-3 focus:outline-none"
              />
              <button className="mt-3 w-full bg-[#603809] text-white py-3 rounded-xl font-semibold hover:bg-[#4a2c07] transition">
                Apply Coupon
              </button>
            </div>

            {/* Checkout Button */}
            <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
