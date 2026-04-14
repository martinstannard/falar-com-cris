import type { Card } from '../types';

/**
 * SM-2 Algorithm for spaced repetition
 * Quality: 0-5 where:
 * 0 - Complete blackout
 * 1 - Incorrect, but familiar
 * 2 - Incorrect, but easy to recall
 * 3 - Correct, but difficult
 * 4 - Correct, with hesitation
 * 5 - Perfect recall
 */
export function calculateNextReview(
  card: Card,
  quality: 0 | 1 | 2 | 3 | 4 | 5
): Card {
  let { easeFactor, interval, repetitions } = card;

  // If quality < 3, reset the card
  if (quality < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    // Update repetitions
    repetitions += 1;

    // Calculate interval
    if (repetitions === 1) {
      interval = 1;
    } else if (repetitions === 2) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
  }

  // Update ease factor
  easeFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  // Calculate next review date
  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);

  return {
    ...card,
    easeFactor,
    interval,
    repetitions,
    nextReview,
    lastReviewed: new Date()
  };
}

export function getDueCards(cards: Card[]): Card[] {
  const now = new Date();
  return cards.filter(card => new Date(card.nextReview) <= now);
}

export function initializeCard(phraseId: string): Card {
  const timestamp = Date.now();
  return {
    id: `card-${phraseId}-${timestamp}`,
    phraseId,
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
    nextReview: new Date()
  };
}
