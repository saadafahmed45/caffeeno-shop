"use client";

import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#2B1A12] text-gray-300 pt-16 pb-8 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* LOGO + ABOUT */}
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            Caffeeno
          </h1>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Brewing happiness in every cup—crafted with passion, served with
            love.
          </p>

          {/* SOCIALS */}
          <div className="flex mt-5 gap-4">
            <Link href="#" className="hover:text-white transition">
              <Facebook size={22} />
            </Link>
            <Link href="#" className="hover:text-white transition">
              <Instagram size={22} />
            </Link>
            <Link href="#" className="hover:text-white transition">
              <Twitter size={22} />
            </Link>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-white transition">
                Our Menu
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-white transition">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Support</h2>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="hover:text-white transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <MapPin size={20} className="text-white" />
              Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-white" />
              support@caffeeno.com
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-white" />
              +880 1234-567890
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Caffeeno. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
