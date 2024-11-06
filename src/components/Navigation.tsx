import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Compass, Users, MessageCircle, Calendar, BookOpen, 
  Map, Bell, UserCircle, Menu, X 
} from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: 'Explore', href: '/', icon: Compass },
    { name: 'Connections', href: '/connections', icon: Users },
    { name: 'Messages', href: '/messages', icon: MessageCircle },
    { name: 'Plans', href: '/plans', icon: Calendar },
    { name: 'Journal', href: '/journal', icon: BookOpen },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Map className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TravelMate</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium
                    ${location.pathname === item.href
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-500 hover:text-gray-900 hover:border-gray-300'
                    }`}
                >
                  <Icon className="h-5 w-5 mr-1" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-900">
              <Bell className="h-6 w-6" />
            </button>
            <Link to="/profile" className="p-2 text-gray-500 hover:text-gray-900">
              <UserCircle className="h-6 w-6" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-2 text-base font-medium
                    ${location.pathname === item.href
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}