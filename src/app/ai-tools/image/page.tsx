import React from 'react'

function ImageToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Image Generators
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create stunning visuals, artwork, and designs with cutting-edge AI image generation technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Text-to-Image</h3>
            <p className="text-gray-600 mb-4">Generate images from text descriptions and prompts.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">Explore Tools</button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Image Enhancement</h3>
            <p className="text-gray-600 mb-4">AI tools for upscaling, restoring, and improving images.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">Explore Tools</button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Style Transfer</h3>
            <p className="text-gray-600 mb-4">Apply artistic styles and filters to your images.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">Explore Tools</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageToolsPage