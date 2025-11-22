"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { Star, Clock, Flame } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const MenuCard = ({ item }) => {
  const { handleAddedCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    handleAddedCart(item);
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      className="cursor-pointer"
    >
      <Link href={`/menu/${item.id}`}>
        <div className="bg-white rounded-2xl shadow-lg border border-amber-50 overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-500"
            />

            {/* Special Badge */}
            {item.isSpecial && (
              <span className="absolute top-3 left-3 bg-amber-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                ⭐ Special
              </span>
            )}

            {/* Category */}
            <span className="absolute top-3 right-3 bg-[#603809]/90 text-white text-xs px-3 py-1 rounded-full shadow-md">
              {item.category}
            </span>

            {/* Discount */}
            {item.discount > 0 && (
              <span className="absolute bottom-3 right-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                -{item.discount}%
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            {/* Title */}
            <h3 className="text-xl font-bold text-[#603809]">{item.name}</h3>
            <p className="text-md text-gray-600"> {item.shortDesc}</p>
            {/* Ingredients */}
            <p className="text-xs text-gray-500 line-clamp-2">
              {item.ingredients?.join(", ")}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {item.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="text-[11px] bg-amber-100 text-amber-700 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Calories + PrepTime */}
            <div className="flex items-center justify-between text-xs mt-2">
              <span className="flex items-center gap-1 text-gray-600">
                <Flame size={14} /> {item.calories} cal
              </span>
              <span className="flex items-center gap-1 text-gray-600">
                <Clock size={14} /> {item.prepTime} min
              </span>
            </div>

            {/* Price + Rating */}
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-[#a05b28] text-xl">
                {item.price}
              </span>

              <span className="flex items-center text-yellow-500 text-sm">
                <Star size={16} className="fill-yellow-500" />
                {item.rating.toFixed(1)}
              </span>
            </div>

            {/* Stock */}
            <p className="text-xs text-gray-500">
              {item.stock > 0 ? (
                <span className="text-green-600">In Stock ({item.stock})</span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </p>

            {/* Add to Cart Button */}
            <button
              // onClick={handleAddToCart}
              disabled={item.stock <= 0}
              className={`w-full mt-4 py-2.5 rounded-lg font-semibold transition-all ${
                item.stock > 0
                  ? " text-white bg-linear-to-r from-[#b3762f] to-[#d6a86c] hover:bg-amber-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              <Link href={`/menu/${item.id}`}>
                {item.stock > 0 ? "View Details" : "Out of Stock"}
              </Link>
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MenuCard;
