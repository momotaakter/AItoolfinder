
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flame,
  Star,
  Tag,
  DollarSign,
  RefreshCw,
  Search,
  X,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Award,
  Filter,
  FolderOpen,
  Zap
} from "lucide-react";

// Mock data for AI tools with enhanced properties
const mockTools = [
  { 
    id: 1, 
    name: "ChatGPT", 
    category: "Writing", 
    description: "Advanced AI language model for conversation and content creation", 
    rating: 4.8, 
    reviews: 12500, 
    isFree: true, 
    isPaid: true, 
    tags: ["AI", "Writing", "Productivity"],
    image: "/api/placeholder/300/200",
    trending: true,
    featured: true,
    launchDate: "2022-11-30"
  },
  { 
    id: 2, 
    name: "Midjourney", 
    category: "Image", 
    description: "AI-powered image generation from text descriptions", 
    rating: 4.7, 
    reviews: 8900, 
    isFree: false, 
    isPaid: true, 
    tags: ["AI", "Image", "Creative"],
    image: "/api/placeholder/300/200",
    trending: true,
    featured: false,
    launchDate: "2022-07-12"
  },
  { 
    id: 3, 
    name: "Grammarly", 
    category: "Writing", 
    description: "AI writing assistant for grammar and style improvements", 
    rating: 4.6, 
    reviews: 15600, 
    isFree: true, 
    isPaid: true, 
    tags: ["Writing", "Grammar", "Productivity"],
    image: "/api/placeholder/300/200",
    trending: false,
    featured: true,
    launchDate: "2009-01-01"
  },
  { 
    id: 4, 
    name: "DALL-E", 
    category: "Image", 
    description: "Create realistic images and art from natural language descriptions", 
    rating: 4.5, 
    reviews: 7200, 
    isFree: true, 
    isPaid: true, 
    tags: ["AI", "Image", "Creative"],
    image: "/api/placeholder/300/200",
    trending: true,
    featured: false,
    launchDate: "2021-01-05"
  },
  { 
    id: 5, 
    name: "Notion AI", 
    category: "Productivity", 
    description: "AI-powered workspace for notes, tasks, and databases", 
    rating: 4.4, 
    reviews: 5400, 
    isFree: true, 
    isPaid: true, 
    tags: ["Productivity", "Notes", "AI"],
    image: "/api/placeholder/300/200",
    trending: false,
    featured: false,
    launchDate: "2023-02-22"
  },
  { 
    id: 6, 
    name: "Runway ML", 
    category: "Video", 
    description: "Creative suite for video editing with AI tools", 
    rating: 4.3, 
    reviews: 3200, 
    isFree: true, 
    isPaid: true, 
    tags: ["Video", "Creative", "AI"],
    image: "/api/placeholder/300/200",
    trending: true,
    featured: false,
    launchDate: "2018-01-01"
  },
  { 
    id: 7, 
    name: "Jasper", 
    category: "Marketing", 
    description: "AI content creation platform for marketing teams", 
    rating: 4.2, 
    reviews: 6800, 
    isFree: false, 
    isPaid: true, 
    tags: ["Marketing", "Content", "AI"],
    image: "/api/placeholder/300/200",
    trending: false,
    featured: false,
    launchDate: "2021-02-01"
  },
  { 
    id: 8, 
    name: "Copy.ai", 
    category: "Writing", 
    description: "AI writing tool for marketing copy and content", 
    rating: 4.1, 
    reviews: 4200, 
    isFree: true, 
    isPaid: true, 
    tags: ["Writing", "Marketing", "AI"],
    image: "/api/placeholder/300/200",
    trending: false,
    featured: false,
    launchDate: "2020-10-01"
  },
  { 
    id: 9, 
    name: "Synthesia", 
    category: "Video", 
    description: "Create AI-generated videos with virtual presenters", 
    rating: 4.0, 
    reviews: 2900, 
    isFree: false, 
    isPaid: true, 
    tags: ["Video", "AI", "Presentation"],
    image: "/api/placeholder/300/200",
    trending: true,
    featured: false,
    launchDate: "2018-01-01"
  },
  { 
    id: 10, 
    name: "Beautiful.AI", 
    category: "Productivity", 
    description: "AI-powered presentation maker with smart templates", 
    rating: 4.4, 
    reviews: 1800, 
    isFree: true, 
    isPaid: true, 
    tags: ["Productivity", "Presentation", "AI"],
    image: "/api/placeholder/300/200",
    trending: false,
    featured: false,
    launchDate: "2015-01-01"
  },
  { 
    id: 11, 
    name: "Descript", 
    category: "Audio", 
    description: "Audio and video editing with AI transcription", 
    rating: 4.3, 
    reviews: 2500, 
    isFree: true, 
    isPaid: true, 
    tags: ["Audio", "Video", "Editing"],
    image: "/api/placeholder/300/200",
    trending: false,
    featured: false,
    launchDate: "2017-01-01"
  },
  { 
    id: 12, 
    name: "Otter.ai", 
    category: "Audio", 
    description: "AI-powered meeting transcription and note-taking", 
    rating: 4.2, 
    reviews: 3600, 
    isFree: true, 
    isPaid: true, 
    tags: ["Audio", "Transcription", "Productivity"],
    image: "/api/placeholder/300/200",
    trending: false,
    featured: false,
    launchDate: "2016-01-01"
  },
  { 
    id: 13, 
    name: "Canva AI", 
    category: "Design", 
    description: "AI-powered design tools within Canva platform", 
    rating: 4.5, 
    reviews: 8900, 
    isFree: true, 
    isPaid: true, 
    tags: ["Design", "Creative", "AI"],
    image: "/api/placeholder/300/200",
    trending: true,
    featured: true,
    launchDate: "2023-03-21"
  },
  { 
    id: 14, 
    name: "Fireflies.ai", 
    category: "Productivity", 
    description: "AI meeting assistant for transcription and analysis", 
    rating: 4.1, 
    reviews: 2100, 
    isFree: true, 
    isPaid: true, 
    tags: ["Productivity", "Transcription", "AI"],
    image: "/api/placeholder/300/200",
    trending: false,
    featured: false,
    launchDate: "2016-01-01"
  },
  { 
    id: 15, 
    name: "Lensa AI", 
    category: "Image", 
    description: "AI photo editing and enhancement tool", 
    rating: 4.0, 
    reviews: 1500, 
    isFree: true, 
    isPaid: true, 
    tags: ["Image", "Photo", "AI"],
    image: "/api/placeholder/300/200",
    trending: true,
    featured: false,
    launchDate: "2018-01-01"
  },
  { 
    id: 16, 
    name: "QuillBot", 
    category: "Writing", 
    description: "AI paraphrasing tool for better writing", 
    rating: 4.3, 
    reviews: 4700, 
    isFree: true, 
    isPaid: true, 
    tags: ["Writing", "Paraphrasing", "AI"],
    image: "/api/placeholder/300/200",
    trending: false,
    featured: false,
    launchDate: "2017-01-01"
  },
  { 
    id: 17, 
    name: "Murf AI", 
    category: "Audio", 
    description: "AI voice generator for text-to-speech", 
    rating: 4.2, 
    reviews: 1900, 
    isFree: true, 
    isPaid: true, 
    tags: ["Audio", "Voice", "AI"],
    image: "/api/placeholder/300/200",
    trending: false,
    featured: false,
    launchDate: "2020-01-01"
  },
  { 
    id: 18, 
    name: "Gamma", 
    category: "Productivity", 
    description: "AI presentation generator from text content", 
    rating: 4.1, 
    reviews: 1200, 
    isFree: true, 
    isPaid: true, 
    tags: ["Productivity", "Presentation", "AI"],
    image: "/api/placeholder/300/200",
    trending: false,
    featured: false,
    launchDate: "2020-01-01"
  }
];

// Categories for filtering
const categories = ["All", "Writing", "Image", "Video", "Audio", "Productivity", "Marketing", "Design", "Research", "Code"];

// Sorting options
const sortOptions = [
  { value: "rating", label: "Highest Rated" },
  { value: "reviews", label: "Most Reviews" },
  { value: "trending", label: "Trending" },
  { value: "newest", label: "Newest" },
  { value: "name", label: "Alphabetical" }
];

export default function ToolsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("rating");
  const [priceFilter, setPriceFilter] = useState("all");
  const [showTrending, setShowTrending] = useState(false);
  const [showFeatured, setShowFeatured] = useState(false);
  const [visibleTools, setVisibleTools] = useState(9);
  const [isSearching, setIsSearching] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Filter tools based on all criteria
  const filteredTools = mockTools.filter(tool => {
    const matchesSearch = searchQuery === "" || 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    
    const matchesPrice = 
      priceFilter === "all" ||
      (priceFilter === "free" && tool.isFree) ||
      (priceFilter === "paid" && tool.isPaid);
    
    const matchesTrending = !showTrending || tool.trending;
    const matchesFeatured = !showFeatured || tool.featured;

    return matchesSearch && matchesCategory && matchesPrice && matchesTrending && matchesFeatured;
  });

  // Sort tools
  const sortedTools = [...filteredTools].sort((a, b) => {
    switch (selectedSort) {
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviews - a.reviews;
      case "trending":
        return (b.trending ? 1 : 0) - (a.trending ? 1 : 0) || b.rating - a.rating;
      case "newest":
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const displayedTools = sortedTools.slice(0, visibleTools);

  const loadMore = () => setVisibleTools(prev => Math.min(prev + 9, sortedTools.length));
  
  const clearSearch = () => { 
    setSearchQuery(""); 
    setSelectedCategory("All"); 
    setSelectedSort("rating");
    setPriceFilter("all");
    setShowTrending(false);
    setShowFeatured(false);
    setIsSearching(false); 
    setVisibleTools(9); 
  };

  useEffect(() => {
    setIsSearching(searchQuery !== "" || selectedCategory !== "All" || priceFilter !== "all" || showTrending || showFeatured);
  }, [searchQuery, selectedCategory, priceFilter, showTrending, showFeatured]);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        

        {/* Advanced Search & Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Input */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search AI tools by name, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    title="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Button */}
            <div>
              <button
                className="flex items-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-xl"
              >
                <Filter size={16} />
                Filters
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Tools Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${searchQuery}-${selectedCategory}-${selectedSort}-${priceFilter}-${visibleTools}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-full"
          >
            {displayedTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.03, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)" }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden group cursor-pointer relative max-w-full"
              >
                
                {/* Tool Image */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  {tool.trending && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                      <TrendingUp size={14} />
                      Trending
                    </div>
                  )}
                  {tool.featured && (
                    <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star size={14} />
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{tool.name}</h3>
                      <motion.span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold rounded-full border border-blue-200">
                        {tool.category}
                      </motion.span>
                    </div>
                    <motion.div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200">
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold text-gray-800">{tool.rating}</span>
                      <span className="text-xs text-gray-500">({tool.reviews})</span>
                    </motion.div>
                  </div>

                  <motion.p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {tool.description}
                  </motion.p>

                  <motion.div className="flex flex-wrap gap-2 mb-4">
                    {tool.tags.slice(0, 3).map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-200 shadow-sm"
                        whileHover={{ scale: 1.1, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", color: "white" }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {tool.tags.length > 3 && (
                      <motion.span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        +{tool.tags.length - 3}
                      </motion.span>
                    )}
                  </motion.div>

                  <motion.div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex gap-2">
                      {tool.isFree && (
                        <motion.span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-lg border border-green-200 shadow-sm">
                          <Tag size={12} />
                          Free
                        </motion.span>
                      )}
                      {tool.isPaid && (
                        <motion.span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-lg border border-blue-200 shadow-sm">
                          <DollarSign size={12} />
                          Paid
                        </motion.span>
                      )}
                    </div>
                    <motion.button
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore →
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        {visibleTools < sortedTools.length && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="text-center"
          >
            <motion.button
              onClick={loadMore}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-transparent"
              whileHover={{ scale: 1.05, y: -3, boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw size={16} />
              Load More ({Math.min(9, sortedTools.length - visibleTools)} more)
            </motion.button>
          </motion.div>
        )}

        {/* No Results */}
        {filteredTools.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-center py-16"
          >
            <motion.div
              className="text-8xl mb-6"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Search size={64} />
            </motion.div>
            <motion.h3 className="text-3xl font-bold text-gray-900 mb-4">
              No tools found
            </motion.h3>
            <motion.p className="text-gray-600 mb-8 text-lg max-w-md mx-auto leading-relaxed">
              {isSearching ? "No AI tools match your search criteria. Try different keywords or categories." : "No AI tools available in this category."}
            </motion.p>
            <motion.button
              onClick={clearSearch}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Clear Search & Show All
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}