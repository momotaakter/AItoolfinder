"use client";

import { FC } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import TitleSection from "@/components/common/TitleSection";

interface ToolCardProps {
  name: string;
  initials: string;
  category: string;
  isFree?: boolean;
  rank?: number;
  description: string;
  votes?: number;
}

const Toolcard: FC<ToolCardProps> = ({
  name,
  initials,
  category,
  isFree = false,
  rank = 0,
  description,
  votes = 0,
}) => {
  return (
    <div>

 <TitleSection
      title="Upcoming AI Tool Launches"
      paragraph="Get a sneak peek at the AI tools launching soon. Stay ahead of the curve and be prepared for the next wave of innovation."
    ></TitleSection>







    <div className=" max-w-3xl bg-white rounded-2xl shadow-md p-5 flex flex-col sm:flex-row items-start gap-4 transition-all duration-200 hover:shadow-lg">




   


      {/* Avatar */}
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-b from-gray-100 to-gray-50 text-gray-800 font-bold text-2xl shrink-0">
        {initials}
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full flex flex-col gap-3">
        {/* Header */}
        <div className="flex justify-between flex-wrap gap-3">
          <div>
            <div className="flex items-center flex-wrap gap-2">
              <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
              <span className="text-yellow-500">★</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-green-50 text-green-700 border border-green-100">
                  {category}
                </span>
                {isFree && (
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                    free
                  </span>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          </div>

          <div className="flex items-center">
            <span className="px-3 py-1 text-xs font-semibold bg-blue-50 text-blue-600 rounded-full border border-blue-100">
              #{rank}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 flex-wrap">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold text-sm transition-all duration-200">
            <Plus className="w-4 h-4" />
            Vote ({votes})
          </button>

          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-gray-800 font-medium text-sm hover:bg-gray-50 transition-all duration-200">
            <ArrowUpRight className="w-4 h-4" />
            Try Now
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Toolcard;
