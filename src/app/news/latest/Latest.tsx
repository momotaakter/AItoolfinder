"use client";

import { Calendar, TrendingUp } from "lucide-react";
import React, { useState } from "react";

interface ButtonProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

interface ImageCartProps {
    title: string;
    date?: string;
    views?: string;
    imageUrl?: string;
    desc?: string;
}

interface NewsCardProps {
    imageUrl: string;
    date: string;
    views: string;
    title: string;
    desc: string;
    author: string;
    category: string;
}

const Latest: React.FC = () => {
    const [active, setActive] = useState<string>("All");
    const buttons: string[] = [
        "All",
        "Product Update",
        "AI Development",
        "Research",
        "Policy",
    ];

    return (
        <div className="p-4 sm:p-6 max-w-7xl mx-auto">
            
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                {buttons.map((label) => (
                    <Button
                        key={label}
                        label={label}
                        active={active === label}
                        onClick={() => setActive(label)}
                    />
                ))}
            </div>

           
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ImageCart
                    title="AI Regulation: EU Passes Landmark AI Act"
                    imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
                    date="5/12/2023"
                    views="5,000,568"
                    desc="European Union approves comprehensive AI regulations, setting global standards for AI development and deployment."
                />

                <ImageCart
                    title="Microsoft Integrates Advanced AI Features Across Office Suite"
                    imageUrl="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop"
                    date="5/12/2025"
                    views="5,456"
                    desc="Microsoft has announced a major update to its Office suite, integrating advanced AI features across all applications to enhance productivity and collaboration."
                />
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <NewsCard
                        key={idx}
                        imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
                        date="5/12/2023"
                        views="5,000,568"
                        title="AI Regulation: EU Passes Landmark AI Act"
                        desc="European Union approves comprehensive AI regulations, setting global standards for AI development and deployment."
                        author="John Doe"
                        category="AI Development"
                    />
                ))}
            </div>
        </div>
    );
};

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

const ImageCart: React.FC<ImageCartProps> = ({
    title,
    date,
    views,
    imageUrl,
    desc,
}) => {
    return (
        <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer border border-gray-200">
           
            <div className="relative w-full aspect-[16/9]">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />

              
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

               
                <div className="absolute bottom-0 p-4 sm:p-5 text-white">
                   
                    <div className="flex flex-wrap items-center gap-3 mb-2 text-xs sm:text-sm">
                        <span className="bg-purple-500 px-3 py-0.5 rounded-xl text-xs sm:text-sm">
                            Trending
                        </span>

                        <div className="flex items-center gap-1 text-gray-200">
                            <Calendar size={14} />
                            <span>{date}</span>
                        </div>

                        <div className="flex items-center gap-1 text-gray-200">
                            <TrendingUp size={14} />
                            <span>{views}</span>
                        </div>
                    </div>

                   
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold leading-snug">
                        {title}
                    </h2>

                   
                    <p className="text-xs sm:text-sm text-gray-200 mt-1 leading-snug">
                        {desc}
                    </p>




                    
                </div>
            </div>
        </div>
    );
};

const NewsCard: React.FC<NewsCardProps> = ({
    imageUrl,
    date,
    views,
    title,
    desc,
    author,
    category,
}) => {
    return (
        <div className="max-w-sm w-full bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition cursor-pointer">
           
            <img src={imageUrl} alt={title} className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300 " />

           
            <div className="p-4">
              
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                        <Calendar size={15} />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <TrendingUp size={15} />
                        <span>{views} views</span>
                    </div>
                </div>

               
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 hover:text-purple-600 transition">
                    {title}
                </h2>

                
                <p className="text-sm text-gray-600 mt-1">{desc}</p>

               
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                       
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-300 to-blue-800 flex items-center justify-center text-white text-xs font-semibold">
                            {author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .toUpperCase()}
                        </div>
                        <span className="text-sm text-gray-800">{author}</span>
                    </div>

                   
                    <span className="text-sm font-medium text-purple-600">
                        {category}
                    </span>
                </div>
            </div>
        </div>
    );
};


export default Latest;
