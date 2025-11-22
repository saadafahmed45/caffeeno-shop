"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MugSec = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden text-white">
      {/* Background Image */}
      <Image
        src="/img/coffe_sec_bg.png"
        alt="Coffee Background"
        fill
        priority
        className="object-cover w-1/2 md:w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-orange-950/80 via-orange-900/60 to-transparent backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center py-12  justify-around w-full  px-6 sm:px-10 md:px-16 lg:px-24 gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Start Your Day <br /> With a{" "}
            <span className="text-amber-400">Perfect Brew</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8">
            Experience the rich aroma and smooth taste that makes every morning
            unforgettable. Crafted to energize your day.
          </p>

          <Link
            href="menu/1"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-10 rounded-full transition-transform duration-300 shadow-lg hover:scale-105"
          >
            Order Now
          </Link>
        </motion.div>

        {/* Cup Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end w-full md:w-auto"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/img/cup.png"
              alt="Coffee Cup"
              width={420}
              height={420}
              className="object-contain w-1/2 m-auto drop-shadow-[0_15px_20px_rgba(0,0,0,0.4)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MugSec;
