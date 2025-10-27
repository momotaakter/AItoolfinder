"use client"
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import React from "react";
interface ButtonProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.8 },
    }),
};
const page = () => {
  return (
      <div className="mt-8">
          <div className="my-5">
              <h1 className="text-4xl font-semibold">Browse by Categories</h1>
              <h1 className="text-gray-700">Explore AI tools organized by categories. Find the perfect tool for your needs.</h1>
          </div>
          
          <div className="w-full max-w-md mb-6">
              
              <form className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                  <div className="relative flex-1">
                      {/* Search Icon */}
                      <Search
                          size={18}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      {/* Input Field */}
                      <input
                          type="text"
                          placeholder="Search categories..."
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base transition"
                          required
                      />
                  </div>
              </form>
          </div>

          {/* Cards (Mock from API) */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center">
              {Array.from({ length: 101 }).map((_, idx) => (
                  <motion.div
                      key={idx}
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                      custom={idx}
                      className="w-full flex justify-center"
                  >
                      <AIToolCard />
                  </motion.div>
              ))}
          </div>
    </div>
  )
}



const AIToolCard: React.FC = () => {
    return (
        <div className="w-full max-w-[290px] border rounded-xl shadow-sm p-4 bg-white flex flex-col gap-3 hover:shadow-md hover:text-blue-500 transition px-6 cursor-pointer">
            {/* Header Section */}
            <div className="flex items-start justify-between">
                <p className="font-bold">Content</p>
            </div>
            <div className="flex justify-between font-semibold">
                <div>
                    <span className="bg-blue-400/15 text-blue-500 py-0.5 px-2 rounded-xl text-[12px]">12 tools</span>
                </div>
                <div className="flex text-blue-500/80 hover:bg-blue-300/10 px-2 rounded-sm">
                    <p className="text-sm mt-0.5 ">Explore</p>
                    <ArrowRight size={16} className="mt-1.5"/>
                </div>
            </div>
        </div>
    );
};

export default page