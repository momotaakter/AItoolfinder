"use client";

// SponsoredListings.tsx
// Clone of the uploaded design using TypeScript + Next.js + Tailwind + Framer Motion

import React from "react";
import { motion } from "framer-motion";
import { Star, Eye, ThumbsUp } from "lucide-react";

const listings = [
  {
    name: "Flowshot",
    rating: 4.5,
    description: "A powerful tool for Google Sheets automation, streamlining...",
    tag: "AI for AI for Productivity",
    views: 706,
    likes: 216,
    color: "bg-[#F5F8FF]",
  },
  {
    name: "GitHub Copilot",
    rating: 3.5,
    description: "An AI-powered coding assistant that suggests code snippets and...",
    tag: "AI for AI for Coding and Development",
    views: 706,
    likes: 216,
    color: "bg-white",
  },
  {
    name: "ChatGPT",
    rating: 4.5,
    description: "An AI assistant from OpenAI that excels in natural language...",
    tag: "AI for AI Chatbots and Assistants",
    views: 608,
    likes: 1204,
    color: "bg-white",
  },
  {
    name: "Rewind",
    rating: 4.5,
    description: "Save anything, including conversations and make them...",
    tag: "AI for AI for Productivity",
    views: 404,
    likes: 242,
    color: "bg-white",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const SponsoredListing: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Sponsored Listings</h2>
            <p className="text-gray-500 mt-1">Featured AI tools and services</p>
          </div>
          <span className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm font-medium mt-3 md:mt-0">
            Promoted
          </span>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((item, index) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.1)" }}
              className={`rounded-2xl ${item.color} p-6 shadow-md border border-gray-100 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold">
                    {item.name.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                </div>

                {/* Rating */}
                <div className="flex items-center text-yellow-500 text-sm mb-3">
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <span className="ml-1 text-gray-800 font-medium">{item.rating}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-snug mb-4">{item.description}</p>

                {/* Tag */}
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                  {item.tag}
                </span>
              </div>

              {/* Footer stats */}
              <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{item.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{item.likes}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="text-right mt-6">
          <a
            href="#"
            className="text-green-600 hover:text-green-700 font-medium text-sm inline-flex items-center gap-1"
          >
            Advertise with us →
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsoredListing;
