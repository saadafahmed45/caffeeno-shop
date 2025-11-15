"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-20 bg-[#FFF9F2] mt-12">
      {/* HEADING */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#603809]">
          Contact Us
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Have questions or want to connect with us? We’re always here to help.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE – CONTACT INFO */}
        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <div className="p-4 bg-[#603809]/10 rounded-xl">
              <FaPhoneAlt className="text-[#603809] text-2xl" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#603809]">Phone</h4>
              <p className="text-gray-600">+880 1234 567 890</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-4 bg-[#603809]/10 rounded-xl">
              <FaEnvelope className="text-[#603809] text-2xl" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#603809]">Email</h4>
              <p className="text-gray-600">support@coffeehouse.com</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-4 bg-[#603809]/10 rounded-xl">
              <FaMapMarkerAlt className="text-[#603809] text-2xl" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#603809]">Location</h4>
              <p className="text-gray-600">
                123 Coffee Street, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – CONTACT FORM */}
        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <div>
            <label className="block mb-1 text-[#603809] font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#603809]"
            />
          </div>

          <div>
            <label className="block mb-1 text-[#603809] font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#603809]"
            />
          </div>

          <div>
            <label className="block mb-1 text-[#603809] font-medium">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#603809]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#603809] text-white py-3 rounded-xl font-semibold hover:bg-[#502e07] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
