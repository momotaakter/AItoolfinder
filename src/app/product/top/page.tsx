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
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.8 },
    }),
};

const page: React.FC = () => {
    const [active, setActive] = useState<string>("All Time");
    const buttons: string[] = ["All Time", "This Month", "This Week"];

    return (
        <div className="p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto">


   <TitleSection
        title="🚀 Latest AI Tool Launches"
        paragraph="Discover the most recent AI tools that have launched. Stay updated with the latest innovations in artificial intelligence."
      ></TitleSection>











            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 mt-4">
                {buttons.map((label) => (
                    <Button
                        key={label}
                        label={label}
                        active={active === label}
                        onClick={() => setActive(label)}
                    />
                ))}
            </div>

            {/* Product Description */}
            <ProductDescription />

            {/* Cards (Mock from API) */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 place-items-center">
                {Array.from({ length: 11 }).map((_, idx) => (
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

            {/* Load More */}
            <div className="flex w-full items-center justify-center mt-8">
                <button className="border rounded-xl px-6 py-2 font-semibold bg-gray-200 cursor-pointer hover:bg-gray-300 transition">
                    Load More
                </button>
            </div>
        </div>
    );
};

// Filter Button Component
const Button: React.FC<ButtonProps> = ({ label, active, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-xl border text-sm sm:text-base transition font-medium cursor-pointer ${active
                    ? "bg-[#39c682] text-white border-[#39c682]"
                    : "bg-white border-[#39c682] text-black hover:bg-[#39c682]/10"
                }`}
        >
            {label}
        </button>
    );
};

//  Product Description Section
const ProductDescription: React.FC = () => {
    return (
        <div className="mt-6 text-gray-700">
            <div className="bg-purple-50 flex flex-col md:flex-row justify-between p-5 md:p-8 rounded-md shadow-sm">
                {/* Left Side (Logo / Image Placeholder) */}
                <div className="flex-1 flex items-center justify-center bg-gray-300/80 rounded-lg shadow-md mb-5 md:mb-0 md:mr-8 h-[200px] sm:h-[250px] md:h-[300px]">
                    <h2 className="text-7xl sm:text-8xl md:text-[180px] font-semibold text-gray-900">
                        GI
                    </h2>
                </div>

                {/* Right Side (Content) */}
                <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
                        GitRoll
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quo
                        explicabo veniam eos officia quos totam asperiores ea sequi, velit
                        voluptatum. Dicta, culpa cumque obcaecati consectetur nihil soluta
                        magni quos illo blanditiis placeat assumenda eligendi in minima
                        vero.
                    </p>

                    {/* Tags */}
                    <div className="my-4 flex flex-wrap gap-2">
                        <span className="text-[10px] font-semibold bg-gray-200/90 px-3 pt-1 rounded-md">
                            Coding Competency Assessment
                        </span>
                        <span className="text-[10px] font-semibold bg-[#39C682] px-3 py-1 text-white rounded-2xl">
                            Free
                        </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3">
                        <button className="flex-1 sm:flex-none text-base bg-[#39C682] px-6 py-2 text-white rounded-md cursor-pointer hover:bg-[#2ea96b] transition">
                            Try Now
                        </button>
                        <button className="flex-1 sm:flex-none text-base bg-white border px-6 py-2 text-gray-800 rounded-md cursor-pointer hover:bg-gray-100 transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

//  AI Tool Card Component
const AIToolCard: React.FC = () => {
    return (
        <div className="w-full max-w-[350px] border rounded-xl shadow-sm p-4 bg-white flex flex-col gap-3 hover:shadow-md transition">
            {/* Header Section */}
            <div className="flex items-start justify-between">
                <div className="flex gap-3 w-full cursor-pointer">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-300 rounded-md font-semibold text-gray-600 shrink-0">
                        CZ
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex items-center gap-2">
                            <span className="text-base font-semibold text-gray-900 truncate">
                                Chat Z
                            </span>
                        </div>

                        {/* Tags */}
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-[2px] rounded-2xl">
                                Other
                            </span>
                            <span className="text-xs bg-green-100 text-green-700 px-3 py-[2px] rounded-2xl">
                                Free
                            </span>
                        </div>

                        {/* Description */}
                        <div className="my-2">
                            <p className="text-sm text-gray-500 line-clamp-2">
                                Chat Z is an Artificial Intelligence (AI) tool by Zitti that
                                offers powerful automation for various creative tasks.
                            </p>
                        </div>

                        {/* Bottom Actions */}
                        <div className="flex flex-wrap justify-between items-center mt-2 gap-2">
                            {/* Upvotes */}
                            <div className="flex items-center justify-center gap-2 text-gray-600 text-sm flex-1 rounded-md py-1.5 border hover:bg-gray-100 transition">
                                <CircleArrowUp size={16} />
                                <span>38</span>
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center justify-between gap-2 flex-1">
                                <a
                                    href="https://www.aippt.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-1 text-sm text-gray-700 rounded-md py-1.5 border hover:text-blue-600 font-medium hover:shadow-sm transition flex-1 px-2"
                                >
                                    <ExternalLink size={15} />
                                    View
                                </a>
                                <button className="text-gray-400 hover:text-yellow-400 transition">
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