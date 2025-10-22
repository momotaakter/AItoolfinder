import React from 'react'
import Link from 'next/link'

function CategoriesPage() {
  const categories = [
    {
      name: 'Writing & Content',
      description: 'Tools for content creation, writing assistance, and copywriting',
      href: '/categories/writing',
      icon: '📝',
      count: '150+ Tools'
    },
    {
      name: 'Design & Image',
      description: 'AI tools for graphic design, image generation, and visual content',
      href: '/categories/design',
      icon: '🎨',
      count: '80+ Tools'
    },
    {
      name: 'Video & Audio',
      description: 'Tools for video editing, audio processing, and multimedia creation',
      href: '/categories/video',
      icon: '🎬',
      count: '45+ Tools'
    },
    {
      name: 'Development',
      description: 'AI tools for coding, debugging, and software development',
      href: '/categories/development',
      icon: '💻',
      count: '60+ Tools'
    },
    {
      name: 'Marketing',
      description: 'AI-powered marketing tools and analytics platforms',
      href: '/categories/marketing',
      icon: '📊',
      count: '40+ Tools'
    },
    {
      name: 'Productivity',
      description: 'Tools to enhance workflow efficiency and task management',
      href: '/categories/productivity',
      icon: '⚡',
      count: '90+ Tools'
    },
    {
      name: 'Research & Analysis',
      description: 'AI tools for data analysis, research, and insights generation',
      href: '/categories/research',
      icon: '🔍',
      count: '35+ Tools'
    },
    {
      name: 'Education',
      description: 'AI-powered learning tools and educational platforms',
      href: '/categories/education',
      icon: '🎓',
      count: '25+ Tools'
    },
    {
      name: 'Business',
      description: 'AI solutions for business operations and management',
      href: '/categories/business',
      icon: '🏢',
      count: '55+ Tools'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Tool Categories
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Browse AI tools organized by categories to find exactly what you need for your specific use case and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive collection of AI tools across various specialized categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
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
                  Browse →
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
              Need Help Choosing?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our AI tool matching system can recommend the perfect tools based on your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ai-tools"
                className="bg-[hsl(151_55%_50%)] hover:bg-[hsl(151_55%_45%)] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Find Tools
              </Link>
              <Link
                href="/resources"
                className="border border-gray-300 hover:border-[hsl(151_55%_50%)] text-gray-700 hover:text-[hsl(151_55%_50%)] px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
              >
                Get Recommendations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CategoriesPage