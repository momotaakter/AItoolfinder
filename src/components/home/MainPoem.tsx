"use client";

import { useState } from "react";

import PoemCard from "./PoemCard";

interface Poem {
  id: number;
  title: string;
  description: string;
  rating: number;
  views: number;
  likes: number;
  tags: string[];
  image: string;
}

const poemsData: Poem[] = [
  {
    id: 1,
    title: "Poem Generator Art",
    description:
      "An AI-powered poem generator for creative and meaningful poetry writing.",
    rating: 5,
    views: 540,
    likes: 45,
    tags: ["poems", "free"],
    image: "/poem-icon.png",
  },
  {
    id: 2,
    title: "Romantic Verse Maker",
    description:
      "Create romantic verses using emotion-based keywords and AI inspiration.",
    rating: 4.8,
    views: 320,
    likes: 25,
    tags: ["romance", "ai"],
    image: "/poem-icon.png",
  },
  {
    id: 3,
    title: "Nature Poetry Studio",
    description: "Generate nature-themed poems using vivid descriptive words.",
    rating: 5,
    views: 670,
    likes: 80,
    tags: ["nature", "free"],
    image: "/poem-icon.png",
  },
  {
    id: 4,
    title: "Sad Poem Writer",
    description: "Create deep and emotional sad poems powered by AI emotions.",
    rating: 4.9,
    views: 480,
    likes: 38,
    tags: ["sad", "emotional"],
    image: "/poem-icon.png",
  },
  {
    id: 5,
    title: "Funny Poem Bot",
    description: "Make hilarious AI-generated poetry for fun and laughter.",
    rating: 4.7,
    views: 220,
    likes: 19,
    tags: ["funny", "free"],
    image: "/poem-icon.png",
  },
  {
    id: 6,
    title: "Love Lines Creator",
    description: "Generate poetic love lines for special occasions or messages.",
    rating: 5,
    views: 920,
    likes: 100,
    tags: ["love", "poems"],
    image: "/poem-icon.png",
  },
  {
    id: 7,
    title: "Inspiration Verse",
    description: "Find motivation with AI-generated uplifting poetic lines.",
    rating: 4.8,
    views: 510,
    likes: 40,
    tags: ["inspiration", "ai"],
    image: "/poem-icon.png",
  },
  {
    id: 8,
    title: "Dream Poem Builder",
    description: "AI tool that weaves your dreams into creative poetic stories.",
    rating: 5,
    views: 360,
    likes: 22,
    tags: ["dreams", "creative"],
    image: "/poem-icon.png",
  },
  {
    id: 9,
    title: "Mystery Poem Lab",
    description: "Compose suspenseful poetic verses with AI-driven imagination.",
    rating: 4.9,
    views: 400,
    likes: 30,
    tags: ["mystery", "free"],
    image: "/poem-icon.png",
  },
  {
    id: 10,
    title: "Life Reflection Writer",
    description:
      "Explore life's meaning through reflective and thoughtful AI poetry.",
    rating: 4.8,
    views: 600,
    likes: 47,
    tags: ["life", "deep"],
    image: "/poem-icon.png",
  },
  {
    id: 11,
    title: "Ocean Song Creator",
    description:
      "Generate soothing ocean-inspired verses full of rhythm and calmness.",
    rating: 5,
    views: 700,
    likes: 75,
    tags: ["ocean", "nature"],
    image: "/poem-icon.png",
  },
  {
    id: 12,
    title: "Fantasy Poem Engine",
    description: "AI generator that crafts magical and fantasy-themed poetry.",
    rating: 4.9,
    views: 850,
    likes: 90,
    tags: ["fantasy", "magic"],
    image: "/poem-icon.png",
  },
];

export default function MainPoem() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [sort, setSort] = useState("Trending");

  const filteredPoems = poemsData.filter((poem) => {
    const matchesSearch = poem.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All Categories" || poem.tags.includes(category.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  // Sort the filtered poems
  const sortedPoems = [...filteredPoems].sort((a, b) => {
    switch (sort) {
      case "Newest":
        return b.id - a.id;
      case "Popular":
        return b.views - a.views;
      case "Trending":
      default:
        return (b.rating * 100 + b.likes) - (a.rating * 100 + a.likes);
    }
  });

  const visiblePoems = sortedPoems.slice(0, visibleCount);

  return (
    <main className=" bg-slate-50 px-4 py-10 sm:px-6 lg:px-12 max-w-7xl mx-auto">



  <div className=" bg-slate-50 pt-4 rounded-xl flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      {/* Left Section */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        {/* Search Input */}
        <div className="relative flex items-center w-full md:w-80">
          <svg
            className="absolute left-3 text-slate-400 w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-10 py-2.5 border border-slate-200 rounded-xl text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#009966] bg-white"
          />
          <div className="absolute right-3 text-slate-400 text-xs">⌘K</div>
        </div>

        {/* Category Dropdown */}
        <div className="relative">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="appearance-none border border-slate-200 bg-white rounded-xl px-9 py-2.5 text-sm text-slate-700 focus:ring-2 focus:ring-[#009966] focus:outline-none cursor-pointer"
            aria-label="Select category"
          >
            <option>All Categories</option>
            <option>Poems</option>
            <option>Art</option>
            <option>AI Tools</option>
            <option>Music</option>
          </select>
          <svg
            className="absolute left-3 top-2.5 w-4 h-4 text-slate-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <svg
            className="absolute right-3 top-3 w-3 h-3 text-slate-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="appearance-none border border-[#009966] bg-white rounded-xl px-9 py-2.5 text-sm text-slate-700 focus:ring-2 focus:ring-[#009966] focus:outline-none cursor-pointer"
            aria-label="Sort by"
          >
            <option>Trending</option>
            <option>Newest</option>
            <option>Popular</option>
          </select>
          <svg
            className="absolute left-3 top-2.5 w-4 h-4 text-slate-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          <svg
            className="absolute right-3 top-3 w-3 h-3 text-slate-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        {/* Filters Button */}
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 focus:ring-[#009966] rounded-xl text-sm text-slate-700 hover:bg-[#009966] transition hover:text-white">
          <svg
            className="w-4 h-4 text-slate-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.586V4z" />
          </svg>
          Filters
        </button>
      </div>
    </div>


      <div className="mt-10">
       


        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visiblePoems.map((poem) => (
            <PoemCard key={poem.id} {...poem} />
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredPoems.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount(visibleCount + 6)}
              className="px-6 py-2 bg-[#009966] cursor-pointer text-white font-medium rounded-full hover:bg-[#009966] transition"
            >
              Load More
            </button>
          </div>
        )}

        {/* No results */}
        {filteredPoems.length === 0 && (
          <p className="text-center text-slate-500 mt-10">
            No poems found for "{search}"
          </p>
        )}
      </div>
    </main>
  );
}
