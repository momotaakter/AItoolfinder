"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const icons = [
  { src: "/icons/google.png", top: "10%", left: "15%" },
  { src: "/icons/github.png", top: "25%", left: "5%" },
  { src: "/icons/linkedin.png", top: "70%", left: "20%" },
  { src: "/icons/microsoft.png", top: "15%", right: "20%" },
  { src: "/icons/discord.png", top: "50%", right: "10%" },
  { src: "/icons/notion.png", top: "80%", right: "25%" },
];

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] overflow-hidden bg-gradient-to-r from-[#f8fafc] to-[#f0f7ff] text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Floating Icons */}
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-2xl shadow-md bg-white flex items-center justify-center"
          style={{ top: icon.top, left: icon.left, right: icon.right }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.8, 1, 0.8],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image src={icon.src} alt="icon" width={32} height={32} />
        </motion.div>
      ))}

      {/* AI Tools Count Badge */}
      <motion.div
        className="mb-4 bg-white/70 backdrop-blur-md rounded-full px-4 py-1 text-sm text-gray-700 shadow-sm border border-gray-200"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        🚀 12,132 AI Tools Available
      </motion.div>

      {/* Main Text */}
      <motion.h1
        className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Every piece of AI{" "}
        <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent animate-gradient-x">
          worth knowing
        </span>{" "}
        —one click away
      </motion.h1>

      {/* Sub Text */}
      <motion.p
        className="mt-4 text-gray-600 text-base sm:text-lg max-w-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Discover the best AI tools for your needs
      </motion.p>

    
      <motion.div
        className="mt-8 bg-white rounded-full shadow-lg flex items-center w-full max-w-md overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <input
          type="text"
          placeholder="🔍 Search for any tool..."
          className="flex-1 px-5 py-3 text-gray-700 outline-none"
        />
        <button className="bg-emerald-600 text-white px-5 py-3 font-medium hover:bg-emerald-700 transition-all">
          Ask AI
        </button>
      </motion.div>

      
    </section>
  );
}
