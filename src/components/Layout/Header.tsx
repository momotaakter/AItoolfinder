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
      name: 'Launches',
      dropdown: [
        { name: 'Latest Launches', href: '/launches/latest', icon: '🚀' },
        { name: 'Upcoming', href: '/launches/upcoming', icon: '📅' },
      ]
    },
    {
      name: 'Product',
      dropdown: [
        { name: 'Top Product', href: '/product/top', icon: '🏆' },
        { name: 'Category', href: '/product/category', icon: '📂' },
        { name: 'Trending', href: '/product/trending', icon: '📈' },
      ]
    },
    {
      name: 'News',
      dropdown: [
        { name: 'Latest News', href: '/news/latest', icon: '📰' },
        { name: 'Blog', href: '/news/blog', icon: '📝' },
      ]
    },
    {
      name: 'Advertise',
      href: '/advertise'
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
                <div className="w-28 h-18 relative">
                  <Image
                    src="/logo/webbuddy.svg"
                    alt="AI Tool Finder"
                    width={72}
                    height={42}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-xl font-bold text-gray-900 hidden sm:block">
                  AI Tool Finder
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-1">
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

            {/* Desktop Right Side Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/submit-tool"
                className="flex items-center space-x-1 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
                onClick={closeAllDropdowns}
              >
                <span>+</span>
                <span>Submit Your Tool</span>
              </Link>
              <Link
                href="/login"
                className="text-gray-700 hover:text-emerald-600 px-4 py-2 text-sm font-medium transition-colors duration-200"
                onClick={closeAllDropdowns}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="bg-emerald-600 hover:bg-black text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
                onClick={closeAllDropdowns}
              >
                Sign Up
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

          {/* Mobile Navigation - Slide-in panel */}
          <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-white bg-opacity-50"
              onClick={closeAllDropdowns}
            />
            
            {/* Slide-in panel */}
            <div className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
              {/* Panel header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Link href="/" className="flex items-center space-x-2" onClick={closeAllDropdowns}>
                  <div className="w-28 h-18 relative">
                    <Image
                      src="/logo/webbuddy.svg"
                      alt="AI Tool Finder"
                      width={32}
                      height={32}
                      className="w-full h-full"
                    />
                  </div>
                 
                </Link>
                <button
                  onClick={closeAllDropdowns}
                  className="text-gray-500 hover:text-gray-700 p-2 transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation items */}
              <div className="overflow-y-auto h-[calc(100%-80px)]">
                <nav className="p-4 space-y-1">
                  {navigationItems.map((item) => (
                    item.dropdown ? (
                      <div key={item.name} className="space-y-1">
                        <div className="text-sm font-medium text-gray-500 px-3 py-2">
                          {item.name}
                        </div>
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center py-3 px-4 text-base text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                            onClick={closeAllDropdowns}
                          >
                            <span className="mr-3 text-lg">{dropdownItem.icon}</span>
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center py-3 px-4 text-base text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        onClick={closeAllDropdowns}
                      >
                        <span className="mr-3 text-lg">📢</span>
                        <span>{item.name}</span>
                      </Link>
                    )
                  ))}
                  
                  {/* Mobile CTA Buttons */}
                  <div className="pt-6 space-y-2 border-t border-gray-200 mt-3 pb-4 mb-5">
                    <Link
                      href="/submit-tool"
                      className="flex items-center justify-center space-x-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 text-base font-medium text-center rounded-lg transition-colors duration-200"
                      onClick={closeAllDropdowns}
                    >
                      <span>+</span>
                      <span>Submit Your Tool</span>
                    </Link>
                    <div className="flex space-x-2">
                      <Link
                        href="/login"
                        className="flex-1 bg-emerald-600  text-white hover:text-emerald-600 py-3 px-4 text-base font-medium text-center border border-gray-300 rounded-lg transition-colors duration-200"
                        onClick={closeAllDropdowns}
                      >
                        Sign In
                      </Link>
                      <Link
                        href="/signup"
                        className="flex-1 bg-emerald-600  hover:bg-black text-white py-3 px-4 text-base font-medium text-center rounded-lg transition-colors duration-200"
                        onClick={closeAllDropdowns}
                      >
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for dropdowns */}
        {activeDropdown && (
          <div
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setActiveDropdown(null)}
          />
        )}
      </header>

    </>
  )
}

export default Header