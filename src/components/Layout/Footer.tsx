"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 justify-center"
      >
        {/* --- Logo Section --- */}
        <motion.div custom={0} variants={fadeIn} className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <Image
              src="/globe.svg"
              alt="AI Tool Finder"
              width={30}
              height={30}
              className="object-contain"
            />
            <span className="text-lg font-semibold text-emerald-600">
              AI Tool Finder
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-3 max-w-xs">
            Discover the best AI tools for your needs
          </p>
          <div className="mt-4 flex items-center gap-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.6}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 17.25V6.75M21.75 6.75l-9.75 6.75L2.25 6.75"
              />
            </svg>
            <span className="text-sm">info@aitoolfinder.com</span>
          </div>
        </motion.div>

        {/* --- Products Section --- */}
        <motion.div custom={1} variants={fadeIn}>
          <h4 className="text-gray-900 font-semibold mb-3">Products</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">
              Latest Launches
            </li>
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">
              Top Products
            </li>
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">Upcoming</li>
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">
              Categories
            </li>
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">Trending</li>
          </ul>
        </motion.div>

        {/* --- Resources Section --- */}
        <motion.div custom={2} variants={fadeIn}>
          <h4 className="text-gray-900 font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">Blog</li>
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">
              Latest News
            </li>
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">Guides</li>
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">
              Advertise
            </li>
          </ul>
        </motion.div>

        {/* --- Newsletter Section ---*/}
        <motion.div custom={3} variants={fadeIn} className="sm:col-span-2 lg:col-span-1">
          <h4 className="text-gray-900 font-semibold mb-3">Stay updated</h4>
          <p className="text-sm text-gray-600 mb-3 max-w-xs">
            Subscribe to our newsletter for the latest AI tools and news.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 sm:gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 min-w-0 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-400 text-sm"
              required
            />
            <button
              type="submit"
              className="bg-emerald-400 hover:bg-emerald-500 px-4 py-2 rounded-lg transition flex items-center justify-center gap-2 text-white text-sm font-medium whitespace-nowrap"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      
      </motion.div>
      {/* --- Copyright --- 

      



      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="border-t border-gray-200 mt-6 flex max-w-7xl"
      >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} AI Tool Finder. All rights reserved.
        </div>

             
   <ul className=" text-sm text-gray-600 block">
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">Blog</li>
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">
              Latest News
            </li>
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">Guides</li>
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">
              Advertise
            </li>
          </ul>


      </motion.div>

      */}

    
 <div className="bg-[#009966] text-white py-5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Left side text */}
        <div className="text-center md:text-left mb-6 md:mb-0">
   
          <p className="mt-2 text-white">
    © 2024 AI Tool Finder. All rights reserved.
          </p>
        </div>

        {/* Right side menu */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 text-center">
          <a href="#" className="hover:text-gray-300 transition">Terms</a>
          <a href="#" className="hover:text-gray-300 transition">Privacy</a>
          <a href="#" className="hover:text-gray-300 transition">About</a>
          <a href="#" className="hover:text-gray-300 transition">FAQ</a>
        </div>
      </div>



</div>


</footer>





  
  );
}
