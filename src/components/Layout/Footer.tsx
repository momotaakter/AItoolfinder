"use client";

import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-10 px-4 sm:px-6 lg:px-8 max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left Section */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="text-green-500 text-2xl">✨</div>
              <h2 className="text-xl font-semibold text-gray-900">AI Tool Finder</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Discover the best AI tools for your needs
            </p>
            <Mail className="text-gray-500" />
          </div>

          {/* Products */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-3">Products</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Latest Launches</li>
              <li>Top Products</li>
              <li>Upcoming</li>
              <li>Categories</li>
              <li>Trending</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Blog</li>
              <li>Latest News</li>
              <li>Guides</li>
              <li>Advertise</li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-3">Stay updated</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for the latest AI tools and news.
            </p>
            <div className="flex items-center max-w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
              />
              <button className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-r-lg">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-100 pt-6">
          © {new Date().getFullYear()} AI Tool Finder. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
