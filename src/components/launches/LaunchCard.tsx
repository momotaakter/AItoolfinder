'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LaunchItem } from '@/data/mockLaunches';

interface LaunchCardProps {
  launch: LaunchItem;
}

const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating}</span>
      </div>
    );
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Writing': 'bg-blue-100 text-blue-800 border-blue-200',
      'Code': 'bg-purple-100 text-purple-800 border-purple-200',
      'Image': 'bg-pink-100 text-pink-800 border-pink-200',
      'Audio': 'bg-orange-100 text-orange-800 border-orange-200',
      'Video': 'bg-red-100 text-red-800 border-red-200',
      'Research': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'Marketing': 'bg-green-100 text-green-800 border-green-200',
      'Productivity': 'bg-emerald-100 text-emerald-800 border-emerald-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 overflow-hidden group cursor-pointer">
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50 via-emerald-50 to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <span className="text-3xl">🚀</span>
          </div>
        </div>
        {launch.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
              ⭐ Featured
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className={`${getCategoryColor(launch.category)} text-xs font-semibold px-3 py-1.5 rounded-full border shadow-sm`}>
            {launch.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title and Rating */}
        <div className="mb-4">
          <h3 className="font-bold text-gray-900 text-xl leading-tight mb-3 group-hover:text-emerald-600 transition-colors">
            {launch.name}
          </h3>
          <div className="flex items-center justify-between">
            {renderStars(launch.rating)}
            <span className="text-sm text-gray-500 font-medium">{launch.reviews.toLocaleString()} reviews</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {launch.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {launch.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="bg-gray-50 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200"
            >
              {tag}
            </span>
          ))}
          {launch.tags.length > 2 && (
            <span className="bg-gray-50 text-gray-500 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200">
              +{launch.tags.length - 2}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-5 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <span className={`text-sm font-semibold ${
              launch.pricing === 'Freemium'
                ? 'text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg'
                : 'text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg'
            }`}>
              {launch.pricing}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-500 font-medium">
              {formatDate(launch.launchDate)}
            </span>
          </div>
          <Link
            href={launch.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-sm"
          >
            Visit →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaunchCard;