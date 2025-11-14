"use client";

import { menuItems } from "@/app/api/menuData";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import MenuCard from "@/app/components/MenuCard";

const Menu_details = ({ params }) => {
  const { id } = React.use(params);
  const item = menuItems.find((m) => m.id === parseInt(id));

  if (!item) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl">
        Item not found
      </div>
    );
  }

  // Related Items (same category)
  const related = menuItems
    .filter((m) => m.category === item.category && m.id !== item.id)
    .slice(0, 4);

  return (
    <div className="bg-[#FFF9F2] min-h-screen">
      {/* ========= HEADER IMAGE ========= */}
      <div className="relative w-full h-[340px] md:h-[450px] overflow-hidden">
        <img
          src={item.image}
          className="w-full h-full object-cover"
          alt={item.name}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute bottom-10 left-10 text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl"
        >
          {item.name}
        </motion.h1>
      </div>

      {/* ========= DETAILS AREA ========= */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-28 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LEFT IMAGE (small) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={item.image}
              className="w-full h-72 md:h-96 object-cover"
              alt={item.name}
            />
          </motion.div>

          {/* RIGHT DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-[#603809]">{item.name}</h2>

            <p className="mt-2 text-lg text-gray-700">{item.category}</p>

            <p className="text-3xl font-semibold text-orange-700 mt-3">
              {item.price}
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              {item.desc}
            </p>

            {/* Rating */}
            <p className="mt-4 text-yellow-600 text-xl font-semibold">
              ⭐ {item.rating} / 5
            </p>

            {/* Sizes */}
            {item.size && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#603809] mb-2">
                  Available Sizes
                </h3>

                <div className="flex flex-wrap gap-3">
                  {item.size.map((s, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 border border-[#603809]/40 rounded-full text-sm text-[#603809] bg-white shadow-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <button className="mt-8 bg-orange-700 hover:bg-orange-800 text-white font-semibold px-10 py-3 rounded-xl shadow-lg transition-all">
              Add to Cart
            </button>
          </motion.div>
        </div>
      </section>

      {/* ========= RELATED ITEMS ========= */}
      {related.length > 0 && (
        <section className="px-6 sm:px-10 md:px-16 lg:px-28 pb-20">
          <h3 className="text-3xl font-bold text-[#603809] mb-8">
            You may also like
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {related.map((item) => (
              <MenuCard item={item} key={item.id} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Menu_details;
