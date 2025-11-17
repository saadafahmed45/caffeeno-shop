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
        className="relative z-10 max-w-5xl px-6 sm:px-10 md:px-16 lg:px-24 mt-12 text-center md:text-left"
      >
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl mb-4 text-amber-200 font-medium">
          We’ve got your morning covered with
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white">
          Brewed to{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-[#b3762f] to-[#d6a86c]">
            Perfection
          </span>
          , <br />
          Just for You
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 max-w-3xl">
          Experience the rich aroma and bold flavors of freshly roasted coffee
          beans. From morning energy to evening comfort — every cup tells a
          story of passion, warmth, and craftsmanship.
        </p>

        {/* Call-to-action button */}
        <Link
          href="/menu"
          className="inline-block bg-linear-to-r from-[#b3762f] to-[#d6a86c] hover:from-[#9c601f] hover:to-[#c99854] text-white font-semibold py-3 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Shop Now
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
