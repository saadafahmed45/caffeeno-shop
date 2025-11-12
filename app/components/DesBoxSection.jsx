"use client";
import React from "react";
import { motion } from "framer-motion";

const DesBoxSection = () => {
  const desItems = [
    {
      id: 1,
      name: "Supreme Beans",
      desc: " Beans that provides great taste",
      image: "/img/coffee-beans 1.png",
    },
    {
      id: 2,
      name: "High Quality",
      desc: "We provide the highest quality",
      image: "/img/badge 1.png",
    },
    {
      id: 3,
      name: "Extraordinary ",
      desc: "Coffee like you have never tasted",
      image: "/img/coffee-cup 1.png",
      price: "$39",
    },
    {
      id: 4,
      name: "Affordable Price",
      desc: "Our Coffee prices are easy to afford",
      image: "/img/best-price 1.png",
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
          {desItems.map((item) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              key={item.id}
              className="bg-[#fff9f1] hover:bg-[#ffeed8] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group px-6 py-10"
            >
              <div className=" ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-1/3 m-auto   object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center">
                <h2 className="text-3xl font-semibold text-[#603809] mb-3">
                  {item.name}
                </h2>
                <p className="text-gray-600  text-xl ">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* bottom content  */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-6xl mx-auto mt-16 pt-4"
        >
          <p className="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxed mb-6">
            Great ideas start with great coffee, Lets help you achieve that
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-[40px] text-[#603809] font-bold mb-6 leading-tight">
            Get started today.{" "}
          </h1>
        </motion.div>

        {/* btn  */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="bg-amber-500 text-center hover:bg-amber-600 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md">
            Join Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DesBoxSection;
