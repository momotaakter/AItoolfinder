// components/BrowseCategories.tsx
"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import TitleSection from "@/components/common/TitleSection";

interface Category {
  name: string;
  count: number;
}

const categories: Category[] = [
  { name: "content", count: 29 },
  { name: "images", count: 22 },
  { name: "personal assistant", count: 12 },
  { name: "chatting", count: 12 },

];

const page: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 w-full overflow-hidden">


     

   <TitleSection
        title="🚀 Latest AI Tool Launches"
        paragraph="Discover the most recent AI tools that have launched. Stay updated with the latest innovations in artificial intelligence."
      ></TitleSection>





      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search categories..."
          className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col justify-between"
          >
            {/* Text + Arrow in one line */}
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{cat.name}</h3>
          
    
            </div>
          <div className="flex justify-between">
          <div> <span className="text-blue-500 text-sm mt-2">{cat.count} tools</span></div>

           <div><p className="bg-[#009966] text-white p-1 text-[10px] rounded-[3px]">Explore  </p>  </div>

          </div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
