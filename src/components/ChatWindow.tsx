import React, { useState } from 'react';
import { Send, Lock, Unlock, AlertTriangle } from 'lucide-react';
import type { ChatMessage, User } from '../types';

interface ChatWindowProps {
  messages: ChatMessage[];
  currentUser: User;
  otherUser: User;
  onSendMessage: (content: string) => void;
  onRevealProfile: () => void;
  isProfileRevealed: boolean;
}

export default function ChatWindow({
  messages,
  currentUser,
  otherUser,
  onSendMessage,
  onRevealProfile,
  isProfileRevealed
}: ChatWindowProps) {
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg">
      {/* Chat Header */}
      <div className="p-4 border-b flex items-center justify-between bg-gray-50">
        <div className="flex items-center">
          <div className="relative">
            <img
              src={isProfileRevealed ? otherUser.avatar : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=faces'}
              alt={isProfileRevealed ? otherUser.name : 'Anonymous'}
              className="w-10 h-10 rounded-full object-cover"
            />
            {!isProfileRevealed && (
              <div className="absolute -right-1 -bottom-1">
                <Lock className="h-4 w-4 text-gray-500" />
              </div>
            )}
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-900">
              {isProfileRevealed ? otherUser.name : 'Anonymous User'}
            </h3>
            <p className="text-sm text-gray-500">
              {isProfileRevealed ? otherUser.location : 'Location hidden'}
            </p>
          </div>
        </div>
        
        {!isProfileRevealed && (
          <button
            onClick={onRevealProfile}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            <Unlock className="h-4 w-4 mr-2" />
            Reveal Profile
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {!isProfileRevealed && (
          <div className="flex items-center justify-center p-4 bg-yellow-50 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
            <p className="text-sm text-yellow-700">
              Profiles are hidden for safety. Reveal profiles after building trust.
            </p>
          </div>
        )}
        
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.senderId === currentUser.id ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg px-4 py-2 ${
                message.senderId === currentUser.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p>{message.content}</p>
              <span className="text-xs opacity-75 mt-1 block">
                {new Date(message.timestamp).toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <form onSubmit={handleSend} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}