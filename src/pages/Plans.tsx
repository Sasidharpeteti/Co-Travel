import React, { useState } from 'react';
import { Calendar, DollarSign, Users, MapPin, Plus, ChevronDown } from 'lucide-react';
import type { TravelPlan } from '../types';

const SAMPLE_PLANS: TravelPlan[] = [
  {
    id: '1',
    title: 'Japan Adventure 2024',
    participants: ['user1', 'user2', 'user3'],
    startDate: '2024-04-10',
    endDate: '2024-04-20',
    locations: ['Tokyo', 'Kyoto', 'Osaka'],
    activities: [
      {
        id: 'a1',
        title: 'Tokyo Food Tour',
        date: '2024-04-11',
        location: 'Tokyo',
        cost: 75,
        participants: ['user1', 'user2']
      },
      {
        id: 'a2',
        title: 'Fushimi Inari Shrine',
        date: '2024-04-15',
        location: 'Kyoto',
        cost: 0,
        participants: ['user1', 'user2', 'user3']
      }
    ],
    budget: {
      total: 2000,
      spent: 850,
      categories: {
        accommodation: 500,
        activities: 200,
        food: 150
      }
    }
  }
];

export default function Plans() {
  const [plans] = useState(SAMPLE_PLANS);
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const togglePlan = (planId: string) => {
    setExpandedPlan(expandedPlan === planId ? null : planId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Travel Plans</h1>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          <Plus className="h-5 w-5 mr-2" />
          New Plan
        </button>
      </div>

      <div className="space-y-6">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div
              className="p-6 cursor-pointer hover:bg-gray-50 transition"
              onClick={() => togglePlan(plan.id)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{plan.title}</h2>
                  <div className="flex items-center mt-2 text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">
                      {new Date(plan.startDate).toLocaleDateString()} - {new Date(plan.endDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transform transition-transform ${
                    expandedPlan === plan.id ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </div>

            {expandedPlan === plan.id && (
              <div className="border-t px-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Participants */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      Participants
                    </h3>
                    <div className="flex -space-x-2">
                      {plan.participants.map((participant, index) => (
                        <div
                          key={participant}
                          className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium"
                        >
                          {participant[0].toUpperCase()}
                        </div>
                      ))}
                      <button className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center hover:bg-gray-200">
                        <Plus className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Locations */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      Locations
                    </h3>
                    <div className="space-y-2">
                      {plan.locations.map((location) => (
                        <div
                          key={location}
                          className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 mr-2"
                        >
                          {location}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <DollarSign className="h-5 w-5 mr-2" />
                      Budget Overview
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total Budget:</span>
                        <span className="font-medium">${plan.budget.total}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Spent:</span>
                        <span className="font-medium">${plan.budget.spent}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-indigo-600 h-2.5 rounded-full"
                          style={{ width: `${(plan.budget.spent / plan.budget.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Activities */}
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Activities</h3>
                  <div className="space-y-4">
                    {plan.activities.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <h4 className="font-medium text-gray-900">{activity.title}</h4>
                          <div className="flex items-center mt-1 text-sm text-gray-600">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(activity.date).toLocaleDateString()}
                            <MapPin className="h-4 w-4 ml-3 mr-1" />
                            {activity.location}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-gray-900">
                            ${activity.cost}
                          </span>
                          <div className="text-sm text-gray-600">
                            {activity.participants.length} participants
                          </div>
                        </div>
                      </div>
                    ))}
                    <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700 transition flex items-center justify-center">
                      <Plus className="h-5 w-5 mr-2" />
                      Add Activity
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}