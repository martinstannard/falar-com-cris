export interface Phrase {
  id: string;
  portuguese: string;
  english: string;
  category: 'romantic' | 'everyday' | 'household';
  context?: string;
  audioUrl?: string;
}

export interface Card {
  id: string;
  phraseId: string;
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReview: Date;
  lastReviewed?: Date;
}

export interface Review {
  cardId: string;
  timestamp: Date;
  quality: 0 | 1 | 2 | 3 | 4 | 5;
  timeSpent: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
  progress: number;
  maxProgress: number;
}

export interface UserStats {
  totalReviews: number;
  currentStreak: number;
  longestStreak: number;
  cardsLearned: number;
  totalTimeSpent: number;
  lastStudyDate?: Date;
  studyDates: string[];
}

export interface AppState {
  phrases: Phrase[];
  cards: Card[];
  reviews: Review[];
  achievements: Achievement[];
  stats: UserStats;
}
