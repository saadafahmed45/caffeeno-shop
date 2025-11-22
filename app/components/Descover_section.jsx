"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const DiscoverSection = () => {
  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 bg-[#fffefc]">
      {/* main wrapper */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl  md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] text-[#603809] font-bold mb-6 leading-tight">
            Discover Our Best Coffee.
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>

          <Link
            href={"/about"}
            className="bg-linear-to-r from-[#b3762f] to-[#d6a86c] hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end w-full md:w-[40%]"
        >
          <Image
            src="/img/mug.png"
            alt="Coffee Mug"
            width={400}
            height={400}
            className="object-contain w-[80%] sm:w-[70%] md:w-full drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoverSection;
