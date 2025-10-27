"use client";
import { motion } from "framer-motion";
import { CircleArrowUp, ExternalLink, Star } from "lucide-react";
import React, { useState } from "react";
import TitleSection from "@/components/common/TitleSection";




interface ButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8 },
  }),
};

const page:React.FC = () => {
  const [active, setActive] = useState<string>("All Time");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const buttons: string[] = ["All Time", "This Month", "This Week"];

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="p-4">
      <TitleSection
        title="🚀 Latest AI Tool Launches"
        paragraph="Discover the most recent AI tools that have launched. Stay updated with the latest innovations in artificial intelligence."
      ></TitleSection>







      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 justify-center">
        {buttons.map((label) => (
          <Button
            key={label}
            label={label}
            active={active === label}
            onClick={() => setActive(label)}
          />
        ))}
      </div>

      {/* Cards */}
      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        {Array.from({ length: visibleCount }).map((_, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={idx}
          >
            <AIToolCard />
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex w-full items-center justify-center mt-6">
        <button
          onClick={handleLoadMore}
          className="border text-white rounded-xl px-4 py-2 font-semibold bg-[#009966] cursor-pointer hover:bg-gray-300/90 transition"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

const Button: React.FC<ButtonProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 sm:px-4 py-2 rounded-xl border transition font-medium cursor-pointer ${
        active
          ? "bg-[#39c682] text-white border-[#39c682]"
          : "bg-white border-[#39c682] text-black hover:bg-[#39c682]/10"
      }`}
    >
      {label}
    </button>
  );
};

const AIToolCard: React.FC = () => {
  return (
    <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[360px] border rounded-xl shadow-sm p-4 bg-white flex flex-col gap-3 cursor-pointer hover:shadow-md transition">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex gap-3 relative w-full">
          <div className="w-12 h-12 flex items-center justify-center bg-gray-300 rounded-md font-semibold text-gray-600 shrink-0">
            HT
          </div>

          <div className="flex flex-col w-full">
            <span className="text-[10px] absolute bg-green-500 text-white px-1.5 py-[1.5px] rounded-2xl font-medium left-5 sm:left-5">
              New
            </span>

            <div className="flex items-center gap-2">
              <span className="text-md font-medium text-gray-900 truncate">
                https://www.aippt.com/
              </span>
            </div>

            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span className="text-xs bg-gray-100 text-gray-700 px-3 py-[2px] rounded-2xl">
                Other
              </span>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-[2px] rounded-2xl">
                Paid
              </span>
            </div>

            {/* text document */}
            <div className="flex items-center gap-2 my-2">
              <span className="text-sm font-medium text-gray-500">
                https://www.aippt.com/
              </span>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap justify-between items-center mt-2 gap-2">
              <div className="flex items-center justify-center gap-2 text-gray-600 text-sm flex-1 min-w-20 rounded-md py-1.5 border hover:shadow-sm transition hover:bg-gray-300/20">
                <CircleArrowUp size={16} />
                <span>3</span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-[120px] flex-wrap">
                <a
                  href="https://www.aippt.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 text-sm text-gray-700 rounded-md py-1.5 border hover:text-blue-600 font-medium hover:shadow-sm transition flex-1 min-w-[60px] px-2"
                >
                  <ExternalLink size={15} />
                  View
                </a>
                <button
                  className="text-gray-400 hover:text-yellow-400 transition flex-1 min-w-10"
                  title="Add to favorites"
                >
                  <Star size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default page;
