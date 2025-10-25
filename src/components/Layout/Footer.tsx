"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

    
      {/* Mobile Bottom Navigation Bar - Only visible on mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="flex justify-between items-center px-2 py-2">
          {/* Home */}
          <Link href="/" className="flex flex-col items-center space-y-1 flex-1 min-w-0">
            <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs text-gray-600">Home</span>
          </Link>

          {/* Categories */}
          <Link href="/categories" className="flex flex-col items-center space-y-1 flex-1 min-w-0">
            <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-xs text-gray-600">Categories</span>
          </Link>

          {/* Submit */}
          <Link href="/submit-tool" className="flex flex-col items-center space-y-1 flex-1 min-w-0">
            <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="text-xs text-gray-600">Submit</span>
          </Link>

          {/* Trending */}
          <Link href="/product/trending" className="flex flex-col items-center space-y-1 flex-1 min-w-0">
            <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-xs text-gray-600">Trending</span>
          </Link>

          {/* Sign In */}
          <Link href="/login" className="flex flex-col items-center space-y-1 flex-1 min-w-0">
            <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs text-gray-600">Sign In</span>
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
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
