export interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  travelStyle: string[];
  location: string;
  languages: string[];
  isGuide: boolean;
  rating?: number;
}

export interface TravelExperience {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  duration: string;
  guideId: string;
  tags: string[];
  images: string[];
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  isRevealed: boolean;
}

export interface JournalEntry {
  id: string;
  userId: string;
  title: string;
  content: string;
  location: string;
  date: string;
  images: string[];
  tags: string[];
  isPublic: boolean;
}

export interface TravelPlan {
  id: string;
  title: string;
  participants: string[];
  startDate: string;
  endDate: string;
  locations: string[];
  activities: Activity[];
  budget: Budget;
}

export interface Activity {
  id: string;
  title: string;
  date: string;
  location: string;
  cost: number;
  participants: string[];
}

export interface Budget {
  total: number;
  spent: number;
  categories: {
    [key: string]: number;
  };
}