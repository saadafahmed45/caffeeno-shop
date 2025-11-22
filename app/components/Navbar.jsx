"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { cartItems } = useCart();

  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
        ${
          isHome
            ? isScrolled
              ? "bg-linear-to-r from-[#b3762f] to-[#d6a86c]"
              : "bg-transparent"
            : "bg-linear-to-r from-[#b3762f] to-[#d6a86c]"
        }
      `}
    >
      <nav className="mx-auto px-6 md:px-24 py-4 flex items-center justify-between text-white relative">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Cafeeno<span className="text-amber-900"> Shop</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-lg">
          {/* Links */}
          {[
            { path: "/", label: "Home" },
            { path: "/menu", label: "Menu" },
            { path: "/about", label: "About" },
            { path: "/contactUs", label: "Contact Us" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`pb-1 border-b-2 transition ${
                  pathname === item.path
                    ? "border-white text-white"
                    : "border-transparent hover:border-amber-200"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Cart (DESKTOP) */}
          <li className="relative">
            <Link
              href="/cart"
              className={`flex items-center transition ${
                pathname === "/cart"
                  ? "text-amber-200 font-semibold"
                  : "text-white"
              } hover:text-amber-200`}
            >
              <ShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-amber-600 transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-white text-amber-700 font-semibold px-4 py-2 rounded-full hover:bg-amber-100 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* MOBILE Section */}
        <div className="flex gap-6 items-center md:hidden">
          {/* Mobile Cart */}
          <div className="relative">
            <Link
              href="/cart"
              className={`flex items-center transition ${
                pathname === "/cart"
                  ? "text-amber-200 font-semibold"
                  : "text-white"
              } hover:text-amber-200`}
            >
              <ShoppingCart size={26} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-linear-to-r from-[#b3762f] to-[#d6a86c] text-white px-6 py-4 space-y-4">
          {[
            { path: "/", label: "Home" },
            { path: "/menu", label: "Menu" },
            { path: "/about", label: "About" },
            { path: "/contactUs", label: "Contact Us" },
          ].map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block transition ${
                pathname === item.path
                  ? "text-amber-200 font-semibold"
                  : "text-white"
              } hover:text-amber-200`}
            >
              {item.label}
            </Link>
          ))}

          {/* Login / Sign Up */}
          <div className="pt-2 border-t border-amber-400 flex flex-col gap-3">
            <Link
              href="/login"
              className={`block border border-white px-4 py-2 rounded-full text-center transition ${
                pathname === "/login"
                  ? "bg-white text-amber-600 font-semibold"
                  : "hover:bg-white hover:text-amber-600"
              }`}
            >
              Login
            </Link>

            <Link
              href="/signup"
              className={`block bg-white text-amber-700 font-semibold px-4 py-2 rounded-full text-center transition ${
                pathname === "/signup"
                  ? "bg-amber-100 text-amber-700"
                  : "hover:bg-amber-100"
              }`}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
