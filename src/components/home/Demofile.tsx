"use client";

import Image from "next/image";
import { Star, Eye, ArrowUp } from "lucide-react";

export default function Demofile() {
  return (
    <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl shadow-sm p-5 flex flex-col transition hover:shadow-md">
      {/* Top section */}
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-indigo-100 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
          <Image
            src="/poem-icon.png" // 👈 নিজের আইকন এখানে বসাও (public folder)
            alt="Poem Generator Icon"
            fill
            className="object-cover"
          />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-[13px] shadow-sm">
            🔥
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-[16px] font-semibold text-slate-900">
              Poem Generator Art
            </h3>
            <div className="flex items-center gap-1 bg-orange-50 border border-orange-100 text-orange-700 rounded-full px-2 py-[2px] text-sm font-medium">
              <Star className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
              5
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-2 leading-snug line-clamp-2">
            The Poem Generator is an online tool designed for generating
            high-quality and keyword-matching poems....
          </p>

          {/* Tags */}
          <div className="flex gap-2 mt-3 flex-wrap">
            <span className="text-[13px] px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
              # poems
            </span>
            <span className="text-[13px] px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
              ⚡ free
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 my-3"></div>

      {/* Bottom meta */}
      <div className="flex items-center justify-between text-gray-500 text-sm">
        <div className="flex items-center gap-1.5">
          <Eye className="w-4 h-4" />
          <span>540</span>
        </div>
        <div className="flex items-center gap-1.5">
          <ArrowUp className="w-4 h-4" />
          <span>45</span>
        </div>
      </div>
    </div>
  );
}
