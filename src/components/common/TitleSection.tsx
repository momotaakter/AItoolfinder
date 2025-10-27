"use client";
import { motion } from "framer-motion";
import React from "react";

interface AnimatedTextBlockProps {
  icon?: React.ReactNode; // optional icon
  title: string;
  paragraph: string;
  delay?: number; // optional custom delay
}

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const TitleSection: React.FC<AnimatedTextBlockProps> = ({
  icon,
  title,
  paragraph,
  delay = 0.2,
}) => {
  return (
    <div className="w-full">



    <motion.div
      className="text-center max-w-3xl mx-auto px-4 sm:px-6 md:px-8 mt-10 py-7"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Icon */}
      {icon && (
        <motion.div
          variants={fadeLeft}
          className="flex justify-center mb-4 text-[#009966] text-5xl"
        >
          {icon}
        </motion.div>
      )}

      {/* Title */}
      <motion.h1
        variants={fadeLeft}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
      >
        {title}
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        variants={fadeLeft}
        transition={{ delay }}
        className="text-base sm:text-lg md:text-xl text-gray-600 mb-6"
      >
        {paragraph}
      </motion.p>
    </motion.div>
    </div>

  );
};

export default TitleSection;
