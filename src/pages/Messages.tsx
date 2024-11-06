import React, { useState } from 'react';
import ChatWindow from '../components/ChatWindow';
import type { ChatMessage, User } from '../types';

const SAMPLE_MESSAGES: ChatMessage[] = [
  {
    id: '1',
    senderId: 'user1',
    receiverId: 'user2',
    content: "Hi! I saw you're interested in exploring Tokyo next month?",
    timestamp: '2024-03-10T10:00:00Z',
    isRevealed: false,
  },
  {
    id: '2',
    senderId: 'user2',
    receiverId: 'user1',
    content: "Yes! I'm planning a trip and looking for travel companions",
    timestamp: '2024-03-10T10:05:00Z',
    isRevealed: false,
  },
];

const CURRENT_USER: User = {
  id: 'user1',
  name: 'Alex Thompson',
  avatar:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=faces',
  bio: 'Adventure seeker and photography enthusiast',
  travelStyle: ['Backpacker', 'Photography', 'Culture'],
  location: 'San Francisco, CA',
  languages: ['English', 'Spanish'],
  isGuide: false,
};

const OTHER_USER: User = {
  id: 'user2',
  name: 'Sarah Chen',
  avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=faces',
  bio: 'Local guide specializing in food tours',
  travelStyle: ['Foodie', 'Culture', 'Local Life'],
  location: 'Tokyo, Japan',
  languages: ['English', 'Japanese'],
  isGuide: true,
  rating: 4.9,
};

export default function Messages() {
  const [messages, setMessages] = useState(SAMPLE_MESSAGES);
  const [isProfileRevealed, setIsProfileRevealed] = useState(false);

  const handleSendMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      senderId: CURRENT_USER.id,
      receiverId: OTHER_USER.id,
      content,
      timestamp: new Date().toISOString(),
      isRevealed: isProfileRevealed,
    };
    setMessages([...messages, newMessage]);
  };

  const handleRevealProfile = () => {
    setIsProfileRevealed(true);
    // In a real app, this would require mutual agreement
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-4rem)]">
      <ChatWindow
        messages={messages}
        currentUser={CURRENT_USER}
        otherUser={OTHER_USER}
        onSendMessage={handleSendMessage}
        onRevealProfile={handleRevealProfile}
        isProfileRevealed={isProfileRevealed}
      />
    </div>
  );
}
