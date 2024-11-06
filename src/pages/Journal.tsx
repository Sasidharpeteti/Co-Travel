import React, { useState } from 'react';
import { Camera, MapPin, Calendar, Tag, Globe, Lock } from 'lucide-react';
import type { JournalEntry } from '../types';

const SAMPLE_ENTRIES: JournalEntry[] = [
  {
    id: '1',
    userId: 'user1',
    title: 'Cherry Blossom Season in Kyoto',
    content: 'Experiencing the magical hanami season in Japan...',
    location: 'Kyoto, Japan',
    date: '2024-03-25',
    images: ['https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&h=400&fit=crop'],
    tags: ['Nature', 'Culture', 'Spring'],
    isPublic: true
  },
  {
    id: '2',
    userId: 'user1',
    title: 'Hidden Waterfall Trek',
    content: 'Found this amazing secret spot off the tourist trail...',
    location: 'Bali, Indonesia',
    date: '2024-02-15',
    images: ['https://images.unsplash.com/photo-1513977055326-8ae6272d90a7?w=800&h=400&fit=crop'],
    tags: ['Adventure', 'Nature', 'Hiking'],
    isPublic: false
  }
];

export default function Journal() {
  const [entries, setEntries] = useState(SAMPLE_ENTRIES);
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Travel Journal</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          New Entry
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
            onClick={() => setSelectedEntry(entry)}
          >
            <div className="relative h-48">
              <img
                src={entry.images[0]}
                alt={entry.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                {entry.isPublic ? (
                  <Globe className="h-5 w-5 text-white" />
                ) : (
                  <Lock className="h-5 w-5 text-white" />
                )}
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {entry.title}
              </h2>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {entry.location}
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(entry.date).toLocaleDateString()}
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {entry.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 bg-gray-100rounded-full text-sm text-gray-600">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Entry Modal */}
      {selectedEntry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedEntry.images[0]}
                alt={selectedEntry.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedEntry(null)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedEntry.title}
                </h2>
                <div className="flex items-center text-gray-600">
                  {selectedEntry.isPublic ? (
                    <>
                      <Globe className="h-5 w-5 mr-1" />
                      <span className="text-sm">Public</span>
                    </>
                  ) : (
                    <>
                      <Lock className="h-5 w-5 mr-1" />
                      <span className="text-sm">Private</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-4 space-x-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {selectedEntry.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(selectedEntry.date).toLocaleDateString()}
                </div>
              </div>

              <p className="text-gray-700 mb-6">{selectedEntry.content}</p>

              <div className="flex flex-wrap gap-2">
                {selectedEntry.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}