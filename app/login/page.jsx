"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FFF9F2] py-10 px-6">
      <div className="flex w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* LEFT IMAGE */}
        <div className="relative hidden lg:block lg:w-1/2">
          <Image
            src="https://images.pexels.com/photos/28495590/pexels-photo-28495590.jpeg"
            alt="Coffee Login"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0  from-black/30 to-black/60" />

          <div className="absolute bottom-10 left-10 text-white">
            <h2 className="text-4xl font-extrabold">Welcome Back!</h2>
            <p className="mt-2 text-sm opacity-90 max-w-xs">
              Login to continue exploring our handcrafted coffee and cozy
              treats.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-1/2 px-10 py-12">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Link href="/" className="text-4xl font-bold tracking-wide">
              Cafeeno<span className="text-amber-500"> Shop</span>
            </Link>{" "}
          </div>

          <h3 className="text-3xl font-extrabold text-center text-[#603809]">
            Sign In
          </h3>
          <p className="text-center text-gray-500 mt-2 mb-6">
            Glad to see you again!
          </p>

          {/* GOOGLE LOGIN */}
          <button
            className="flex items-center justify-center gap-3 w-full py-3 border rounded-xl 
            hover:bg-gray-50 transition duration-300"
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="Google"
              className="w-12"
            />
            <span className="font-medium">Sign in with Google</span>
          </button>

          {/* DIVIDER */}
          <div className="flex items-center justify-between my-6">
            <span className="w-1/4 border-b" />
            <span className="text-sm text-gray-500 uppercase">
              or login with email
            </span>
            <span className="w-1/4 border-b" />
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-[#603809] transition"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <a href="#" className="text-xs text-gray-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-[#603809] transition"
            />
          </div>

          {/* LOGIN BUTTON */}
          <button
            className="w-full py-3 bg-[#603809] text-white rounded-xl font-semibold text-lg
          hover:bg-[#4b2d07] transition shadow-md"
          >
            Sign In
          </button>

          {/* SIGN UP LINK */}
          <div className="flex items-center justify-between mt-6">
            <span className="w-1/4 border-b" />
            <a
              href="#"
              className="text-sm text-gray-500 uppercase hover:underline"
            >
              or create new account
            </a>
            <span className="w-1/4 border-b" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
