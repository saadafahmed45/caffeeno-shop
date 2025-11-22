"use client";

import { ToastContainer } from "react-toastify";
import { useCart } from "../context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const {
    cartItems,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    subtotal,
    deliveryFee,
    total,
  } = useCart();

  // Safeguards
  const safeSubtotal = Number(subtotal) || 0;
  const safeDelivery = Number(deliveryFee) || 0;
  const safeTotal = Number(total) || safeSubtotal + safeDelivery;

  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 bg-[#FFF9F2] min-h-screen mt-12">
      <h1 className="text-4xl font-extrabold text-[#603809] mb-10">
        Your Cart 🛒
      </h1>

      <ToastContainer position="top-right" autoClose={2000} />

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">Your cart is empty.</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition"
              >
                <div className="flex gap-5 items-center">
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={128}
                    height={128}
                    className="rounded-xl border object-cover"
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-[#603809]">
                      {item.name}
                    </h2>

                    <p className="text-gray-600 mt-1">{item.category}</p>

                    <p className="text-lg font-bold text-[#603809] mt-3">
                      ${Number(item.price).toFixed(2)}
                    </p>

                    {/* Quantity Control */}
                    <div className="flex items-center mt-4 gap-3">
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="p-2 border rounded-lg hover:bg-gray-100 transition"
                        aria-label="Decrease Quantity"
                      >
                        <Minus size={18} />
                      </button>

                      <span className="font-medium text-lg">
                        {Number(item.quantity)}
                      </span>

                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="p-2 border rounded-lg hover:bg-gray-100 transition"
                        aria-label="Increase Quantity"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:bg-red-100 p-3 rounded-full transition"
                    aria-label="Remove Item"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <aside className="bg-white rounded-2xl p-6 shadow-lg sticky top-20 h-fit">
            <h2 className="text-2xl font-bold text-[#603809] mb-5">
              Order Summary
            </h2>

            <SummaryRow label="Subtotal" value={safeSubtotal} />
            <SummaryRow label="Delivery Fee" value={safeDelivery} />

            <div className="flex justify-between border-t pt-3 text-[#603809] font-bold text-lg">
              <span>Total</span>
              <span>${safeTotal.toFixed(2)}</span>
            </div>

            <Link
              href="/cart/order-checkout"
              className="mt-6 block text-center w-full bg-linear-to-r from-[#b3762f] to-[#d6a86c] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Proceed to Checkout
            </Link>
          </aside>
        </div>
      )}
    </section>
  );
}

/* Reusable Summary Row Component */
function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between mb-3 text-gray-700">
      <span>{label}</span>
      <span className="font-semibold">${value.toFixed(2)}</span>
    </div>
  );
}
