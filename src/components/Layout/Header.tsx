'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    {
      name: 'AI Tools',
      href: '/ai-tools',
      dropdown: [
        { name: 'AI Writing Tools', href: '/ai-tools/writing', icon: '✍️' },
        { name: 'AI Image Generators', href: '/ai-tools/image', icon: '🖼️' },
        { name: 'AI Video Tools', href: '/ai-tools/video', icon: '🎬' },
        { name: 'AI Audio Tools', href: '/ai-tools/audio', icon: '🎵' },
        { name: 'AI Code Assistants', href: '/ai-tools/code', icon: '💻' },
        { name: 'AI Productivity Tools', href: '/ai-tools/productivity', icon: '⚡' },
        { name: 'AI Marketing Tools', href: '/ai-tools/marketing', icon: '📈' },
        { name: 'AI Research Tools', href: '/ai-tools/research', icon: '🔬' },
      ]
    },
    {
      name: 'Categories',
      href: '/categories',
      dropdown: [
        { name: 'Writing & Content', href: '/categories/writing', icon: '📝' },
        { name: 'Design & Image', href: '/categories/design', icon: '🎨' },
        { name: 'Video & Audio', href: '/categories/video-audio', icon: '🎥' },
        { name: 'Development', href: '/categories/development', icon: '👨‍💻' },
        { name: 'Marketing', href: '/categories/marketing', icon: '📊' },
        { name: 'Productivity', href: '/categories/productivity', icon: '🚀' },
        { name: 'Research', href: '/categories/research', icon: '🔍' },
        { name: 'Business', href: '/categories/business', icon: '💼' },
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      dropdown: [
        { name: 'AI Guides', href: '/resources/guides', icon: '📚' },
        { name: 'Tutorials', href: '/resources/tutorials', icon: '🎓' },
        { name: 'Blog', href: '/resources/blog', icon: '📰' },
        { name: 'Newsletter', href: '/resources/newsletter', icon: '📧' },
        { name: 'Community', href: '/resources/community', icon: '👥' },
        { name: 'API Docs', href: '/resources/api', icon: '🔧' },
      ]
    },
    {
      name: 'Pricing',
      href: '/pricing'
    }
  ]

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const closeAllDropdowns = () => {
    setActiveDropdown(null)
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Main Header */}
      <header className={`bg-white border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-sm' : ''
      }`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2" onClick={closeAllDropdowns}>
                <div className="w-8 h-8 relative">
                  <Image 
                    src="/logo/logo-icon.svg" 
                    alt="AI Tool Finder" 
                    width={32} 
                    height={32}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-xl font-bold text-gray-900 hidden sm:block">
                  AI Tool Finder
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="text-gray-700 hover:text-emerald-600 px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center group"
                      >
                        {item.name}
                        <svg
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown Menu */}
                      {activeDropdown === item.name && (
                        <div 
                          className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-3 z-50"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-colors duration-200 group"
                              onClick={closeAllDropdowns}
                            >
                              <span className="mr-3 text-lg">{dropdownItem.icon}</span>
                              <span>{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-emerald-600 px-4 py-2 text-sm font-medium transition-colors duration-200"
                      onClick={closeAllDropdowns}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-700 hover:text-emerald-600 px-4 py-2 text-sm font-medium transition-colors duration-200"
                onClick={closeAllDropdowns}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
                onClick={closeAllDropdowns}
              >
                Get Started Free
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-emerald-600 p-2 transition-colors duration-200"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4 bg-white">
              <div className="space-y-1">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div className="border-b border-gray-100">
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex justify-between items-center w-full text-left text-gray-700 hover:text-emerald-600 py-3 px-4 text-base font-medium"
                        >
                          <span>{item.name}</span>
                          <svg
                            className={`h-4 w-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {activeDropdown === item.name && (
                          <div className="pl-6 space-y-1 pb-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center py-2 px-4 text-sm text-gray-600 hover:text-emerald-600 hover:bg-gray-50 rounded transition-colors duration-200"
                                onClick={closeAllDropdowns}
                              >
                                <span className="mr-3 text-base">{dropdownItem.icon}</span>
                                <span>{dropdownItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-gray-700 hover:text-emerald-600 py-3 px-4 text-base font-medium border-b border-gray-100"
                        onClick={closeAllDropdowns}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="pt-4 space-y-2 border-t border-gray-200 mt-2">
                  <Link
                    href="/login"
                    className="block text-gray-700 hover:text-emerald-600 py-3 px-4 text-base font-medium"
                    onClick={closeAllDropdowns}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 text-base font-medium text-center rounded-lg transition-colors duration-200 mx-4"
                    onClick={closeAllDropdowns}
                  >
                    Get Started Free
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Overlay for dropdowns */}
        {activeDropdown && (
          <div
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setActiveDropdown(null)}
          />
        )}
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 shadow-lg">
        <div className="flex justify-around items-center py-3">
          <Link href="/" className="flex flex-col items-center text-emerald-600" onClick={closeAllDropdowns}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </Link>
          
          <Link href="/ai-tools" className="flex flex-col items-center text-gray-600 hover:text-emerald-600" onClick={closeAllDropdowns}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-xs mt-1">Tools</span>
          </Link>
          
          <Link href="/categories" className="flex flex-col items-center text-gray-600 hover:text-emerald-600" onClick={closeAllDropdowns}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span className="text-xs mt-1">Categories</span>
          </Link>
          
          <Link href="/resources" className="flex flex-col items-center text-gray-600 hover:text-emerald-600" onClick={closeAllDropdowns}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-xs mt-1">Resources</span>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Header