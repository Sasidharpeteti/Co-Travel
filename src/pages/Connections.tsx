import React, { useState } from 'react';
import { Users, Star, MessageCircle, MapPin, Globe } from 'lucide-react';
import type { User } from '../types';

const SAMPLE_USERS: User[] = [
  {
    id: 'guide1',
    name: 'Yuki Tanaka',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
    bio: 'Professional guide specializing in cultural experiences',
    travelStyle: ['Culture', 'Food', 'History'],
    location: 'Tokyo, Japan',
    languages: ['Japanese', 'English'],
    isGuide: true,
    rating: 4.9
  },
  {
    id: 'user1',
    name: 'Emma Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    bio: 'Adventure seeker looking for authentic experiences',
    travelStyle: ['Adventure', 'Photography', 'Nature'],
    location: 'London, UK',
    languages: ['English', 'French'],
    isGuide: false
  },
  {
    id: 'guide2',
    name: 'Marco Rossi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    bio: 'Food tour specialist with a passion for local cuisine',
    travelStyle: ['Food', 'Culture', 'Walking'],
    location: 'Rome, Italy',
    languages: ['Italian', 'English', 'Spanish'],
    isGuide: true,
    rating: 4.8
  }
];

export default function Connections() {
  const [users] = useState(SAMPLE_USERS);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Find Connections</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
            Filters
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
            onClick={() => setSelectedUser(user)}
          >
            <div className="relative h-48">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover"
              />
              {user.isGuide && (
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Guide
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
                  <div className="flex items-center mt-1 text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{user.location}</span>
                  </div>
                </div>
                {user.isGuide && (
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-5 w-5 mr-1" />
                    <span className="font-medium">{user.rating}</span>
                  </div>
                )}
              </div>

              <p className="text-gray-600 text-sm mb-4">{user.bio}</p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Globe className="h-4 w-4 mr-2" />
                  {user.languages.join(', ')}
                </div>

                <div className="flex flex-wrap gap-2">
                  {user.travelStyle.map((style, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t px-6 py-4">
              <button className="w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                <MessageCircle className="h-5 w-5 mr-2" />
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* User Profile Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64">
              <img
                src={selectedUser.avatar}
                alt={selectedUser.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedUser(null)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
              >
                ×
              </button>
              {selectedUser.isGuide && (
                <div className="absolute bottom-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                  <Star className="h-4 w-4 mr-2" />
                  {selectedUser.rating} Guide Rating
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedUser.name}
                </h2>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  {selectedUser.location}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
                  <p className="text-gray-600">{selectedUser.bio}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Languages</h3>
                  <div className="flex items-center space-x-2">
                    {selectedUser.languages.map((language) => (
                      <span
                        key={language}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Travel Style
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedUser.travelStyle.map((style) => (
                      <span
                        key={style}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                      >
                        {style}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <button className="flex-1 flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Start Chat
                </button>
                <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                  <Users className="h-5 w-5 mr-2" />
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}