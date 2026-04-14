import type { AppState, Achievement } from '../types';
import { phrases } from '../data/phrases';
import { initializeCard } from './spacedRepetition';

const STORAGE_KEY = 'falar-com-cris-app-state';

export function loadState(): AppState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Convert date strings back to Date objects
      parsed.cards = parsed.cards.map((card: any) => ({
        ...card,
        nextReview: new Date(card.nextReview),
        lastReviewed: card.lastReviewed ? new Date(card.lastReviewed) : undefined
      }));
      parsed.reviews = parsed.reviews.map((review: any) => ({
        ...review,
        timestamp: new Date(review.timestamp)
      }));
      parsed.achievements = parsed.achievements.map((achievement: any) => ({
        ...achievement,
        unlockedAt: achievement.unlockedAt ? new Date(achievement.unlockedAt) : undefined
      }));
      if (parsed.stats.lastStudyDate) {
        parsed.stats.lastStudyDate = new Date(parsed.stats.lastStudyDate);
      }
      return parsed;
    }
  } catch (error) {
    console.error('Failed to load state:', error);
  }
  
  return getInitialState();
}

export function saveState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save state:', error);
  }
}

function getInitialState(): AppState {
  return {
    phrases,
    cards: phrases.map(phrase => initializeCard(phrase.id)),
    reviews: [],
    achievements: getInitialAchievements(),
    stats: {
      totalReviews: 0,
      currentStreak: 0,
      longestStreak: 0,
      cardsLearned: 0,
      totalTimeSpent: 0,
      studyDates: []
    }
  };
}

function getInitialAchievements(): Achievement[] {
  return [
    {
      id: 'first-review',
      name: 'Primeiro Passo',
      description: 'Complete your first review',
      icon: '🎯',
      unlocked: false,
      progress: 0,
      maxProgress: 1
    },
    {
      id: 'romantic-10',
      name: 'Coração Brasileiro',
      description: 'Learn 10 romantic phrases',
      icon: '❤️',
      unlocked: false,
      progress: 0,
      maxProgress: 10
    },
    {
      id: 'streak-7',
      name: 'Sete Dias',
      description: 'Study for 7 days in a row',
      icon: '🔥',
      unlocked: false,
      progress: 0,
      maxProgress: 7
    },
    {
      id: 'all-categories',
      name: 'Conversador',
      description: 'Learn phrases from all categories',
      icon: '💬',
      unlocked: false,
      progress: 0,
      maxProgress: 3
    },
    {
      id: 'reviews-50',
      name: 'Dedicação',
      description: 'Complete 50 reviews',
      icon: '⭐',
      unlocked: false,
      progress: 0,
      maxProgress: 50
    },
    {
      id: 'perfect-session',
      name: 'Perfeito!',
      description: 'Get all cards correct in a session',
      icon: '✨',
      unlocked: false,
      progress: 0,
      maxProgress: 1
    }
  ];
}
