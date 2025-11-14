"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-start text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/coffee_bg.png" // place image in /public folder
        alt="Coffee Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Optional Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl px-6 sm:px-10 md:px-16 lg:px-24 mt-8"
      >
        <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4">
          We’ve got your morning covered with
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 leading-tight">
          Brewed to <span className="text-amber-400">Perfection</span>, <br />{" "}
          Just for You
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-100">
          Experience the rich aroma and bold flavors of freshly roasted coffee
          beans. From morning energy to evening comfort — every cup tells a
          story of passion, warmth, and craftsmanship.
        </p>

        <Link
          href="/shop"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
        >
          Shop Now
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
