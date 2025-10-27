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
 
const fadeIn = {
    hidden: { opacity: 0, y: 9 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.8 },
    }),
}; 
 
export default function Page() {
    const [active, setActive] = useState<string>("Today");
        const buttons: string[] = ["Today", "This Week", "This Month"];
  return (
      <div className="p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto">
 
        
     <TitleSection
        title="Upcoming AI Tool Launches"
        paragraph="Get a sneak peek at the AI tools launching soon. Stay ahead of the curve and be prepared for the next wave of innovation."
      />


          <div className="flex justify-center sm:justify-start mt-4 ml-6">
              <div className="flex bg-[#F1F5F9] rounded-md py-0.5 px-0.5">
                  {buttons.map((label) => (
                      <Button
                          key={label}
                          label={label}
                          active={active === label}
                          onClick={() => setActive(label)}
                      />
                  ))}
              </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 justify-center">
              {Array.from({ length: 9 }).map((_, idx) => (
                  <motion.div
                      key={idx}
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                      custom={idx}
                  >
                      <AIToolCard />
                  </motion.div>
              ))}
          </div>
 
      </div>
  )
}
 
 
// Filter Button Component
const Button: React.FC<ButtonProps> = ({ label, active, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2  text-sm sm:text-base transition font-medium cursor-pointer  ${active
                ? " bg-white  text-black border rounded-sm shadow-sm"
                : "   text-[#64748B]"
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
                    <div className="w-14 h-14 text-2xl flex items-center justify-center bg-gray-300 rounded-2xl font-semibold text-gray-600 shrink-0">
                        TD
                    </div>
                    <div className="flex flex-col w-full">
 
 
                        <div className="flex items-center gap-2">
                            <span className="text-md font-medium text-gray-900 truncate">
                                Tattoo Al Design
                            </span>
                            <button
                                className="text-gray-400 hover:text-black transition min-w-7 cursor-pointer"
                                aria-label="Add to favorites"
                            >
                                <Star size={18} />
                            </button>
                        </div>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-0.5 rounded-2xl">
                                tattoos
                            </span>
                            <span className="text-xs bg-[#39C682] text-white px-3 py-0.5 rounded-2xl">
                                free
                            </span>
                            <span className="text-xs bg-[#3B82F6] text-white px-3 py-0.5 rounded-2xl hover:bg-[#39C682]/70 transition cursor-pointer">
                                #0
                            </span>
                        </div>
                    </div>
                </div>
 
            </div>
            <div>
                {/* text document */}
                <div className="flex items-center gap-2 ">
                    <span className="text-sm font-medium text-gray-500 -mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ere Lorem ipsum dolor sit amet consectetur adip...
                    </span>
                </div>
 
                {/* Bottom Actions */}
                <div className="md:flex  flex-wrap justify-between items-center mt-2 gap-2">
                    {/* Upvotes Box */}
                    <div className="flex items-center justify-center gap-2 text-white text-sm flex-1 min-w-20 rounded-md py-1.5 border hover:shadow-sm bg-[#39C682] transition hover:bg-[#39C682]/80">
                        <CircleArrowUp size={16} />
                        <span>Vote (48)</span>
                    </div>
 
                    {/* Actions */}
                    <div className=" md:mt-0 mt-2 flex items-center gap-2 sm:gap-3 flex-1 min-w-[120px] flex-wrap">
                        <a
                            href="https://www.aippt.com/"
                            target="_blank"
                            rel="noopener"
                            className="flex items-center justify-center gap-1 text-sm text-gray-700 rounded-md py-1.5  border hover:text-blue-600 font-medium hover:shadow-sm transition flex-1 min-w-[60px] px-2"
                        >
                            <ExternalLink size={15} />
                            Try Now
                        </a>
 
                    </div>
                </div>
            </div>
        </div>
    );
};