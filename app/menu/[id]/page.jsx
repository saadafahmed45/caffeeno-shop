"use client";

import { menuItems } from "@/app/api/menuData";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import MenuCard from "@/app/components/MenuCard";
import { useCart } from "@/app/context/CartContext";

const Menu_details = ({ params }) => {
  const { id } = React.use(params);
  const { handleAddedCart } = useCart();

  const item = menuItems.find((m) => m.id === parseInt(id));

  if (!item) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl">
        Item not found
      </div>
    );
  }

  // Related Items
  const related = menuItems
    .filter((m) => m.category === item.category && m.id !== item.id)
    .slice(0, 4);

  // Discounted Price
  const discountPrice =
    item.discount > 0
      ? (item.price * (1 - item.discount / 100)).toFixed(2)
      : null;

  return (
    <div className="bg-[#FFF9F2] min-h-screen">
      {/* HEADER IMAGE */}
      <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden rounded-b-[25px] shadow-2xl">
        <img
          src={item.image}
          className="w-full h-full object-cover"
          alt={item.name}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-10 left-10 text-4xl md:text-6xl font-extrabold text-white"
        >
          {item.name}
        </motion.h1>

        {item.isSpecial && (
          <span className="absolute top-6 left-6 bg-orange-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
            ⭐ Special Item
          </span>
        )}
      </div>

      {/* DETAILS SECTION */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-28 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-xl bg-white"
          >
            <img
              src={item.image}
              className="w-full h-96 md:h-[650px] object-cover"
              alt={item.name}
            />
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-[#603809]">{item.name}</h2>

            <p className="mt-1 text-lg text-gray-600">{item.category}</p>

            {/* Price */}
            <div className="flex items-end gap-4 mt-4">
              {discountPrice ? (
                <>
                  <p className="text-4xl font-bold text-orange-700">
                    ${discountPrice}
                  </p>
                  <p className="line-through text-xl text-gray-500">
                    ${item.price}
                  </p>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full shadow">
                    -{item.discount}%
                  </span>
                </>
              ) : (
                <p className="text-4xl font-bold text-orange-700">
                  ${item.price}
                </p>
              )}
            </div>

            {/* LONG DESCRIPTION */}
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              {item.longDesc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-5">
              {item.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1 bg-orange-100 text-orange-700 font-medium rounded-full shadow-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* INFO CARDS */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <InfoBox label="Calories" value={`${item.calories} kcal`} />
              <InfoBox label="Prep Time" value={`${item.prepTime} min`} />
              <InfoBox label="Stock" value={`${item.stock} left`} />
              <InfoBox label="Sold" value={`${item.sold} sold`} />
            </div>

            {/* Ingredients */}
            {item.ingredients?.length > 0 && (
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-[#603809] mb-2">
                  Ingredients
                </h3>
                <div className="flex flex-wrap gap-3">
                  {item.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white border border-gray-300 rounded-xl text-sm shadow-sm"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <button
              onClick={() => handleAddedCart(item)}
              className="mt-12 bg-[#603809] hover:bg-[#4a2f07] text-white font-semibold px-14 py-4 rounded-2xl shadow-xl text-lg transition-all"
            >
              Order Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* RELATED ITEMS */}
      {related.length > 0 && (
        <section className="px-6 sm:px-10 md:px-16 lg:px-28 pb-20">
          <h3 className="text-3xl font-bold text-[#603809] mb-8">
            You may also like
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {related.map((i) => (
              <MenuCard item={i} key={i.id} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

const InfoBox = ({ label, value }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-xl font-semibold">{value}</p>
  </div>
);

export default Menu_details;
