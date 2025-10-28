import React from 'react'

function Searchinput() {
  return (
    <div>


<div className="max-w-2xl mx-auto px-4 mb-8 ">
      <div className="relative">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full px-5 py-3 pl-12 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#009865] focus:border-transparent transition"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>










    </div>
  )
}

export default Searchinput