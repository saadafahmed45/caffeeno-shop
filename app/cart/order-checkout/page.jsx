"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

export default function CheckoutOrderPage() {
  const { cartItems, subtotal, deliveryFee, total, placeOrder } = useCart();

  const safeSubtotal = Number(subtotal) || 0;
  const safeDelivery = Number(deliveryFee) || 0;
  const safeTotal = Number(total) || safeSubtotal + safeDelivery;

  // Form state
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitOrder = () => {
    if (!form.fullName || !form.email || !form.address) {
      alert("Please fill all required fields!");
      return;
    }

    placeOrder(form); // send form details to context
  };

  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 bg-[#FFF9F2] min-h-screen mt-12">
      <h1 className="text-4xl font-extrabold text-[#603809] mb-10">
        Checkout 🧾
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* LEFT — FORMS */}
        <div className="lg:col-span-2 space-y-10">
          {/* Shipping Info */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-[#603809] mb-6">
              Shipping Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="input"
                value={form.fullName}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input"
                value={form.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="input"
                value={form.city}
                onChange={handleChange}
              />
            </div>

            <input
              type="text"
              name="address"
              placeholder="Full Address"
              className="input mt-5"
              value={form.address}
              onChange={handleChange}
            />
          </div>

          {/* Payment Section */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-[#603809] mb-6">
              Payment Details
            </h2>

            <div className="space-y-5">
              <input
                type="text"
                name="cardName"
                placeholder="Card Holder Name"
                className="input"
                value={form.cardName}
                onChange={handleChange}
              />

              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                className="input"
                value={form.cardNumber}
                onChange={handleChange}
              />

              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  className="input"
                  value={form.expiry}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  className="input"
                  value={form.cvv}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — ORDER SUMMARY */}
        <aside className="bg-white p-8 rounded-2xl shadow-lg h-fit sticky top-24">
          <h2 className="text-2xl font-bold text-[#603809] mb-6">
            Order Summary
          </h2>

          {/* ORDER LIST */}
          <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {cartItems.map((item) => (
              <ItemRow key={item.id} item={item} />
            ))}
          </div>

          {/* Pricing */}
          <div className="space-y-4 mt-6">
            <SummaryRow label="Subtotal" value={safeSubtotal} />
            <SummaryRow label="Delivery Fee" value={safeDelivery} />
          </div>

          <div className="flex justify-between pt-4 mt-4 border-t font-bold text-[#603809] text-xl">
            <span>Total</span>
            <span>${safeTotal.toFixed(2)}</span>
          </div>

          <button
            onClick={submitOrder}
            className="mt-6 w-full bg-linear-to-r from-[#b3762f] to-[#d6a86c]
                       text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Place Order
          </button>
        </aside>
      </div>
    </section>
  );
}

/* Item Row Component */
function ItemRow({ item }) {
  return (
    <div className="flex items-center gap-4 pb-3 border-b last:border-none">
      <Image
        src={item.image}
        alt={item.name}
        width={60}
        height={60}
        className="rounded-xl object-cover border"
      />

      <div className="flex-1">
        <p className="font-semibold text-[#603809]">{item.name}</p>
        <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
      </div>

      <p className="font-semibold text-[#603809]">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
    </div>
  );
}

/* Summary Row Component */
function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between text-gray-700">
      <span>{label}</span>
      <span className="font-semibold">${value.toFixed(2)}</span>
    </div>
  );
}
