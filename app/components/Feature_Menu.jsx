"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { menuItems } from "../api/menuData";

const Feature_Menu = () => {
  // const MenusData = menuItems;

  const MenusData = menuItems.filter((item) => item.isSpecial);

  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-24 bg-[#fffefc]">
      {/* wrapper */}
      <div>
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-6xl mx-auto mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] text-[#603809] font-bold mb-6 leading-tight">
            Enjoy a New Blend of Coffee Style
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxed">
            Explore all flavours of coffee with us. There’s always a new cup
            worth experiencing.
          </p>
        </motion.div>

        {/* menu cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {MenusData.map((item) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              key={item.id}
              className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-[#f3e8d7]"
            >
              {/* TOP BADGE */}
              {item.isSpecial && (
                <span className="absolute top-4 left-4 z-20 bg-[#603809] text-white text-xs font-semibold py-1 px-3 rounded-full shadow-lg">
                  ⭐ Special
                </span>
              )}

              {/* PRODUCT IMAGE */}
              <Link
                href={`/menu/${item.id}`}
                className="relative overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full cursor-pointer h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Glass hover overlay */}
                <div className="absolute inset-0 bg-linea-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </Link>

              {/* CARD CONTENT */}
              <div className="p-6 text-center">
                {/* TITLE */}
                <h2 className="text-2xl font-bold text-[#603809] mb-2 group-hover:text-[#b3762f] transition-colors duration-300">
                  {item.name}
                </h2>

                {/* SHORT DESCRIPTION */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>

                {/* PRICE */}
                <h3 className="text-2xl font-extrabold text-[#b3762f] mb-4">
                  {item.price}
                </h3>

                {/* TAGS */}
                {item.tags && (
                  <div className="flex justify-center gap-2 flex-wrap mb-5">
                    {item.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#fff4e6] text-[#b3762f] font-medium py-1 px-3 rounded-full border border-[#e8d7c0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* BUTTON */}
                <button className="bg-linear-to-r from-[#b3762f] to-[#d6a86c] cursor-pointer hover:from-[#9c601f] hover:to-[#c99854] text-white font-semibold py-2.5 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            href={"/menu"}
            className="bg-linear-to-r from-[#b3762f] to-[#d6a86c] hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Feature_Menu;
