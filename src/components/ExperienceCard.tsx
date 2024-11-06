import React from 'react';
import { Star, Clock, MapPin, Tag } from 'lucide-react';
import type { TravelExperience } from '../types';

interface ExperienceCardProps {
  experience: TravelExperience;
  onClick: (id: string) => void;
}

export default function ExperienceCard({ experience, onClick }: ExperienceCardProps) {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105"
      onClick={() => onClick(experience.id)}
    >
      <div className="relative h-48">
        <img
          src={experience.images[0]}
          alt={experience.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-gray-900">
          ${experience.price}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {experience.title}
          </h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">{experience.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{experience.location}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Clock className="h-4 w-4 mr-1" />
          <span>{experience.duration}</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {experience.tags.map((tag, index) => (
            <div 
              key={index}
              className="flex items-center px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}