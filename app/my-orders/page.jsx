"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function OrderPage() {
  const { orders } = useCart();

  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 bg-[#FFF9F2] min-h-screen mt-12">
      <h1 className="text-4xl font-extrabold text-[#603809] mb-10">
        Your Orders 📦
      </h1>

      {orders.length === 0 ? (
        <div className="text-center bg-white p-12 rounded-2xl shadow-md">
          <h2 className="text-xl text-gray-600">You have no orders yet.</h2>
          <Link
            href="/"
            className="mt-6 inline-block bg-linear-to-r from-[#b3762f] to-[#d6a86c] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-10">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </section>
  );
}

/* -----------------------------
    ORDER CARD COMPONENT
----------------------------- */
function OrderCard({ order }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md">
      <div className="flex justify-between flex-wrap gap-4">
        <h2 className="text-2xl font-bold text-[#603809]">Order #{order.id}</h2>
        <p className="text-gray-600">{new Date(order.date).toLocaleString()}</p>
      </div>

      {/* Customer Info */}
      <div className="mt-4 bg-gray-50 p-4 rounded-xl">
        <h3 className="font-semibold text-[#603809] mb-2">Customer Info</h3>
        <p>
          <span className="font-medium">Name:</span> {order.customer.fullName}
        </p>
        <p>
          <span className="font-medium">Email:</span> {order.customer.email}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {order.customer.phone}
        </p>
        <p>
          <span className="font-medium">Address:</span> {order.customer.address}
          , {order.customer.city}
        </p>
      </div>

      {/* Items */}
      <h3 className="text-xl font-bold mt-6 mb-3 text-[#603809]">
        Items Ordered
      </h3>

      <div className="space-y-4">
        {order.items.map((item) => (
          <ItemRow key={item.id} item={item} />
        ))}
      </div>

      {/* Prices */}
      <div className="border-t mt-6 pt-4 space-y-2 text-[#603809]">
        <PriceRow label="Subtotal" value={order.subtotal} />
        <PriceRow label="Delivery Fee" value={order.deliveryFee} />
        <div className="flex justify-between font-bold text-xl mt-2">
          <span>Total</span>
          <span>${order.total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

/* -----------------------------
    ITEM ROW COMPONENT
----------------------------- */
function ItemRow({ item }) {
  return (
    <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl">
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

/* -----------------------------
    PRICE ROW COMPONENT
----------------------------- */
function PriceRow({ label, value }) {
  return (
    <div className="flex justify-between text-gray-700">
      <span>{label}</span>
      <span className="font-semibold">${value.toFixed(2)}</span>
    </div>
  );
}
