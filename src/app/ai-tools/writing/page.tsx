import React from 'react'

function WritingToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Writing Tools
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover powerful AI writing assistants that can help you create compelling content, 
            improve your writing, and boost your productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Content Writers</h3>
            <p className="text-gray-600 mb-4">AI tools that help create blog posts, articles, and marketing copy.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">Explore Tools</button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Grammar Checkers</h3>
            <p className="text-gray-600 mb-4">AI-powered grammar and style improvement tools.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">Explore Tools</button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Copywriting Assistants</h3>
            <p className="text-gray-600 mb-4">Tools for creating compelling marketing and sales copy.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">Explore Tools</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WritingToolsPage