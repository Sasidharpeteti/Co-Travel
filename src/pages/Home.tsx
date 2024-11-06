import React, { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import ExperienceCard from '../components/ExperienceCard';
import type { TravelExperience } from '../types';

const SAMPLE_EXPERIENCES: TravelExperience[] = [
  {
    id: '1',
    title: 'Hidden Gems of Tokyo',
    description: 'Explore the lesser-known spots of Tokyo with a local guide.',
    location: 'Tokyo, Japan',
    price: 75,
    duration: '4 hours',
    guideId: 'guide1',
    tags: ['Culture', 'Food', 'Walking'],
    images: ['https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&h=300&fit=crop'],
    rating: 4.8,
    reviews: []
  },
  {
    id: '2',
    title: 'Street Food Adventure',
    description: 'Taste the best street food Bangkok has to offer.',
    location: 'Bangkok, Thailand',
    price: 45,
    duration: '3 hours',
    guideId: 'guide2',
    tags: ['Food', 'Local Life'],
    images: ['https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop'],
    rating: 4.9,
    reviews: []
  },
  {
    id: '3',
    title: 'Ancient Temple Trek',
    description: 'Discover hidden temples in the Cambodian jungle.',
    location: 'Siem Reap, Cambodia',
    price: 65,
    duration: '6 hours',
    guideId: 'guide3',
    tags: ['Adventure', 'History', 'Nature'],
    images: ['https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=500&h=300&fit=crop'],
    rating: 4.7,
    reviews: []
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  
  const locations = ['Tokyo, Japan', 'Bangkok, Thailand', 'Siem Reap, Cambodia'];

  const handleExperienceClick = (id: string) => {
    // Handle experience click - navigate to detail page
    console.log('Experience clicked:', id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Discover Authentic Travel Experiences
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Connect with local guides and like-minded travelers for unique adventures
        </p>
      </div>

      {/* Search Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          
          <div className="md:w-64">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <button className="flex items-center justify-center px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>
      </div>

      {/* Experiences Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_EXPERIENCES.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            onClick={handleExperienceClick}
          />
        ))}
      </div>
    </div>
  );
}