import React from 'react'

function VideoToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Video Tools
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your video content with AI-powered editing, generation, and enhancement tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Generation</h3>
            <p className="text-gray-600 mb-4">Create videos from text, images, or audio inputs.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">Explore Tools</button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Editing</h3>
            <p className="text-gray-600 mb-4">AI-powered video editing and enhancement tools.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">Explore Tools</button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Voice Synthesis</h3>
            <p className="text-gray-600 mb-4">Generate realistic voiceovers and audio for videos.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">Explore Tools</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoToolsPage