import React from 'react'
import Link from 'next/link'

function ResourcesPage() {
  const resources = [
    {
      name: 'AI Guides',
      description: 'Comprehensive guides covering everything from AI basics to advanced techniques. Learn how to integrate AI tools into your workflow effectively.',
      href: '/resources/guides',
      icon: '📚',
      action: 'Read Guides'
    },
    {
      name: 'Tutorials',
      description: 'Step-by-step tutorials showing you how to use specific AI tools and features. Perfect for hands-on learning and practical application.',
      href: '/resources/tutorials',
      icon: '🎯',
      action: 'View Tutorials'
    },
    {
      name: 'Blog',
      description: 'Stay updated with the latest AI trends, tool reviews, and industry insights. Our blog covers everything happening in the AI space.',
      href: '/resources/blog',
      icon: '📝',
      action: 'Read Blog'
    },
    {
      name: 'Newsletter',
      description: 'Get weekly updates on new AI tools, features, and industry news delivered straight to your inbox. Never miss an important update.',
      href: '/resources/newsletter',
      icon: '📧',
      action: 'Subscribe'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Resources & Learning
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Learn how to effectively use AI tools with our comprehensive resources, guides, and tutorials designed for all skill levels.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learning Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our collection of educational content to master AI tools and stay ahead in the rapidly evolving AI landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <Link
                key={resource.name}
                href={resource.href}
                className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-[hsl(151_55%_50%)] hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{resource.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[hsl(151_55%_50%)] transition-colors">
                    {resource.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {resource.description}
                </p>
                <div className="text-[hsl(151_55%_50%)] font-medium text-lg group-hover:underline">
                  {resource.action} →
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
              Start Your AI Journey Today
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our community of AI enthusiasts and professionals who are transforming their workflows with artificial intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-[hsl(151_55%_50%)] hover:bg-[hsl(151_55%_45%)] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Join Community
              </Link>
              <Link
                href="/ai-tools"
                className="border border-gray-300 hover:border-[hsl(151_55%_50%)] text-gray-700 hover:text-[hsl(151_55%_50%)] px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
              >
                Explore Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[hsl(151_55%_50%)] mb-2">100+</div>
              <div className="text-gray-600">Guides</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[hsl(151_55%_50%)] mb-2">50+</div>
              <div className="text-gray-600">Tutorials</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[hsl(151_55%_50%)] mb-2">5K+</div>
              <div className="text-gray-600">Readers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[hsl(151_55%_50%)] mb-2">Weekly</div>
              <div className="text-gray-600">Updates</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResourcesPage