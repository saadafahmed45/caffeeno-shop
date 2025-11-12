"use client";

import React from "react";

import { motion } from "framer-motion";

const Feature_Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Cappuccino",
      desc: "Rich espresso with steamed milk and foam.",
      image: "/img/Rectangle 7.png",
      price: "$54",
    },
    {
      id: 2,
      name: "Latte",
      desc: "Smooth espresso blended with creamy milk.",
      image: "/img/Rectangle 9.png",
      price: "$49",
    },
    {
      id: 3,
      name: "Americano",
      desc: "Strong espresso diluted with hot water.",
      image: "/img/Rectangle 11.png",
      price: "$39",
    },
    {
      id: 4,
      name: "Mocha",
      desc: "Chocolatey espresso topped with whipped cream.",
      image: "/img/Rectangle 13.png",
      price: "$59",
    },
  ];

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
          {menuItems.map((item) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold text-[#603809] mb-3">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-base mb-4">{item.desc}</p>
                <h3 className="text-xl font-bold text-[#b3762f] mb-4">
                  {item.price}
                </h3>
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature_Menu;
