"use client";

import { menuItems } from "../api/menuData";
import React, { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredMenu, setFilteredMenu] = useState(menuItems);
  const [loading, setLoading] = useState(false);

  // Get unique categories
  const categories = [
    "All",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  useEffect(() => {
    setLoading(true);

    // Simulate loading effect
    const timer = setTimeout(() => {
      setFilteredMenu(
        selectedCategory === "All"
          ? menuItems
          : menuItems.filter((item) => item.category === selectedCategory)
      );

      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-20 bg-[#FFF9F2] mt-12">
      {/* ===== HEADING ===== */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#603809]">
          Our Coffee & Treats
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover our handcrafted beverages, freshly baked pastries, and
          desserts — made to bring warmth and joy to every moment.
        </p>
      </div>

      {/* ===== CATEGORY FILTER ===== */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border font-medium transition-all duration-300
              ${
                selectedCategory === cat
                  ? "bg-[#603809] text-white border-[#603809] shadow-md"
                  : "border-[#603809]/30 text-[#603809] hover:bg-[#603809]/10"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ===== MENU GRID / LOADING ===== */}
      {loading ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-56 bg-gray-200 animate-pulse rounded-xl"
            ></div>
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((item) => <MenuCard item={item} key={item.id} />)
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No items available in this category.
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default MenuPage;
