export interface StatusItem {
  id: string;
  category: string;
  status: 'Normal' | 'Caution' | 'Warning' | 'New';
  description: string;
  iconName: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  type: 'General' | 'Visa' | 'Health' | 'Transport';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface FaqItem {
  question: string;
  answer: string;
}