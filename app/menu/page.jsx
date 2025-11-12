"use client";

import { menuItems } from "../api/menuData";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  const filteredMenu =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-20 bg-[#FFF9F2]">
      {/* ====== Heading ====== */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-extrabold text-[#603809]"
        >
          Our Coffee & Treats
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed"
        >
          Discover our handcrafted beverages, freshly baked pastries, and
          desserts — made to bring comfort, warmth, and joy in every bite.
        </motion.p>
      </div>

      {/* ====== Category Filter ====== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 font-medium text-sm sm:text-base 
              ${
                selectedCategory === cat
                  ? "bg-[#603809] text-white border-[#603809] shadow-md"
                  : "border-[#603809]/30 text-[#603809] hover:bg-[#603809]/10"
              }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* ====== Menu Grid ====== */}
      <motion.div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <AnimatePresence>
          {filteredMenu.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all"
            >
              {/* ====== Image ====== */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-all duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-[#603809]/90 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  {item.category}
                </span>
              </div>

              {/* ====== Content ====== */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#603809]">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3 overflow-hidden">
                  {item.desc}
                </p>

                {/* ====== Price + Rating ====== */}
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-[#a05b28] text-lg">
                    {item.price}
                  </span>
                  <span className="text-yellow-500 text-sm font-medium">
                    ⭐ {item.rating.toFixed(1)}
                  </span>
                </div>

                {/* ====== Sizes ====== */}
                {item.size && item.size.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.size.map((s, index) => (
                      <span
                        key={index}
                        className="border border-[#603809]/30 text-[#603809] text-xs px-2 py-0.5 rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default MenuPage;
