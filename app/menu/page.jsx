"use client";

import { menuItems } from "../api/menuData";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import MenuCard from "../components/MenuCard";

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
    <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-20 bg-[#FFF9F2] mt-12">
      {/* ===== HEADING ===== */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-[#603809]"
        >
          Our Coffee & Treats
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          Discover our handcrafted beverages, freshly baked pastries, and
          desserts — made to bring warmth and joy to every moment.
        </motion.p>
      </div>

      {/* ===== CATEGORY FILTER ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 font-medium 
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

      {/* ===== MENU GRID ===== */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredMenu.map((item) => (
            <MenuCard item={item} key={item.id} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default MenuPage;
