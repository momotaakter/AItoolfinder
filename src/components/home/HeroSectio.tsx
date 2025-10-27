"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const icons = [
  { src: "/Herosectionlogo/github.png", top: "10%", left: "5%", delay: 0 },
  { src: "/Herosectionlogo/notion.jpg", top: "25%", left: "15%", delay: 0 },
  { src: "/Herosectionlogo/reddit.jpg", top: "70%", left: "10%", delay: 1 },
  { src: "/Herosectionlogo/microsfot.jpg", top: "15%", right: "15%", delay: 1.5 },
  { src: "/Herosectionlogo/stack.jpg", top: "50%", right: "5%", delay: 2 },
  { src: "/Herosectionlogo/download.jpg", top: "80%", right: "20%", delay: 2.5 },
];

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f0f7ff] to-[#e6f3ff] text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-400 rounded-full blur-3xl"></div>
      </motion.div>

{/* Floating Icons with Slide-Down + Faster Continuous Movement */}
{icons.map((icon, i) => (
  <motion.div
    key={i}
    className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-2xl shadow-xl bg-white/90 backdrop-blur-sm flex items-center justify-center border border-white/20 cursor-pointer"
    style={{ top: icon.top, left: icon.left, right: icon.right }}
    initial={{ opacity: 1, y: -30 }} // শুরুতে ওপর থেকে নিচে আসবে
    animate={{
      y: [0, -10, 0], // সবসময় হালকা করে নড়বে
    }}
    transition={{
      delay: icon.delay,
      duration: 2, // আগের থেকে দ্রুত
      repeat: Infinity,
    }}
  >
    <Image
      src={icon.src}
      alt="icon"
      width={32}
      height={32}
      className="rounded-lg"
    />
  </motion.div>
))}






      {/* Floating Icons with Fixed Size and Smooth Vertical Animation 
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-2xl shadow-xl bg-white/90 backdrop-blur-sm flex items-center justify-center border border-white/20 cursor-pointer"
          style={{ top: icon.top, left: icon.left, right: icon.right }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: icon.delay,
          }}
        >
          <Image
            src={icon.src}
            alt="icon"
            width={32}
            height={32}
            className="rounded-lg"
          />
        </motion.div>
      ))}

      {/* AI Tools Count Badge with Fade-in Animation */}
      <motion.div
        className="mb-6 bg-white/80 backdrop-blur-lg rounded-full px-6 py-2 text-sm font-medium text-gray-800 shadow-lg border border-white/30 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 0.8,
        }}
      >
        🚀 12,132 AI Tools Available
      </motion.div>

      {/* Main Text with Beautiful Entrance Animations */}
      <motion.div
        className="flex flex-col items-center gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
      >
        <motion.div
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          Every piece of AI{" "}
          <motion.div
            className="bg-gradient-to-r from-black via-[#009966] to-[#009966] bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            worth knowing
          </motion.div>
        </motion.div>








  </motion.div>


 









{/*}
        <motion.div
          className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }
          }}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.2 }
          }}
        >
          Everything{" "}
          <motion.span
            className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            worth knowing
          </motion.span>{" "}
          — one click away
        </motion.div>
      </motion.div>

      {/* Sub Text with Fade-in Animation */}
      <motion.p
        className="mt-6 text-black text-lg sm:text-xl max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Discover the best AI tools for your needs. </motion.p>

      {/* Search Bar with Slide-in Animation */}
      <motion.div
        className="mt-10 bg-white rounded-2xl shadow-2xl flex items-center w-full max-w-2xl overflow-hidden border border-gray-200/50"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="flex-1 px-6 py-4">
          <input
            type="text"
            placeholder="🔍 Search for any AI tool, category, or use case..."
            className="w-full text-gray-700 outline-none placeholder-gray-500 text-lg bg-transparent"
          />
        </div>
        <motion.button
          className="bg-[#009966] text-white px-8 py-4 font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center gap-2"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            🤖
          </motion.span>
          Ask AI
        </motion.button>
      </motion.div>

      {/* Additional CTA with Fade-in Animation */}
      <motion.div
        className="mt-8 flex flex-col sm:flex-row gap-4 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.button
          className="px-6 py-3 bg-[#009966] text-white rounded-full border border-gray-300 hover:text-black hover:bg-gray-50 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
          whileHover={{
            scale: 1.05,
            y: -2,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          ✦ Find the perfect tool for your workflow
        </motion.button>
        <motion.button
          className="px-6 py-3 bg-white border-b-black text-black rounded-full border border-emerald-600 hover:bg-emerald-50 transition-all duration-300 font-medium"
          whileHover={{
            scale: 1.05,
            y: -2,
            backgroundColor: "rgba(16, 185, 129, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Browse Catagorys
        </motion.button>
      </motion.div>
    </section>
  );
}