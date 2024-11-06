import React, { useState } from 'react';
import { AlertCircle, Phone, MapPin, X } from 'lucide-react';

export default function SafetyButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);

  const handleEmergency = () => {
    setIsEmergencyActive(true);
    // In a real app, this would trigger emergency protocols
    // Such as sending location to emergency contacts
    // And potentially contacting local authorities
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-4 right-4 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors z-50"
      >
        <AlertCircle className="h-6 w-6" />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Emergency Help</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {isEmergencyActive ? (
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-800 font-semibold">Emergency Mode Active</p>
                  <p className="text-red-600 text-sm mt-1">
                    Your location is being shared with your emergency contacts.
                    Help is on the way.
                  </p>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Location tracking active</span>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-2">Emergency Contacts:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Local Emergency</span>
                      <a href="tel:911" className="text-blue-600 flex items-center">
                        <Phone className="h-4 w-4 mr-1" />
                        911
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-600">
                  Activate emergency mode to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Share your live location with emergency contacts</li>
                  <li>Alert local authorities if necessary</li>
                  <li>Send SOS message to nearby users</li>
                </ul>
                
                <button
                  onClick={handleEmergency}
                  className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Activate Emergency Mode
                </button>
                
                <p className="text-sm text-gray-500 text-center">
                  Only use in case of real emergency
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}