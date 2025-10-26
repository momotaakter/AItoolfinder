"use client";

import Image from "next/image";
import { Star, Eye, ArrowUp } from "lucide-react";

interface PoemCardProps {
  title: string;
  description: string;
  rating: number;
  views: number;
  likes: number;
  tags: string[];
  image: string;
}

export default function PoemCard({
  title,
  description,
  rating,
  views,
  likes,
  tags,
  image,
}: PoemCardProps) {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-sm p-5 flex flex-col transition hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-indigo-100 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={64}
            height={64}
            className="object-cover"
          />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-[13px] shadow-sm">
            🔥
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-[16px] font-semibold text-slate-900">
              {title}
            </h3>
            <div className="flex items-center gap-1 bg-orange-50 border border-orange-100 text-orange-700 rounded-full px-2 py-[2px] text-sm font-medium">
              <Star className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
              {rating}
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-2 leading-snug line-clamp-2">
            {description}
          </p>

          <div className="flex gap-2 mt-3 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`text-[13px] px-3 py-1 rounded-full ${
                  tag === "free"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-gray-100 text-gray-700"
                } font-medium`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 my-3"></div>

      <div className="flex items-center justify-between text-gray-500 text-sm">
        <div className="flex items-center gap-1.5">
          <Eye className="w-4 h-4" />
          <span>{views}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <ArrowUp className="w-4 h-4" />
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
}
