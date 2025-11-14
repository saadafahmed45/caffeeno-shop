"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // get current route

  const isHome = pathname === "/"; // check for home route

  // Scroll effect only for home page
  useEffect(() => {
    if (!isHome) return; // no scroll effect on other pages

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
              ? "bg-amber-500 shadow-md"
              : "bg-transparent"
            : "bg-amber-500 shadow-md"
        }
      `}
    >
      <nav className="mx-auto px-6 md:px-12 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Cafeeno<span className="text-amber-900"> Shop</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-lg">
          <li>
            <Link href="/" className="hover:text-amber-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/menu" className="hover:text-amber-200 transition">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-amber-200 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contactUs" className="hover:text-amber-200 transition">
              Contact Us
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-amber-600 text-white px-6 py-4 space-y-4">
          <Link href="/" className="block hover:text-amber-200">
            Home
          </Link>
          <Link href="/menu" className="block hover:text-amber-200">
            Menu
          </Link>
          <Link href="/about" className="block hover:text-amber-200">
            About
          </Link>
          <Link href="/contact" className="block hover:text-amber-200">
            Contact Us
          </Link>
          <div className="pt-2 border-t border-amber-400 flex flex-col gap-3">
            <Link
              href="/login"
              className="block border border-white px-4 py-2 rounded-full text-center hover:bg-white hover:text-amber-600 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block bg-white text-amber-700 font-semibold px-4 py-2 rounded-full text-center hover:bg-amber-100 transition"
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
