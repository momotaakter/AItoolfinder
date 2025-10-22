import React from 'react'
import Link from 'next/link'

function AIToolsPage() {
  const toolCategories = [
    {
      name: 'Writing Tools',
      description: 'AI-powered writing assistants and content creators',
      href: '/ai-tools/writing',
      icon: '✍️',
      count: '150+ Tools'
    },
    {
      name: 'Image Generators',
      description: 'Create stunning visuals with AI image generation',
      href: '/ai-tools/image',
      icon: '🖼️',
      count: '80+ Tools'
    },
    {
      name: 'Video Tools',
      description: 'AI-powered video editing and generation tools',
      href: '/ai-tools/video',
      icon: '🎬',
      count: '45+ Tools'
    },
    {
      name: 'Audio Tools',
      description: 'Voice synthesis and audio enhancement tools',
      href: '/ai-tools/audio',
      icon: '🎵',
      count: '35+ Tools'
    },
    {
      name: 'Code Assistants',
      description: 'AI tools for developers and programmers',
      href: '/ai-tools/code',
      icon: '💻',
      count: '60+ Tools'
    },
    {
      name: 'Productivity Tools',
      description: 'AI tools to boost your efficiency and workflow',
      href: '/ai-tools/productivity',
      icon: '⚡',
      count: '90+ Tools'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Tools Collection
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explore our comprehensive collection of AI tools across different categories to enhance your workflow and boost productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect AI tools for your specific needs across various categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-[hsl(151_55%_50%)] hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-2xl">{category.icon}</div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[hsl(151_55%_50%)] transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="text-[hsl(151_55%_50%)] font-medium group-hover:underline">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let us help you discover the perfect AI tools for your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources"
                className="bg-[hsl(151_55%_50%)] hover:bg-[hsl(151_55%_45%)] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Get Help
              </Link>
              <Link
                href="/categories"
                className="border border-gray-300 hover:border-[hsl(151_55%_50%)] text-gray-700 hover:text-[hsl(151_55%_50%)] px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
              >
                Browse All Categories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AIToolsPage