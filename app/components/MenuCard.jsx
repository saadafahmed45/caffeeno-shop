"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useCart } from "../context/CartContext";

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
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault(); // prevents link navigation
    addToCart(item);
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
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover transform group-hover:scale-110 transition-all duration-500"
            />

            <span className="absolute top-3 right-3 bg-[#603809]/90 text-white text-xs px-3 py-1 rounded-full shadow-md">
              {item.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-xl font-semibold text-[#603809]">
              {item.name}
            </h3>

            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {item.desc}
            </p>

            {/* Price + Rating */}
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-[#a05b28] text-lg">
                ${item.price}
              </span>

              <span className="text-yellow-500 text-sm">
                ⭐ {item.rating.toFixed(1)}
              </span>
            </div>

            {/* Sizes */}
            {item.size && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.size.map((s, i) => (
                  <span
                    key={i}
                    className="border border-[#603809]/30 text-[#603809] text-xs px-2 py-1 rounded-md"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-5 hover:bg-amber-500 hover:cursor-pointer bg-[#603809] text-white py-2.5 rounded-lg font-medium  transition-all"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MenuCard;
